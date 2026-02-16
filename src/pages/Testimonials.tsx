import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";

const reviews = [
  { name: "Ramesh Kumar", location: "Kolkata", rating: 5, text: "My mother has been at Swasti for over a year now. The care, warmth, and professionalism of the staff is truly commendable. She feels at home and that gives our family immense peace of mind." },
  { name: "Anita Dey", location: "Barasat", rating: 5, text: "The medical facilities are top-notch. Having 24/7 nursing and doctor support was the main reason we chose Swasti. The food is also excellent and fresh every day." },
  { name: "Sunil Ghosh", location: "North 24 Parganas", rating: 4, text: "The peaceful surroundings and the garden area are perfect for my father. He loves the morning walks and the temple. A truly wonderful place for senior care." },
  { name: "Priya Chatterjee", location: "Dum Dum", rating: 5, text: "We visited several old age homes before choosing Swasti. The cleanliness, staff behavior, and overall environment stood out. Highly recommended for anyone looking for quality elder care." },
  { name: "Debashis Pal", location: "Sodepur", rating: 5, text: "The aya service is exceptional. They treat every resident like family. My grandmother is very happy here and always tells us she doesn't want to leave." },
  { name: "Meera Sen", location: "Habra", rating: 4, text: "Good facilities and caring staff. The swimming pool and recreational activities keep the residents engaged. Would love to see more cultural programs." },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = Math.ceil(reviews.length / perPage);

  return (
    <PageTransition>
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Testimonials" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-primary" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Testimonials</h1>
          <p className="text-lg opacity-90 mt-2">What families say about us</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Client Reviews" subtitle="Real experiences from families who trust Swasti." />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <AnimatePresence mode="wait">
              {reviews.slice(current * perPage, current * perPage + perPage).map((r, i) => (
                <motion.div
                  key={r.name + current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="card-elevated p-8 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} size={16} className={si < r.rating ? "text-primary fill-primary" : "text-border"} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 italic">"{r.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{r.name}</p>
                      <p className="text-muted-foreground text-xs">{r.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {total > 1 && (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCurrent((p) => (p - 1 + total) % total)}
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                />
              ))}
              <button
                onClick={() => setCurrent((p) => (p + 1) % total)}
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Testimonials;
