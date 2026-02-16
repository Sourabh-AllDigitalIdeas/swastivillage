import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, Heart } from "lucide-react";
import { serviceData } from "@/lib/serviceData";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">S</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg block">Swasti</span>
              <span className="text-xs opacity-70">Old Age Home</span>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Promoting a life of wellness and auspiciousness for our beloved senior citizens.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Services", "Facilities", "Gallery", "Testimonials", "Contact"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
          <div className="space-y-2 text-sm">
            {serviceData.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="block opacity-70 hover:opacity-100 transition-opacity">
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 opacity-70">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>211 Road, Aminpur Bazar, P.O - Sondalia, P.S - Shasan, Dist. - North 24 Parganas</span>
            </div>
            <div className="flex items-center gap-3 opacity-70">
              <Phone size={16} className="shrink-0" />
              <span>082829 48945</span>
            </div>
            <div className="flex items-center gap-3 opacity-70">
              <Mail size={16} className="shrink-0" />
              <span>swastioldage@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 opacity-70">
              <Globe size={16} className="shrink-0" />
              <span>swastivillage.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-60">© 2026 Swasti Old Age Home. All rights reserved.</p>
        <p className="text-sm opacity-60 flex items-center gap-1">
          Made with <Heart size={14} className="text-primary" /> for our elders
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
