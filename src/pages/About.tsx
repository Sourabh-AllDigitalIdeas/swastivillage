import { Target, Eye, Heart, MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";
import facilityBg from "/images/47.jpeg";

const About = () => (
  <PageTransition>
    {/* Hero Banner */}
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="About Swasti" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-primary" />
      <div className="relative z-10 text-center text-primary-foreground">
        <h1 className="font-display text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="text-lg opacity-90 mt-2">Learn more about our mission and values</p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding">
      <div className="container-custom grid md:grid-cols-2 gap-8">
        <AnimatedSection>
          <div className="card-elevated p-8 h-full">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide a safe, nurturing, and dignified living environment for senior citizens, ensuring they receive
              the best medical care, nutrition, and emotional support. We strive to make every day meaningful and joyful
              for our residents.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="card-elevated p-8 h-full">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
              <Eye className="text-primary" size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and compassionate old age home in the region, setting new standards in elder care.
              We envision a world where every senior citizen lives with dignity, purpose, and happiness in their golden years.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Facility Overview */}
    <section className="section-padding bg-secondary">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <img src={facilityBg} alt="Our Facility" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <SectionHeading title="Our Facility" centered={false} />
          <p className="text-muted-foreground leading-relaxed mb-4">
            Swasti Old Age Home is a modern, well-equipped facility designed to provide the highest level of comfort
            and care. Our campus features lush green gardens, walking tracks, a swimming pool, and a peaceful temple
            for spiritual solace.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every room is designed with senior-friendly features including anti-slip flooring, emergency call systems,
            and natural lighting. Our dining hall serves freshly prepared, nutritious meals catered to individual
            dietary requirements.
          </p>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Heart size={18} /> Caring for your loved ones since 2018
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Address */}
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Visit Us" subtitle="We'd love to welcome you and your family." />
        <AnimatedSection>
          <div className="card-elevated p-8 max-w-xl mx-auto text-center">
            <MapPin className="text-primary mx-auto mb-4" size={32} />
            <p className="text-foreground font-medium mb-2">211 Road, Aminpur Bazar</p>
            <p className="text-muted-foreground text-sm">P.O - Sondalia, P.S - Shasan</p>
            <p className="text-muted-foreground text-sm mb-4">Dist. - North 24 Parganas</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground justify-center"><Phone size={14} /> 082829 48945</span>
              <span className="flex items-center gap-2 text-muted-foreground justify-center"><Mail size={14} /> swastioldage@gmail.com</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </PageTransition>
);

export default About;
