import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, QrCode, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";
import { api_config } from "@/config/config";
import QRCode from "react-qr-code";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = {
        fullName: form.name,
        email: form.email,
        mobileNumber: form.phone,
        lookingFor: form.subject || "General Enquiry - Swasti Old Age Home",
        message: `
New Contact Form Submission<br><br>

Full Name: ${form.name}<br>
Phone: ${form.phone}<br>
Email: ${form.email}<br>
Subject: ${form.subject || "Not provided"}<br>
Message: ${form.message}<br>

<br>
Submitted via: Swasti Old Age Home Contact Page<br>
Date: ${new Date().toLocaleDateString()}<br>
Time: ${new Date().toLocaleTimeString()}
      `.trim(),
        countryCode: '+91',
        clientId: '699c33f4e39a006e305f9514',
      };

      console.log("Submitting contact form:", submitData);

      const response = await fetch(`${api_config.api_url}/contact-forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert(`Error submitting message: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm disabled:opacity-50";

  return (
    <PageTransition>
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-primary" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg opacity-90 mt-2">We're here to help</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="Get In Touch" subtitle="Reach out to us for any enquiries or to schedule a visit." />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-6">

                {/* Address */}
                <div className="card-elevated p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <a
                      href="https://maps.google.com/?q=211 Road, Aminpur Bazar, Sondalia, North 24 Parganas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      211 Road, Aminpur Bazar<br />
                      P.O - Sondalia, P.S - Shasan<br />
                      Dist. - North 24 Parganas
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="card-elevated p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+918282948945"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +91 82829 48945
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="card-elevated p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:swastioldage@gmail.com"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      swastioldage@gmail.com
                    </a>
                  </div>
                </div>

                {/* QR Code */}
                {/* QR Code */}
<div className="card-elevated p-6 text-center">
  <QrCode className="text-primary mx-auto mb-3" size={32} />

  <div className="bg-white p-4 rounded-xl inline-block">
    <QRCode
      value="https://share.google/Ax5Hyl7ZuaaKtgeqg"
      size={120}
    />
  </div>

  <p className="text-muted-foreground text-xs mt-3">
    Scan to visit our website
  </p>

  {/* Direct Website Link */}
  {/* <a
    href="https://share.google/Ax5Hyl7ZuaaKtgeqg"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary text-sm underline mt-2 inline-block"
  >
    Visit Website
  </a> */}
</div>

              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="card-elevated p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-primary" size={28} />
                    </div>
                    <p className="font-display text-xl font-semibold text-foreground">Message Sent!</p>
                    <p className="text-muted-foreground text-sm mt-1">We'll respond within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={inputClass}
                        disabled={isSubmitting}
                      />
                    </div>
                    <textarea
                      required
                      placeholder="Your Message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      disabled={isSubmitting}
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Google Map Embed */}
          <AnimatedSection className="mt-12">
            <div className="card-elevated overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d88.75!3d22.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ1JzAwLjAiTiA4OMKwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&maptype=satellite"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Swasti Old Age Home Location"
                className="w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;