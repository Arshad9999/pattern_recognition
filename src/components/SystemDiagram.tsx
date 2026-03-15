import { motion } from "framer-motion";
import { Database, Filter, BarChart3, GitBranch, CheckCircle } from "lucide-react";

const steps = [
  { icon: Database, label: "Data Acquisition", sub: "Sensors & input" },
  { icon: Filter, label: "Pre-processing", sub: "Segmentation & enhancement" },
  { icon: BarChart3, label: "Feature Extraction", sub: "Vector representation" },
  { icon: GitBranch, label: "Classification", sub: "Decision boundaries" },
  { icon: CheckCircle, label: "Post-processing", sub: "Refinement & output" },
];

const SystemDiagram = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-2xl border border-border p-8 shadow-card my-8"
    >
      <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-6">
        Pattern Recognition Pipeline
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="flex flex-col items-center text-center min-w-[120px]"
            >
              <div className="w-14 h-14 rounded-xl bg-highlight-soft flex items-center justify-center mb-2">
                <step.icon className="w-6 h-6 text-highlight" />
              </div>
              <span className="text-sm font-medium text-foreground">{step.label}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{step.sub}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-8 h-px bg-border mx-1 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-highlight" />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SystemDiagram;
