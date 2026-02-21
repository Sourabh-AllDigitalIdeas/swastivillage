import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import {api_config} from "@/config/config";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = {
        fullName: form.name,
        email: form.email,
        mobileNumber: form.phone,
        lookingFor: "Enquiry - Swasti Old Age Home",
        message: `
New Enquiry Request<br><br>

Full Name: ${form.name}<br>
Phone: ${form.phone}<br>
Email: ${form.email}<br>
Message: ${form.message}<br>

<br>
Submitted via: Swasti Old Age Home Enquiry Modal<br>
Date: ${new Date().toLocaleDateString()}<br>
Time: ${new Date().toLocaleTimeString()}
      `.trim(),
        countryCode: '+91',
        clientId: '68cbc1eb6cba3c047986c521',
      };

      console.log("Submitting enquiry form:", submitData);

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
          setForm({ name: "", phone: "", email: "", message: "" });
          onClose();
        }, 2000);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Enquiry form error:", error);
      alert(`Error submitting request: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", message: "" });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-md bg-card rounded-2xl p-8 shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleClose} 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              <X size={24} />
            </button>

            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Book an Enquiry</h2>
            <p className="text-muted-foreground mb-6 text-sm">We'd love to hear from you. Fill in the details below.</p>

            {submitted ? (
              <motion.div 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-primary" size={28} />
                </div>
                <p className="font-display text-xl font-semibold text-foreground">Thank you!</p>
                <p className="text-muted-foreground text-sm mt-1">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text" 
                  required 
                  placeholder="Your Name"
                  value={form.name} 
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm disabled:opacity-50"
                  disabled={isSubmitting}
                />
                <input
                  type="tel" 
                  required 
                  placeholder="Phone Number"
                  value={form.phone} 
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm disabled:opacity-50"
                  disabled={isSubmitting}
                />
                <input
                  type="email" 
                  required 
                  placeholder="Email Address"
                  value={form.email} 
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm disabled:opacity-50"
                  disabled={isSubmitting}
                />
                <textarea
                  required 
                  placeholder="Your Message" 
                  rows={3}
                  value={form.message} 
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm disabled:opacity-50"
                  disabled={isSubmitting}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;