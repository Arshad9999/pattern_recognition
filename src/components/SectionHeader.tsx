import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

const SectionHeader = ({ number, title, subtitle, icon: Icon }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-highlight-soft flex items-center justify-center">
          <Icon className="w-5 h-5 text-highlight" />
        </div>
        <span className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground">
          Unit {number}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-700 tracking-tight text-foreground mb-2">
        {title}
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeader;
