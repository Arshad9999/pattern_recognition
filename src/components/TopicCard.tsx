import { motion } from "framer-motion";

interface TopicCardProps {
  title: string;
  description: string;
  tags?: string[];
  delay?: number;
}

const TopicCard = ({ title, description, tags, delay = 0 }: TopicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="group relative bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-highlight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <h3 className="font-display text-lg font-600 text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      {tags && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-code text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TopicCard;
