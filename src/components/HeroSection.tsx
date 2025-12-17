import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import wieLogo from "@/assets/logos/IEEE logo nobackground.png";
import ieeeLogo from "@/assets/logos/IEEE_WIE_White.png";
import mitsLogo from "@/assets/logos/mits_logo.png";
import sponsorLogo from "@/assets/logos/ieee sb logo white.png";

const HeroSection = () => {
  const scrollToTracks = () => {
    const section = document.getElementById("tracks");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="magical-particles" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* ZEAL LOGO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 mb-1 flex justify-center"
        >
          <img
            src="/logo/ZEAL LOGO.png"
            alt="ZEAL Logo"
            className="w-[60vw] sm:w-[48vw] md:w-[30vw] lg:w-[22vw] object-contain drop-shadow-[0_0_18px_rgba(0,0,0,0.9)]"
          />
        </motion.div>

        {/* Glowing Subtitle – closer to logo & larger on mobile */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-5 -mt-1"
        >
          <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/30 font-display font-semibold text-[0.7rem] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-white shadow-[0_0_28px_rgba(255,255,255,0.55)]">
            Zenith of Engineering and Leadership
          </span>
        </motion.p>

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center mb-8 sm:mb-10"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 rounded-full bg-black/65 backdrop-blur-xl border border-white/25 shadow-[0_0_35px_rgba(0,0,0,0.9)] text-white text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
              <span className="font-body tracking-wide">
                January 15th, 2026
              </span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/30" />

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
              <span className="font-body tracking-wide">
                Muthoot Institute of Technology &amp; Science
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="https://forms.gle/XZGnDEGJXu9vip1p6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <Button
              variant="hero"
              size="xl"
              className="group w-full sm:w-auto hover:shadow-[0_0_35px_#ff2d7a] hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              Register Now
            </Button>
          </a>

          <Button
            variant="outline"
            size="xl"
            onClick={scrollToTracks}
            className="w-full sm:w-auto hover:shadow-[0_0_25px_#ffffff60] hover:scale-105 transition-all duration-300"
          >
            Explore Tracks
          </Button>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 mt-12 sm:mt-[100px]"
        >
          {[wieLogo, ieeeLogo, mitsLogo, sponsorLogo].map((logo, i) => (
            <div key={i} className="w-24 h-12 sm:w-28 sm:h-16 flex items-center justify-center">
              <img src={logo} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
