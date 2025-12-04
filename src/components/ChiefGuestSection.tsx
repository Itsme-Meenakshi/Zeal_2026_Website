import { motion } from 'framer-motion';
import { Award, Building2, Sparkles } from 'lucide-react';
import chiefGuestPhoto from '@/assets/logos/placeholder.png';

const ChiefGuestSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="magical-particles opacity-30" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Chief Guest</h2>
          <p className="text-muted-foreground text-lg font-body">
            Inspiring the next generation of tech leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="gradient-border p-1 rounded-2xl">
            <div className="bg-card rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar placeholder with glow */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-magenta to-secondary p-1 animate-glow-pulse">
                    <img
                      src={chiefGuestPhoto}
                      alt="Chief Guest"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-display text-3xl md:text-4xl mb-2 text-foreground">
                    Neethu Maryam
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="text-primary font-display text-lg">
                      CEO, SuperBryn Company
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">
                    A visionary leader driving innovation in the technology
                    sector. Neethu Maryam brings a wealth of experience in
                    entrepreneurship and will share insights on leadership,
                    innovation, and the future of women in technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChiefGuestSection;
