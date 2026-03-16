import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TopicCard from "@/components/TopicCard";
import {
  BookOpen, Layers, Smartphone, Settings, Shapes, GraduationCap,
  Cpu, BarChart3, Calculator, LineChart, ExternalLink
} from "lucide-react";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.4 },
};

const GfgLink = ({ url, label }: { url: string; label: string }) => (
  <motion.a
    {...fadeIn}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-highlight-soft text-highlight text-sm font-medium hover:bg-accent/20 transition-colors mt-4"
  >
    <ExternalLink className="w-4 h-4" />
    {label}
  </motion.a>
);

const DefinitionBlock = ({ professional, layman }: { professional: string; layman: string }) => (
  <motion.div {...fadeIn} className="bg-card rounded-xl border border-border p-6 shadow-card mb-6">
    <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-4">Definitions</p>
    <div className="space-y-4">
      <div>
        <span className="text-xs font-medium px-2 py-1 rounded bg-navy text-primary-foreground mr-2">Professional</span>
        <p className="text-sm text-foreground mt-2 leading-relaxed">{professional}</p>
      </div>
      <div>
        <span className="text-xs font-medium px-2 py-1 rounded bg-highlight-soft text-highlight mr-2">Layman</span>
        <p className="text-sm text-foreground mt-2 leading-relaxed">{layman}</p>
      </div>
    </div>
  </motion.div>
);

const NumericalBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div {...fadeIn} className="bg-card rounded-xl border border-border p-6 shadow-card mb-6">
    <h4 className="font-display text-lg font-600 text-foreground mb-4">{title}</h4>
    <div className="font-mono-code text-sm text-foreground space-y-2 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

const Assignment1 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-surface opacity-60" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--navy) / 0.06) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono-code text-sm tracking-widest uppercase text-muted-foreground mb-4">Assignment 1</p>
            <h1 className="font-display text-4xl md:text-6xl font-800 tracking-tight mb-4 text-gradient-hero">
              Pattern Recognition
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive study notes covering definitions, methods, algorithms, and numerical examples.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Pattern and Pattern Recognition */}
      <section id="a1-01" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader number="01" title="Pattern & Pattern Recognition" subtitle="Definitions, examples, and the recognition pipeline." icon={BookOpen} />
        <DefinitionBlock
          professional="A pattern is a d-dimensional feature vector consisting of discriminating attributes that represent a physical object or an abstract notion. Pattern recognition is the scientific discipline of classifying data into categories based on statistical information or previously gained knowledge."
          layman='A pattern is a set of characteristics that repeat or identify something. Pattern recognition is the act of a computer "looking" at those characteristics to figure out what the object is, similar to how humans recognize a face.'
        />
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <TopicCard title="Face Recognition" description="A face is the pattern; eyes, nose, and mouth are the features." tags={["face", "features", "biometrics"]} />
          <TopicCard title="Animal Classification" description="Describing an animal's traits to determine its species." tags={["traits", "species", "classification"]} delay={0.1} />
          <TopicCard title="Feature Vectors" description="A sequence of measurements like [weight, diameter] for a ball." tags={["vector", "measurements", "dimensions"]} delay={0.2} />
          <TopicCard title="Feature Extraction" description="Reducing a large dataset to only the most relevant traits, like only using eye shape for face ID." tags={["reduction", "relevance", "extraction"]} delay={0.3} />
        </div>
        <motion.div {...fadeIn} className="bg-card rounded-xl border border-border p-6 shadow-card mb-4">
          <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-4">Pipeline Architecture</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-foreground">
            {["Data Acquisition", "Pre-processing", "Feature Extraction", "Classification", "Post-processing"].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="px-3 py-2 rounded-lg bg-highlight-soft text-highlight">{step}</span>
                {i < 4 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
          </div>
        </motion.div>
        <GfgLink url="https://www.geeksforgeeks.org/pattern-recognition-introduction/" label="GeeksforGeeks: Pattern Recognition Introduction" />
      </section>

      {/* 2. Methods of Pattern Recognition */}
      <section id="a1-02" className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <SectionHeader number="02" title="Methods of Pattern Recognition" subtitle="Statistical, syntactic, neural, template, and fuzzy approaches." icon={Layers} />
          <DefinitionBlock
            professional="Methodologies used to process and categorize patterns, ranging from statistical inference to structural analysis."
            layman='Different "strategies" or "brain types" a computer can use to solve a puzzle or identify an object.'
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            <TopicCard title="Statistical" description='Using math to draw a decision boundary line between groups.' tags={["probability", "boundary"]} />
            <TopicCard title="Syntactic" description='Using rules of "grammar" to identify the structure of an object, like fingerprint ridges.' tags={["grammar", "structure"]} delay={0.1} />
            <TopicCard title="Neural" description="Mimicking the human brain to learn from mistakes." tags={["brain", "learning"]} delay={0.2} />
            <TopicCard title="Template Matching" description='Comparing a sample directly to a stored "master" image.' tags={["comparison", "template"]} delay={0.3} />
            <TopicCard title="Fuzzy-based" description='Dealing with "maybe" or "sort of" rather than just yes/no.' tags={["degrees", "uncertainty"]} delay={0.4} />
          </div>

          <motion.div {...fadeIn} className="bg-card rounded-xl border border-border shadow-card overflow-hidden mb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-display font-600">Method</TableHead>
                  <TableHead>Core Logic</TableHead>
                  <TableHead>Best Use Case</TableHead>
                  <TableHead>Relation to Other Methods</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Statistical", "Mathematical probability", "Simple numeric data", "Foundations for most ML"],
                  ["Syntactic", "Structural rules", "Complex shapes/Characters", "Complements Statistical"],
                  ["Neural", "Brain-like learning", "Images/Audio/NLP", "Most computing intensive"],
                  ["Template", "Direct comparison", "Medical image matching", "Simplest approach"],
                  ["Fuzzy", "Degrees of truth", "Industrial control (AC/Washing)", "Handles uncertainty"],
                ].map(([method, logic, use, relation], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-foreground">{method}</TableCell>
                    <TableCell className="text-muted-foreground">{logic}</TableCell>
                    <TableCell className="text-muted-foreground">{use}</TableCell>
                    <TableCell className="text-muted-foreground">{relation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <GfgLink url="https://www.geeksforgeeks.org/statistical-and-syntactic-pattern-recognition/" label="GeeksforGeeks: Statistical and Syntactic PR" />
        </div>
      </section>

      {/* 3. Applications */}
      <section id="a1-03" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader number="03" title="Applications of Pattern Recognition" subtitle="Real-world deployment across industries." icon={Smartphone} />
        <DefinitionBlock
          professional="The practical deployment of recognition algorithms across industries to automate decision-making."
          layman="Real-world jobs that AI does, like sorting mail or finding faces in photos."
        />
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          <TopicCard title="Healthcare" description="Computer-aided detection (CAD) for identifying breast or lung cancer." tags={["CAD", "cancer", "diagnosis"]} />
          <TopicCard title="Cybersecurity" description="Detecting malware patterns to block hackers." tags={["malware", "intrusion", "detection"]} delay={0.1} />
          <TopicCard title="Social Media" description="Identifying fake accounts and offensive posts." tags={["fake accounts", "moderation"]} delay={0.2} />
        </div>
        <motion.div {...fadeIn} className="bg-card rounded-xl border border-border p-6 shadow-card mb-4">
          <p className="font-mono-code text-xs tracking-widest uppercase text-muted-foreground mb-4">Application Architecture</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-foreground">
            {["Sensor / Input Device", "Recognition Engine", "Output / Action"].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="px-3 py-2 rounded-lg bg-highlight-soft text-highlight">{step}</span>
                {i < 2 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
          </div>
        </motion.div>
        <GfgLink url="https://www.geeksforgeeks.org/applications-of-pattern-recognition/" label="GeeksforGeeks: Applications of PR" />
      </section>

      {/* 4. How Pattern Recognition Works */}
      <section id="a1-04" className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <SectionHeader number="04" title="How Pattern Recognition Works" subtitle="The explorative and descriptive phases." icon={Settings} />
          <DefinitionBlock
            professional="A two-phase process: the Explorative phase (searching for patterns) and the Descriptive phase (assigning new data to those patterns)."
            layman='A computer "cleans" its data, "picks" the best details, and "guesses" the category based on its memory.'
          />
          <div className="grid md:grid-cols-3 gap-5 mb-4">
            <TopicCard title="Data Collection" description="Gathering group photos from social media." tags={["input", "gathering"]} />
            <TopicCard title="Pre-processing" description="Sharpening a blurry 10-year-old photo to see traits." tags={["enhancement", "cleaning"]} delay={0.1} />
            <TopicCard title="Classification" description="Checking a fingerprint against a database to unlock a phone." tags={["matching", "decision"]} delay={0.2} />
          </div>
          <GfgLink url="https://www.geeksforgeeks.org/pattern-recognition-design-principles/" label="GeeksforGeeks: PR Design Principles" />
        </div>
      </section>

      {/* 5. Types of Patterns */}
      <section id="a1-05" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader number="05" title="Types of Patterns" subtitle="Categories by physical nature or mathematical distribution." icon={Shapes} />
        <DefinitionBlock
          professional="Categories of patterns classified by their physical nature or mathematical distribution."
          layman='Different ways data can "look" when you draw it on a graph.'
        />
        <div className="grid md:grid-cols-3 gap-5 mb-4">
          <TopicCard title="Symmetric / Bell-shaped" description="Data that is balanced and centers around a middle point." tags={["normal", "gaussian"]} />
          <TopicCard title="Skewed" description="Data that leans heavily to the left or right." tags={["asymmetric", "tail"]} delay={0.1} />
          <TopicCard title="Bimodal" description='Data with two distinct "humps" or peaks.' tags={["two peaks", "multimodal"]} delay={0.2} />
        </div>
        <GfgLink url="https://www.geeksforgeeks.org/types-of-patterns-in-pattern-recognition/" label="GeeksforGeeks: Types of Patterns" />
      </section>

      {/* 6. Types of Machine Learning */}
      <section id="a1-06" className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <SectionHeader number="06" title="Types of Machine Learning" subtitle="Supervised, unsupervised, and reinforcement learning." icon={GraduationCap} />
          <DefinitionBlock
            professional="The study of algorithms that improve automatically through experience to build predictive models."
            layman="Teaching computers to learn from data without being explicitly programmed for every single task."
          />
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            <TopicCard title="Supervised Learning" description="Learning with a teacher (labeled data). Example: Predicting height from age." tags={["labeled", "prediction"]} />
            <TopicCard title="Unsupervised Learning" description="Learning alone (unlabeled data). Example: Grouping similar clothes into stacks." tags={["unlabeled", "clustering"]} delay={0.1} />
            <TopicCard title="Reinforcement Learning" description="Learning by reward/penalty. Example: A robot navigating a maze." tags={["reward", "policy"]} delay={0.2} />
          </div>

          <motion.div {...fadeIn} className="bg-card rounded-xl border border-border shadow-card overflow-hidden mb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-display font-600">Type</TableHead>
                  <TableHead>Input Data</TableHead>
                  <TableHead>Goal</TableHead>
                  <TableHead>Feedback</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Supervised", "Labeled (Input-Output pairs)", "Predict/Map values", "Critic/Error signal"],
                  ["Unsupervised", "Unlabeled", "Find hidden patterns", "None (Self-discovery)"],
                  ["Reinforcement", "States and Actions", "Maximize rewards", "Reward/Penalty"],
                ].map(([type, input, goal, feedback], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-foreground">{type}</TableCell>
                    <TableCell className="text-muted-foreground">{input}</TableCell>
                    <TableCell className="text-muted-foreground">{goal}</TableCell>
                    <TableCell className="text-muted-foreground">{feedback}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <GfgLink url="https://www.geeksforgeeks.org/types-of-machine-learning/" label="GeeksforGeeks: Types of ML" />
        </div>
      </section>

      {/* 7. ML Algorithms */}
      <section id="a1-07" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader number="07" title="ML Algorithms in Pattern Recognition" subtitle="Key algorithms and their architectures." icon={Cpu} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <TopicCard title="Linear Regression" description="Predicts a number using the line equation: Y = a + bx." tags={["continuous", "best-fit"]} />
          <TopicCard title="Logistic Regression" description="Predicts categories using a Sigmoid S-curve." tags={["sigmoid", "probability"]} delay={0.1} />
          <TopicCard title="Decision Tree" description="Tree architecture using branches for test outcomes." tags={["Gini", "entropy"]} delay={0.2} />
          <TopicCard title="k-NN" description='Classifies points based on the "votes" of their neighbors.' tags={["distance", "neighbors"]} delay={0.3} />
          <TopicCard title="Neural Networks" description="Architecture with Input, Hidden, and Output layers." tags={["layers", "backprop"]} delay={0.4} />
          <TopicCard title="SVM" description="Uses a Hyperplane boundary to separate data classes." tags={["hyperplane", "margin"]} delay={0.5} />
        </div>
      </section>

      {/* 8. K-Means Numerical */}
      <section id="a1-08" className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <SectionHeader number="08" title="K-Means Clustering (Numerical)" subtitle="Step-by-step iteration with SSE calculation." icon={BarChart3} />
          <NumericalBlock title="K-Means Worked Example">
            <p><strong className="text-highlight">Initial Centroids:</strong> mean₁ = 2, mean₂ = 4</p>
            <div className="mt-3 p-3 rounded-lg bg-code">
              <p className="text-muted-foreground text-xs mb-1">Iteration 1</p>
              <p>Cluster 1 = &#123;2, 3&#125;, Cluster 2 = &#123;4, 10, 11, 12, 20, 30&#125;</p>
              <p>Updated mean₁ = 2.5, Updated mean₂ = 14.5</p>
            </div>
            <div className="mt-2 p-3 rounded-lg bg-code">
              <p className="text-muted-foreground text-xs mb-1">Iteration 2</p>
              <p>Cluster 1 = &#123;2, 3, 4&#125;, Cluster 2 = &#123;10, 11, 12, 20, 30&#125;</p>
              <p>Updated mean₁ = 3, Updated mean₂ = 16.6</p>
            </div>
            <div className="mt-2 p-3 rounded-lg bg-code">
              <p className="text-muted-foreground text-xs mb-1">Iteration 3</p>
              <p>No change in clusters → <strong className="text-highlight">Convergence</strong></p>
            </div>
            <p className="mt-3"><strong className="text-highlight">Final SSE:</strong> Total SSE = 289.2</p>
          </NumericalBlock>
        </div>
      </section>

      {/* 9. k-NN Numerical */}
      <section id="a1-09" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader number="09" title="k-NN Algorithm (Numerical)" subtitle="Distance calculation and classification by voting." icon={Calculator} />
        <NumericalBlock title="k-NN Worked Example — Query Q(2, 2.5)">
          <div className="p-3 rounded-lg bg-code mb-3">
            <p className="text-muted-foreground text-xs mb-1">Distances to Q(2, 2.5)</p>
            <p>A(1,1) = 1.803 &nbsp;|&nbsp; B(2,2) = 0.5 &nbsp;|&nbsp; C(1,3) = 1.118 &nbsp;|&nbsp; D(3,3) = 1.118</p>
          </div>
          <p><strong className="text-highlight">1-NN Result:</strong> Class 1 (B is closest)</p>
          <p className="mt-1"><strong className="text-highlight">3-NN Result:</strong> Class 2 (B, C, D closest — Class 2 wins 2 votes to 1)</p>
          <p className="mt-3 text-muted-foreground text-xs"><strong>Mahalanobis Distance:</strong> Adjusts for correlation by stretching/compressing axes based on data variance.</p>
        </NumericalBlock>
      </section>

      {/* 10. Logistic Regression Numerical */}
      <section id="a1-10" className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <SectionHeader number="10" title="Logistic Regression (Numerical)" subtitle="Sigmoid, cross-entropy loss, and weight update." icon={LineChart} />
          <NumericalBlock title="Logistic Regression Worked Example">
            <div className="space-y-2">
              <p><strong className="text-highlight">Logit:</strong> weight × x = 0.5 × 2 = 1.0</p>
              <p><strong className="text-highlight">Predicted Probability:</strong> σ(1.0) = 0.731</p>
              <p><strong className="text-highlight">Cross-Entropy Loss:</strong> −ln(0.731) = 0.313</p>
              <div className="mt-3 p-3 rounded-lg bg-code">
                <p className="text-muted-foreground text-xs mb-1">Weight Update</p>
                <p>Gradient = (predicted − target) × x = (0.731 − 1) × 2 = −0.538</p>
                <p>New Weight = 0.5 − (0.1 × −0.538) = <strong className="text-highlight">0.5538</strong></p>
              </div>
            </div>
          </NumericalBlock>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center">
        <p className="font-mono-code text-xs text-muted-foreground tracking-wider">
          Pattern Recognition — Assignment 1
        </p>
      </footer>
    </div>
  );
};

export default Assignment1;
