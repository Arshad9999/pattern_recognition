import HeroSection from "@/components/HeroSection";
import TableOfContents from "@/components/TableOfContents";
import SectionHeader from "@/components/SectionHeader";
import TopicCard from "@/components/TopicCard";
import SystemDiagram from "@/components/SystemDiagram";
import ApplicationCard from "@/components/ApplicationCard";
import {
  BookOpen, Layers, ScatterChart, PieChart, Smartphone,
  HeartPulse, Shield, MessageSquare, TrendingUp
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TableOfContents />

      {/* Section 1 */}
      <section id="section-01" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader
          number="01"
          title="Introduction & Paradigms"
          subtitle="Foundational concepts, learning types, and the pattern recognition pipeline."
          icon={BookOpen}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          <TopicCard
            title="Fundamental Concepts"
            description="Definition of patterns, physical vs. mathematical observation, and representation as vector feature values."
            tags={["vectors", "features", "observation"]}
            delay={0}
          />
          <TopicCard
            title="Supervised Learning"
            description="Learning from pre-categorized data with known labels to predict outcomes on unseen examples."
            tags={["labels", "training", "prediction"]}
            delay={0.1}
          />
          <TopicCard
            title="Unsupervised Learning"
            description="Discovering hidden structures and undetected patterns in unlabeled data sets."
            tags={["clustering", "structure", "unlabeled"]}
            delay={0.2}
          />
          <TopicCard
            title="Reinforcement Learning"
            description="Learning optimal actions through trial-and-error feedback signals — rewards and penalties."
            tags={["rewards", "policy", "exploration"]}
            delay={0.3}
          />
        </div>

        <SystemDiagram />
      </section>

      {/* Section 2 */}
      <section id="section-02" className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <SectionHeader
            number="02"
            title="Learning Classifiers"
            subtitle="Supervised models from statistical methods to neural networks and ensemble techniques."
            icon={Layers}
          />
          
          <div className="grid md:grid-cols-2 gap-5">
            <TopicCard
              title="Statistical Pattern Recognition"
              description="Using mathematical models and vector spaces to identify patterns and determine decision boundaries."
              tags={["SPR", "decision boundary", "vector space"]}
              delay={0}
            />
            <TopicCard
              title="Neural Networks"
              description="Input, hidden, and output layers mimicking brain function. Feed-forward method and backpropagation for weight adjustment."
              tags={["backprop", "layers", "activation"]}
              delay={0.1}
            />
            <TopicCard
              title="Linear & Logistic Regression"
              description="Linear regression for continuous values via best-fit lines. Logistic regression for categorical probabilities using the sigmoid function."
              tags={["sigmoid", "continuous", "categorical"]}
              delay={0.2}
            />
            <TopicCard
              title="Decision Trees & Random Forest"
              description="Tree structures using Gini impurity or entropy for splits. Random Forests aggregate multiple trees via majority vote."
              tags={["Gini", "entropy", "ensemble"]}
              delay={0.3}
            />
            <TopicCard
              title="Support Vector Machines"
              description="Selecting extreme support vectors to define a maximum margin hyperplane that optimally separates classes."
              tags={["SVM", "hyperplane", "margin"]}
              delay={0.4}
            />
            <TopicCard
              title="k-Nearest Neighbors"
              description="Classification based on distance similarity — Euclidean or Mahalanobis — to the k closest training examples."
              tags={["k-NN", "Euclidean", "Mahalanobis"]}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-03" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader
          number="03"
          title="Unsupervised Learning & Dimensionality"
          subtitle="Clustering algorithms and dimensionality reduction for unlabeled data."
          icon={Scatter}
        />
        
        <div className="grid md:grid-cols-3 gap-5">
          <TopicCard
            title="k-Means Clustering"
            description="Iteratively partitioning data by minimizing the Sum of Squared Errors (SSE) across cluster assignments."
            tags={["SSE", "centroids", "iterative"]}
            delay={0}
          />
          <TopicCard
            title="Hierarchical Clustering"
            description="Building a tree-like hierarchy (dendrogram) of clusters based on pairwise similarity measures."
            tags={["dendrogram", "agglomerative", "linkage"]}
            delay={0.1}
          />
          <TopicCard
            title="PCA & Dimensionality Reduction"
            description="Principal Component Analysis converts high-dimensional data into lower dimensions while retaining critical variance."
            tags={["PCA", "eigenvalues", "variance"]}
            delay={0.2}
          />
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-04" className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <SectionHeader
            number="04"
            title="Probabilistic & Mathematical Frameworks"
            subtitle="Bayesian classifiers, Markov models, fuzzy logic, and syntactic approaches."
            icon={PieChart}
          />
          
          <div className="grid md:grid-cols-2 gap-5">
            <TopicCard
              title="Naïve Bayes"
              description="Classifiers built on Bayes' theorem with the strong independence assumption between features."
              tags={["Bayes theorem", "prior", "posterior"]}
              delay={0}
            />
            <TopicCard
              title="Markov & Hidden Markov Models"
              description="Probabilistic models for sequential data, widely used in speech recognition and text processing."
              tags={["HMM", "states", "transitions"]}
              delay={0.1}
            />
            <TopicCard
              title="Fuzzy Logic"
              description="Handling ambiguity using degrees of truth rather than binary true/false logic for imprecise data."
              tags={["membership", "degrees", "ambiguity"]}
              delay={0.2}
            />
            <TopicCard
              title="Syntactic Pattern Recognition"
              description="Using semantic primitives and formal grammars to identify patterns based on structural relationships."
              tags={["grammar", "primitives", "structure"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-05" className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeader
          number="05"
          title="Applications"
          subtitle="Real-world impact across medicine, security, language, and finance."
          icon={Smartphone}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ApplicationCard
            icon={HeartPulse}
            title="Medical Imaging"
            examples={["CAD systems for cancer detection", "Lung pattern analysis", "Diagnostic assistance"]}
            delay={0}
          />
          <ApplicationCard
            icon={Shield}
            title="Cybersecurity"
            examples={["Malware pattern detection", "Real-time intrusion detection", "Anomaly identification"]}
            delay={0.1}
          />
          <ApplicationCard
            icon={MessageSquare}
            title="NLP & Speech"
            examples={["OCR text recognition", "Language translation", "Voice assistants (Siri, Alexa)"]}
            delay={0.2}
          />
          <ApplicationCard
            icon={TrendingUp}
            title="Finance"
            examples={["Fraud detection systems", "Sentiment analysis", "Marketing strategy insights"]}
            delay={0.3}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center">
        <p className="font-mono-code text-xs text-muted-foreground tracking-wider">
          Pattern Recognition — Course Overview
        </p>
      </footer>
    </div>
  );
};

export default Index;
