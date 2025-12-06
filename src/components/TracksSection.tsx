import { motion } from 'framer-motion';
import { Brain, Code2, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';

const tracks = [
  {
    icon: Brain,
    title: 'AI Track',
    description:
      'Explore the frontiers of artificial intelligence, machine learning, and neural networks. Build intelligent systems that shape the future.',
    topic: "Hands-on Workshop: Tensors to Thinking Machines",
    img: "/tracks/ai.jpg",
    color: 'primary',
    gradient: 'from-primary/20 to-magenta/20',
  },
  {
    icon: Code2,
    title: 'Web Dev Track',
    description:
      'Master modern web technologies, frameworks, and best practices. Create stunning, responsive applications from scratch.',
    topic: "Hands-on Workshop: Web development using AI",
    img: "/tracks/web.jpg",
    color: 'secondary',
    gradient: 'from-secondary/20 to-cosmic-blue/20',
  },
  {
    icon: Database,
    title: 'Data Science Track',
    description:
      'Unlock insights from data through analytics, visualization, and statistical modeling.',
    topic: "Hands-on Workshop: Data Science on Azure",
    img: "/tracks/data.webp",
    color: 'accent',
    gradient: 'from-accent/20 to-primary/20',
  },
  {
    icon: Database,
    title: '3D Modelling',
    description:
      'Learn creative design workflows, digital asset creation, and 3D environment building.',
    topic: "Hands-on Workshop: Introduction to 3D Asset Creation",
    img: "/tracks/3d.jpg",
    color: 'violet',
    gradient: 'from-violet-400/30 to-fuchsia-500/20',
  },
];

const TracksSection = () => {
  const firstThree = tracks.slice(0, 3);
  const lastTrack = tracks[3];

  return (
    <section id="tracks" className="relative py-24 bg-card/50">
      <div className="magical-particles opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Event Tracks</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Choose your path and unleash your potential across four exciting domains
          </p>
        </motion.div>

        {/* First 3 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {firstThree.map((track, index) => (
            <TrackCard key={track.title} track={track} index={index} />
          ))}
        </div>

        {/* Centered last one */}
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/3">
            <TrackCard track={lastTrack} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;

const TrackCard = ({ track, index }: any) => {
  const Icon = track.icon;

  return (
    <Dialog>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${track.gradient} border border-border hover:border-${track.color}/50 transition-all duration-500`}
      >
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-${track.color}/10 blur-xl`}
        />

        <div className="relative p-8">
          <div
            className={`w-20 h-20 mb-6 rounded-2xl bg-${track.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className={`w-10 h-10 text-${track.color}`} />
          </div>

          <h3 className="font-display text-2xl mb-4 text-foreground">
            {track.title}
          </h3>
          <p className="text-muted-foreground font-body mb-6 leading-relaxed">
            {track.description}
          </p>

          <DialogTrigger asChild>
            <Button
              variant="outline"
              className={`border-${track.color}/50 text-${track.color} hover:bg-${track.color} hover:text-foreground`}
            >
              Learn More
            </Button>
          </DialogTrigger>
        </div>
      </motion.div>

      {/* Popup */}
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {track.title}
          </DialogTitle>
        </DialogHeader>

        {/* Banner Image */}
        <img
          src={track.img}
          alt={track.title}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />

        {/* Topic Highlight */}
        <p className="text-lg font-semibold text-foreground mb-2">
          {track.topic}
        </p>

        {/* Original description */}
        <DialogDescription className="text-muted-foreground font-body leading-relaxed">
          {track.description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
