import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";

const facilities = [
  {
    name: "Clean & Spacious Rooms",
    image: "/images/36.jpeg",
  },
  {
    name: "Garden Area",
    image: "/images/26.jpeg",
  },
  {
    name: "Walking Track",
    image: "/images/14.jpeg",
  },
  {
    name: "Swimming Pool",
    image: "/images/53.jpeg",
  },
  {
    name: "Temple / Mandir",
    image: "/images/24.jpeg",
  },
  {
    name: "Park Area",
    image: "/images/20.jpeg",
  },
  {
    name: "Dining Hall",
    image: "/images/48.jpeg",
  },
  {
    name: "Medical Room",
    image: "/images/12.jpeg",
  },
  {
    name: "Recreation Room",
    image: "/images/35.jpeg",
  },
  {
    name: "Library Corner",
    image: "/images/33.jpeg",
  },
  {
    name: "Yoga Area",
    image: "/images/16.jpeg",
  },
  {
    name: "Guest Room",
    image: "/images/44.jpeg",
  },
];

const Facilities = () => (
  <PageTransition>
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Facilities" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-primary" />
      <div className="relative z-10 text-center text-primary-foreground">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Our Facilities</h1>
        <p className="text-lg opacity-90 mt-2">World-class amenities for a comfortable life</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Explore Our Facilities" subtitle="Modern infrastructure designed for comfort and wellness." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <AnimatedSection key={facility.name} delay={i * 0.05}>
              <div className="card-elevated overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <h3 className="font-display font-semibold text-foreground">
                    {facility.name}
                  </h3>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground">{facility.name}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Facilities;
