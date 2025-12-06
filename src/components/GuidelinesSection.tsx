import { motion } from "framer-motion";
import {
  AlertCircle,
  BookOpen,
  Laptop,
  Shield,
  Users,
} from "lucide-react";

const guidelines = [
  {
    icon: BookOpen,
    title: "General Guidelines",
    content: [
      "ZEAL is a day event. Participants must adhere to the schedule shared by the organizers.",
      "All participants must complete registration through the official ZEAL website before entering any event zone.",
      "Carry your college ID and registration confirmation at all times.",
      "Follow instructions given by event coordinators, volunteers and security personnel.",
    ],
  },
  {
    icon: Users,
    title: "Code of Conduct",
    content: [
      "Maintain respectful and professional behavior throughout the summit.",
      "Any form of harassment, discrimination, or disruptive behavior will not be tolerated.",
      "Treat all equipment, property, and venue infrastructure with care.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Event Participation",
    content: [
      "Participants must report to venues on time. Late entries may not be permitted.",
      "Follow the rules specific to each competition, workshop, or session as announced on-site.",
      "Misconduct or violation of event rules may lead to disqualification or removal from the venue.",
    ],
  },
  {
    icon: Laptop,
    title: "Technical & Workshop Guidelines",
    content: [
      "Talk Sessions: Be seated before the session begins to avoid disturbance. Maintain silence during talks.",
      "Hands-On Workshops: Bring your own laptop, chargers, and accessories unless informed otherwise.",
      "Ensure all required software/tools are installed beforehand.",
      "Follow instructions from mentors for safety and smooth execution.",
    ],
  },
  {
    icon: Shield,
    title: "Safety & Certificates",
    content: [
      "Keep your personal belongings safe; organizers are not responsible for loss or damage.",
      "Report any suspicious activity or safety concerns to volunteers immediately.",
      "Certificates will be provided only to participants who meet attendance and eligibility criteria.",
      "Maintain cleanliness within all event spaces. Food and beverages are allowed only in designated areas.",
    ],
  },
];

const GuidelinesSection = () => {
  return (
    <section id="guidelines" className="relative py-24 bg-card/50">
      <div className="magical-particles opacity-20" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Event Guidelines</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Please read and follow all guidelines to ensure a safe and enjoyable
            experience for everyone
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {guidelines.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`
                  relative overflow-hidden rounded-2xl bg-card/70 border border-primary/20 shadow-[0_0_25px_rgba(255,79,154,0.08)]
                  ${index === 4 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
                `}
              >
                {/* Soft gradient edge */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-purple-500/5" />

                <div className="relative p-6 space-y-4">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  {/* Content list */}
                  <ul className="space-y-3 pl-1">
                    {item.content.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground font-body flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
