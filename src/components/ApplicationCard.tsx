import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ApplicationCardProps {
  icon: LucideIcon;
  title: string;
  examples: string[];
  delay?: number;
}

const ApplicationCard = ({ icon: Icon, title, examples, delay = 0 }: ApplicationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="font-display text-lg font-600 text-foreground mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {examples.map((ex, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-highlight mt-2 shrink-0" />
            {ex}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ApplicationCard;
