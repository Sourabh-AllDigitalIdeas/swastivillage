import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import { serviceData } from "@/lib/serviceData";
import heroBg from "@/assets/hero-bg.jpg";

const Services = () => (
  <PageTransition>
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Services" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-primary" />
      <div className="relative z-10 text-center text-primary-foreground">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="text-lg opacity-90 mt-2">Comprehensive care for every need</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom space-y-16">
        {serviceData.map((section, si) => (
          <div key={section.slug}>
            <AnimatedSection>
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {section.emoji} {section.title}
                </h2>
                <Link
                  to={`/services/${section.slug}`}
                  className="hidden sm:inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                >
                  View Details <ChevronRight size={16} />
                </Link>
              </div>
              <p className="text-muted-foreground text-sm mb-6">{section.tagline}</p>
              <div className="w-12 h-1 bg-primary rounded-full mb-8" />
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item, i) => (
                <AnimatedSection key={item.label + i} delay={i * 0.05}>
                  <div className="card-elevated p-5 flex items-center gap-4 group border-2 border-transparent hover:border-primary/20">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <span className="text-foreground font-medium text-sm">{item.label}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <Link
              to={`/services/${section.slug}`}
              className="sm:hidden mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
            >
              View Details <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  </PageTransition>
);

export default Services;
