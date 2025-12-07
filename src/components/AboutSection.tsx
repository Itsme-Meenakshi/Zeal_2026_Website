import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="magical-particles opacity-30" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title mb-6">About ZEAL 2026</h2>

          <p className="text-muted-foreground text-lg font-body leading-relaxed mb-5">
            ZEAL is the <span className="text-primary font-medium">flagship one-day summit </span> 
            organized by the IEEE Women in Engineering (WIE) Affinity Group at MITS. 
            Envisioned as a defining initiative, ZEAL reflects a commitment to 
            <span className="text-primary font-medium"> innovation, leadership, and purposeful engagement</span>.
          </p>

          <p className="text-muted-foreground text-lg font-body leading-relaxed mb-5">
            Across <span className="text-primary font-medium">months of pre-events, workshops, and chapter-led engagements</span>, 
            ZEAL has grown through sustained momentum and shared creative effort, shaping the narrative 
            and direction of this year’s edition.
          </p>

          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            The summit stands as the <span className="text-primary font-medium">final culmination </span> 
            of this evolving journey, carrying forward the 
            <span className="text-primary font-medium"> WIE vision</span> within the broader landscape 
            of technology, expression, and collective growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
