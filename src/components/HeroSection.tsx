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

      {/* Dark overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="magical-particles" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* ZEAL – tall, tight like poster */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-2 mt-[50px]"
          style={{
            fontFamily: '"Bebas Neue", system-ui, sans-serif',
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "18vw",          // big + vertical look
            lineHeight: 0.82,
            letterSpacing: "-0.07em",  // squeeze letters together hard
            textRendering: "geometricPrecision",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: "scaleY(1.22)",           // stretch vertically
              transformOrigin: "center",
              background:
                "linear-gradient(180deg, #ffffff 5%, #f7e6f0 40%, #ff2d7a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 6px rgba(0,0,0,0.7))",
            }}
          >
            ZEAL
          </span>
        </motion.h1>

        {/* Glowing Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/30 font-display text-[11px] md:text-sm tracking-[0.35em] uppercase text-white shadow-[0_0_30px_rgba(255,255,255,0.55)]">
            Zenith of Engineering and Leadership
          </span>
        </motion.p>

        {/* Date & Venue – pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center mb-10"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-black/65 backdrop-blur-xl border border-white/25 shadow-[0_0_35px_rgba(0,0,0,0.9)] text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-pink-400" />
              <span className="font-body text-base md:text-lg tracking-wide">
                January 5th, 2025
              </span>
            </div>

            <div className="w-px h-6 bg-white/30 hidden sm:block" />

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pink-400" />
              <span className="font-body text-base md:text-lg tracking-wide">
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://forms.gle/XZGnDEGJXu9vip1p6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="hero"
              size="xl"
              className="group hover:shadow-[0_0_35px_#ff2d7a] hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              Register Now
            </Button>
          </a>

          <Button
            variant="outline"
            size="xl"
            onClick={scrollToTracks}
            className="hover:shadow-[0_0_25px_#ffffff60] hover:scale-105 transition-all duration-300"
          >
            Explore Tracks
          </Button>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 mt-[35px]"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary font-display text-sm tracking-widest uppercase">
            IEEE WIE AG MITS Initiative
          </span>
        </motion.div>

        {/* Logos – equal size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-16 mt-[100px]"
        >
          {[wieLogo, ieeeLogo, mitsLogo, sponsorLogo].map((logo, i) => (
            <div key={i} className="w-28 h-16 flex items-center justify-center">
              <img src={logo} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
