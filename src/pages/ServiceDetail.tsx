import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import { getServiceBySlug, serviceData } from "@/lib/serviceData";
import heroBg from "@/assets/hero-bg.jpg";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <PageTransition>
        <section className="section-padding text-center min-h-[60vh] flex items-center justify-center">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary font-semibold hover:underline">
              ← Back to Services
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  const otherServices = serviceData.filter((s) => s.slug !== slug);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-primary" />
        <div className="relative z-10 text-center text-primary-foreground">
          <p className="text-4xl mb-2">{service.emoji}</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">{service.title}</h1>
          <p className="text-lg opacity-90 mt-2">{service.tagline}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium">{service.title}</span>
        </div>
      </div>

      {/* Description */}
      <section className="section-padding pt-8">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">About {service.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.description}</p>
            </AnimatedSection>

            {/* Service Items */}
            <div className="space-y-4">
              {service.items.map((item, i) => (
                <AnimatedSection key={item.label + i} delay={i * 0.05}>
                  <div className="card-elevated p-6 flex items-start gap-5 group border-2 border-transparent hover:border-primary/20">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-base mb-1">{item.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection delay={0.2}>
              <div className="card-elevated p-6 sticky top-24">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Other Services</h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <s.icon className="text-primary" size={18} />
                      </div>
                      <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
                        {s.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="mt-4 block text-center py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServiceDetail;
