import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";

const images = Array.from({ length: 54 }, (_, i) => ({
  id: i,
  src: `/images/${i + 1}.jpeg`,
  alt: `Gallery image ${i + 1}`,
}));

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  const IMAGES_PER_PAGE = 12;

const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
const currentImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

const changePage = (page: number) => {
  setCurrentPage(page);
  setLightbox(null); // close lightbox when page changes
};

  return (
    <PageTransition>
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-primary" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-lg opacity-90 mt-2">A glimpse into life at Swasti</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* <SectionHeading title="Our Gallery" subtitle="Moments of joy, care, and togetherness." /> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.map((img, i) => (
              <AnimatedSection key={img.id} delay={i * 0.04}>
                <div
                  className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-square"
                 onClick={() => setLightbox(startIndex + i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">View</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
<div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
  
  {/* Previous */}
  <button
    onClick={() => changePage(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-4 py-2 rounded-md border text-sm disabled:opacity-40"
  >
    Prev
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      onClick={() => changePage(i + 1)}
      className={`px-4 py-2 rounded-md text-sm font-semibold transition
        ${currentPage === i + 1
          ? "bg-primary text-white"
          : "border hover:bg-slate-100"
        }
      `}
    >
      {i + 1}
    </button>
  ))}

  {/* Next */}
  <button
    onClick={() => changePage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 rounded-md border text-sm disabled:opacity-40"
  >
    Next
  </button>
</div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground">
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground">
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
