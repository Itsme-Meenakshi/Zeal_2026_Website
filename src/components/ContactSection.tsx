import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="magical-particles opacity-30" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Registration CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="section-title mb-6">Ready to Join?</h2>
            <p className="text-muted-foreground text-lg font-body mb-8 leading-relaxed">
              Embark on an extraordinary journey of learning, innovation, and
              empowerment. Register now to secure your spot at ZEAL 2026 and be
              part of something amazing.
            </p>

            <div className="space-y-4">
              {/* 🔗 Register button → Google Form */}
              <a
                href="https://forms.gle/XZGnDEGJXu9vip1p6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block"
              >
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto group"
                >
                  <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                  Register Now
                </Button>
              </a>

              <p className="text-sm text-muted-foreground font-body">
                {/* optional helper text if you want later */}
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gradient-border p-8">
              <h3 className="font-display text-2xl mb-6 text-foreground">
                Contact Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:9778422456"
                      className="text-foreground font-body text-lg hover:text-primary transition-colors"
                    >
                      +91 9778422456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-display text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:ieeesbmits@gmail.com"
                      className="text-foreground font-body text-lg hover:text-secondary transition-colors break-all"
                    >
                      ieeesbmits@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-display text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      Venue
                    </p>
                    <p className="text-foreground font-body text-lg">
                      Muthoot Institute of Technology & Science
                      <br />
                      <span className="text-muted-foreground">
                        Varikoli, Kochi, Kerala
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
