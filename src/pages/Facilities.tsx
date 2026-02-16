import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";

const facilities = [
  "Clean & Spacious Rooms", "Garden Area", "Walking Track", "Swimming Pool",
  "Temple / Mandir", "Park Area", "Dining Hall", "Medical Room",
  "Recreation Room", "Library Corner", "Yoga Area", "Guest Room",
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
          {facilities.map((name, i) => (
            <AnimatedSection key={name} delay={i * 0.05}>
              <div className="card-elevated overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground">{name}</h3>
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
