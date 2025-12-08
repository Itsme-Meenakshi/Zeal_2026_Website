import { motion } from "framer-motion";
import zealLogo from "/logo/ZEAL LOGO.png"; // imported logo

const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
        >
          {/* 🔥 ZEAL Logo */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img
              src={zealLogo}
              alt="ZEAL Logo"
              className="
                w-20       /* medium mobile */
                md:w-24    /* medium-large desktop */
                object-contain
                drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]
              "
            />
            <p className="text-muted-foreground font-body text-sm mt-1">
              IEEE WIE AG MITS Initiative
            </p>
          </div>

          {/* Organized By */}
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-muted-foreground font-body text-sm">
              Organized by
            </span>
            <span className="px-3 py-1 rounded-full bg-pink-600/30 text-pink-400 border border-pink-500 font-display text-xs tracking-wider shadow-[0_0_12px_#ff2d7aa8]">
              IEEE WIE AG MITS
            </span>
          </div>

          {/* Contact / Link */}
          <div className="text-center md:text-right">
            <a
              href="https://ieeesbmits.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors font-body"
            >
              ieeesbmits.in
            </a>
            <p className="text-muted-foreground font-body text-sm mt-1">
              © 2026 All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
