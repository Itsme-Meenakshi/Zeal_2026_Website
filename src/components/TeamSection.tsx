import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const team = [
  {
    name: "Ayoona Maria John",
    role: "Chairperson",
    phone: "8075412292",
    email: "22ct014@mgits.ac.in",
    img: "/team/Ayoona.jpeg",
  },
  {
    name: "Meenakshi Santhosh M S",
    role: "Vice-Chair",
    phone: "9778422456",
    email: "23ad608@mgits.ac.in",
    img: "/team/WhatsApp Image 2025-12-06 at 5.01.29 PM.jpeg",
  },
  {
    name: "Nandana R",
    role: "Secretary",
    phone: "9496671020",
    email: "22ad305@mgits.ac.in",
    img: "/team/nandana.jpeg",
  },
  {
    name: "Hanna Mary Basil",
    role: "Outreach",
    phone: "9946676699",
    email: "23ec538@mgits.ac.in",
    img: "/team/hanna.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-24 bg-background">
      <div className="magical-particles opacity-20" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="section-title mb-4">Meet the Team</h2>
          <p className="text-[#d7c1e0] text-lg max-w-2xl mx-auto font-body">
            The core force behind ZEAL — leading with vision, coordination, and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-b from-[#6D0B7C]/30 to-[#FF2D7A]/20 p-8 rounded-2xl border border-[#6D0B7C]/40 hover:border-[#FF2D7A]/60 shadow-lg hover:shadow-[0_0_25px_#ff2d7a70] transition group duration-500"
            >
              {/* Photo */}
              <div className="flex justify-center mb-4">
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#6D0B7C] via-[#FF2D7A] to-[#FFC4E3] p-[4px] shadow-[0_0_35px_#ff2d7a70] flex items-center justify-center">
                  {member.img ? (
                    <div className="w-[96%] h-[96%] rounded-full overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-[96%] h-[96%] rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-sm text-gray-400">
                      Add Photo
                    </div>
                  )}
                </div>
              </div>

              {/* Member Details */}
              <h3 className="text-white font-display text-xl text-center mb-1">
                {member.name}
              </h3>
              <p className="text-pink-200 font-medium text-center mb-4">
                {member.role}
              </p>

              {/* Contact */}
              <div className="flex flex-col items-center gap-2 text-sm text-gray-300">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 hover:text-pink-300 transition"
                >
                  <Mail size={16} /> {member.email}
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 hover:text-pink-300 transition"
                >
                  <Phone size={16} /> {member.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
