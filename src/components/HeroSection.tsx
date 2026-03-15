import { motion } from "framer-motion";
import { Brain, Eye, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-surface opacity-60" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--navy) / 0.06) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            {[Brain, Eye, Cpu].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                className="w-12 h-12 rounded-xl bg-highlight-soft flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-highlight" />
              </motion.div>
            ))}
          </div>

          <p className="font-mono-code text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Course Overview
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-800 tracking-tight mb-6 text-gradient-hero">
            Pattern Recognition
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From fundamental paradigms to real-world applications — explore how machines learn to see, classify, and understand the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Supervised", "Unsupervised", "Reinforcement", "Probabilistic", "Applications"].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm font-medium bg-card shadow-card text-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
