import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <AnimatedSection className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>}
    <div className={`w-16 h-1 bg-primary rounded-full mt-4 ${centered ? "mx-auto" : ""}`} />
  </AnimatedSection>
);

export default SectionHeading;
