import { motion } from "framer-motion";

const sections = [
  { num: "01", title: "Introduction & Paradigms" },
  { num: "02", title: "Learning Classifiers" },
  { num: "03", title: "Unsupervised Learning" },
  { num: "04", title: "Probabilistic Frameworks" },
  { num: "05", title: "Applications" },
];

const TableOfContents = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto my-16 px-6"
    >
      <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6 text-center">
        Contents
      </p>
      <div className="space-y-0 border border-border rounded-xl overflow-hidden bg-card shadow-card">
        {sections.map((s, i) => (
          <a
            key={i}
            href={`#section-${s.num}`}
            className="flex items-center gap-4 px-6 py-4 hover:bg-surface transition-colors border-b border-border last:border-b-0 group"
          >
            <span className="font-mono-code text-sm text-highlight font-medium">{s.num}</span>
            <span className="text-foreground font-medium group-hover:text-highlight transition-colors">
              {s.title}
            </span>
            <span className="ml-auto text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default TableOfContents;
