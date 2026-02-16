import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Utensils, Home, Stethoscope, Trees, UserCheck, Shield, HeartPulse, Leaf, Sun,
  ChevronRight, Star, Phone, Clock, Users, Award, Calendar, Coffee, Dumbbell,
  BookOpen, Music, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import Counter from "@/components/Counter";
import { serviceData } from "@/lib/serviceData";

const services = serviceData.slice(0, 5).map((s) => ({
  icon: s.icon,
  title: s.title,
  desc: s.tagline,
  slug: s.slug,
}));

const trustPoints = [
  { icon: Shield, title: "24×7 Care", desc: "Round the clock supervision and assistance" },
  { icon: HeartPulse, title: "Medical Support", desc: "Qualified doctors and nurses always available" },
  { icon: Leaf, title: "Peaceful Surroundings", desc: "Green gardens and calm environment" },
  { icon: Sun, title: "Safe Environment", desc: "Secure premises with caring staff" },
];

const testimonials = [
  { name: "Ramesh Kumar", text: "Swasti has given my mother a second home. The care and attention is beyond expectations.", rating: 5 },
  { name: "Anita Dey", text: "The medical facilities and the warm staff make all the difference. Highly recommended!", rating: 5 },
  { name: "Sunil Ghosh", text: "A peaceful and loving environment. We are so grateful to have found Swasti.", rating: 4 },
];

const dailyRoutine = [
  { time: "6:00 AM", activity: "Morning Wake-up & Yoga", icon: Sun },
  { time: "7:30 AM", activity: "Breakfast", icon: Coffee },
  { time: "9:00 AM", activity: "Health Check & Medicine", icon: HeartPulse },
  { time: "10:00 AM", activity: "Recreational Activities", icon: BookOpen },
  { time: "12:30 PM", activity: "Lunch", icon: Utensils },
  { time: "2:00 PM", activity: "Rest & Relaxation", icon: Home },
  { time: "4:00 PM", activity: "Evening Walk & Exercise", icon: Dumbbell },
  { time: "5:00 PM", activity: "Tea & Snacks", icon: Coffee },
  { time: "6:00 PM", activity: "Cultural & Social Activities", icon: Music },
  { time: "8:00 PM", activity: "Dinner", icon: Utensils },
  { time: "9:30 PM", activity: "Goodnight", icon: Clock },
];

const faqs = [
  { q: "What is the admission process?", a: "You can visit us or call to schedule a tour. Our team will guide you through the admission process, discuss care needs, and help with documentation." },
  { q: "Can family members visit anytime?", a: "Yes! We encourage family visits. Visiting hours are flexible, and we also organize family events and festivals throughout the year." },
  { q: "What medical facilities are available?", a: "We have 24×7 nursing, on-call doctors, an in-house pharmacy, diagnostic lab, ambulance service, and partnerships with nearby hospitals." },
  { q: "Are special diets accommodated?", a: "Absolutely. Our kitchen prepares customized meals for diabetic, cardiac, low-sodium, and other special dietary requirements." },
  { q: "Is there a trial stay option?", a: "Yes, we offer short-term and trial stays so residents and families can experience our care before making a long-term decision." },
];

const stats = [
  { end: 200, suffix: "+", label: "Happy Residents" },
  { end: 50, suffix: "+", label: "Caring Staff" },
  { end: 7, suffix: "", label: "Years of Service" },
  { end: 24, suffix: "/7", label: "Medical Support" },
];

interface IndexProps {
  onEnquiry: () => void;
}

const Index = ({ onEnquiry }: IndexProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Swasti Old Age Home"
          className="absolute inset-0 w-full h-full object-cover scale-105 brightness-90"
        />

        <div className="absolute inset-0 gradient-primary" />
        <div className="relative z-10 container-custom text-center text-primary-foreground py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base font-medium tracking-widest uppercase mb-4 opacity-90"
          >
            Welcome to Swasti Old Age Home
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
          >
            Promoting a Life of Wellness and Auspiciousness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90"
          >
            A caring sanctuary where your loved ones thrive with dignity, comfort, and compassion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onEnquiry}
              className="px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg"
            >
              Book Enquiry
            </button>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-lg"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding gradient-section">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src={heroBg} alt="About Swasti" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Home Away From Home
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Swasti Old Age Home, we believe every senior deserves to live with dignity, care, and joy. Our
              state-of-the-art facility provides comprehensive care including medical support, nutritious meals, and a
              peaceful environment that feels just like home.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read More <ChevronRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Our Services" subtitle="Comprehensive care services designed for comfort, health, and happiness." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link to={`/services/${service.slug}`}>
                  <div className="card-elevated p-8 h-full group cursor-pointer border-2 border-transparent hover:border-primary/30">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Why Choose Us" subtitle="Trusted by families for compassionate and professional elder care." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{point.title}</h3>
                  <p className="text-muted-foreground text-sm">{point.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="A Day at Swasti" subtitle="A thoughtfully structured daily routine for health and happiness." />
          <div className="max-w-3xl mx-auto">
            {dailyRoutine.map((item, i) => (
              <AnimatedSection key={item.time} delay={i * 0.04}>
                <div className="flex items-center gap-4 py-4 border-b border-border last:border-0 group">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-foreground font-medium text-sm">{item.activity}</span>
                    <span className="text-muted-foreground text-xs font-mono bg-secondary px-3 py-1 rounded-full">{item.time}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Our Dedicated Team" subtitle="Compassionate professionals committed to the well-being of our residents." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Arun Sharma", role: "Chief Medical Officer", icon: HeartPulse },
              { name: "Smt. Meena Das", role: "Head Caretaker", icon: Users },
              { name: "Mr. Rajesh Pal", role: "Facility Manager", icon: Home },
              { name: "Dr. Priya Sen", role: "Nutritionist", icon: Utensils },
            ].map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="card-elevated p-6 text-center group">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                    <member.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="What Families Say" subtitle="Real stories from families who trust us with their loved ones." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="card-elevated p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} size={16} className={si < t.rating ? "text-primary fill-primary" : "text-border"} />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading title="Frequently Asked Questions" subtitle="Answers to common questions from families." />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-elevated overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-primary-foreground">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Give Your Loved Ones the Care They Deserve</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Contact us today to schedule a visit and discover why families choose Swasti Old Age Home.
            </p>
            <button
              onClick={onEnquiry}
              className="px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg inline-flex items-center gap-2"
            >
              <Phone size={20} /> Book an Enquiry
            </button>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
