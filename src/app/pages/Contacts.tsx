import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { GradientButton } from '../components/GradientButton';

export function Contacts() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl tracking-wider mb-6">CONTACTS</h1>
          <div className="w-16 h-[1px] bg-foreground mx-auto mb-8"></div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We'd love to hear from you. Visit us, call us, or book an appointment online.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Booking Form */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="flex items-start gap-6">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl tracking-wider mb-3">VISIT US</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Beauty Avenue<br />
                    Downtown, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Phone className="text-primary mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl tracking-wider mb-3">CALL US</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Phone: +1 (555) 123-4567<br />
                    WhatsApp: +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Mail className="text-primary mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl tracking-wider mb-3">EMAIL US</h3>
                  <p className="text-muted-foreground">info@atozstudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Clock className="text-primary mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl tracking-wider mb-3">HOURS</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Monday - Friday: 9:00 AM - 8:00 PM<br />
                    Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl tracking-wider mb-6">FOLLOW US</h3>
                <div className="flex gap-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={28} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook size={28} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter size={28} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl tracking-wider mb-8">BOOK APPOINTMENT</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 tracking-wider text-sm">NAME</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-full bg-input-background border border-border focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 tracking-wider text-sm">EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-full bg-input-background border border-border focus:outline-none focus:border-foreground transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 tracking-wider text-sm">PHONE</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-full bg-input-background border border-border focus:outline-none focus:border-foreground transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-2 tracking-wider text-sm">SERVICE</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-full bg-input-background border border-border focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option>Hair Styling</option>
                    <option>Makeup</option>
                    <option>Manicure & Pedicure</option>
                    <option>Spa Treatments</option>
                    <option>Cosmetology</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block mb-2 tracking-wider text-sm">PREFERRED DATE</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 rounded-full bg-input-background border border-border focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 tracking-wider text-sm">MESSAGE</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl bg-input-background border border-border focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Any special requests?"
                  ></textarea>
                </div>

                <GradientButton type="submit" className="w-full">
                  SEND REQUEST
                </GradientButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-muted">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="tracking-wider">MAP PLACEHOLDER</p>
            <p className="text-sm mt-2">123 Beauty Avenue, Downtown, NY 10001</p>
          </div>
        </div>
      </section>
    </div>
  );
}
