import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Camera, Zap, ShoppingCart, CheckCircle, Code, Cpu, Server, Database, Wifi, BarChart3, Shield, Clock, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

import aiSurveillanceImg from "@/assets/project-ai-surveillance.jpg";
import iotEnergyImg from "@/assets/project-iot-energy.jpg";
import nawrasImg from "@/assets/project-nawras.jpg";

const projectsData = {
  "ai-surveillance": {
    icon: Camera,
    title: "AI Surveillance Cam",
    tagline: "Smart security for agriculture & industry",
    category: "Computer Vision • Agriculture • Security",
    heroImage: aiSurveillanceImg,
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-cyan-400",
    description: "An intelligent surveillance system that leverages cutting-edge behavioral recognition algorithms to provide smart security solutions for agricultural fields and industrial facilities. The system detects anomalies, tracks movement patterns, and sends real-time alerts to operators.",
    problem: "Traditional security cameras require constant human monitoring and often fail to detect subtle anomalies or unusual behavior patterns. This leads to security breaches, crop theft in agricultural settings, and unauthorized access in industrial zones.",
    solution: "Our AI-powered surveillance system uses deep learning models trained on behavioral patterns to automatically detect and alert operators of suspicious activities. The edge computing approach ensures real-time processing without cloud dependency.",
    techStack: [
      { name: "Python", icon: Code },
      { name: "TensorFlow", icon: Cpu },
      { name: "OpenCV", icon: Camera },
      { name: "Edge Computing", icon: Server },
    ],
    features: [
      { title: "Behavioral Recognition", description: "Advanced ML algorithms that learn normal patterns and detect anomalies in real-time." },
      { title: "Real-time Alerts", description: "Instant notifications via SMS, email, or mobile app when threats are detected." },
      { title: "Edge Computing", description: "On-device processing for low latency and operation without internet dependency." },
      { title: "Night Vision", description: "Infrared capabilities for 24/7 monitoring in all lighting conditions." },
      { title: "Multi-zone Coverage", description: "Single device can monitor multiple zones with customized alert settings." },
      { title: "Historical Analysis", description: "Review and analyze past incidents with searchable video archives." },
    ],
    stats: [
      { value: "98%", label: "Detection Accuracy" },
      { value: "<100ms", label: "Response Time" },
      { value: "24/7", label: "Monitoring" },
      { value: "30%", label: "Cost Reduction" },
    ],
    impact: "This solution has been designed for deployment in agricultural cooperatives and cement factory perimeters, providing enterprise-grade security at a fraction of traditional costs.",
  },
  "iot-energy": {
    icon: Zap,
    title: "IoT Energy Saver",
    tagline: "Intelligent energy monitoring for industrial efficiency",
    category: "IoT • Energy • Predictive Analytics",
    heroImage: iotEnergyImg,
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-emerald-400",
    description: "A comprehensive IoT solution designed to monitor, analyze, and optimize energy consumption in industrial settings. The system predicts electricity bills, identifies waste patterns, and automates energy-saving measures to achieve up to 30% reduction in energy costs.",
    problem: "Industrial facilities often waste significant energy due to inefficient equipment scheduling, peak hour usage, and lack of real-time consumption visibility. This leads to inflated electricity bills and increased carbon footprint.",
    solution: "Our IoT Energy Saver provides granular monitoring of every circuit, uses machine learning to predict consumption patterns, and automatically adjusts equipment operation to minimize costs while maintaining productivity.",
    techStack: [
      { name: "ESP32/Arduino", icon: Cpu },
      { name: "MQTT Protocol", icon: Wifi },
      { name: "Python ML", icon: Code },
      { name: "InfluxDB", icon: Database },
    ],
    features: [
      { title: "Real-time Monitoring", description: "Track energy consumption at the circuit level with second-by-second precision." },
      { title: "Bill Prediction", description: "AI-powered forecasting that predicts your electricity bill before month-end." },
      { title: "Auto Optimization", description: "Intelligent scheduling that shifts high-consumption tasks to off-peak hours." },
      { title: "Anomaly Detection", description: "Identify equipment malfunctions through unusual consumption patterns." },
      { title: "Carbon Tracking", description: "Monitor and report on carbon footprint for sustainability compliance." },
      { title: "Mobile Dashboard", description: "Access all metrics and controls from anywhere via mobile app." },
    ],
    stats: [
      { value: "30%", label: "Energy Savings" },
      { value: "±2%", label: "Bill Prediction Accuracy" },
      { value: "15min", label: "Setup Time" },
      { value: "ROI", label: "Within 6 Months" },
    ],
    impact: "Designed specifically for the Algerian industrial context, this solution helps factories comply with energy efficiency regulations while significantly reducing operational costs.",
  },
  "nawras": {
    icon: ShoppingCart,
    title: "Nawras Platform",
    tagline: "Digital transformation for local merchants",
    category: "E-commerce • SaaS • Digital Transformation",
    heroImage: nawrasImg,
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-400",
    description: "A comprehensive e-commerce platform designed to enable digital transformation for local Algerian merchants. Nawras simplifies the process of establishing an online presence with integrated payment processing, inventory management, and analytics.",
    problem: "Local merchants face significant barriers to digital adoption: complex technical requirements, expensive platforms, limited payment integration options, and lack of Arabic/French bilingual support. This keeps many businesses offline and limits their growth potential.",
    solution: "Nawras provides an all-in-one solution with a simple setup process, integrated local payment methods (CIB, EDAHABIA), multilingual support, and comprehensive training to ensure merchants can successfully transition to digital commerce.",
    techStack: [
      { name: "React/Next.js", icon: Code },
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "Stripe/CIB", icon: ShoppingCart },
    ],
    features: [
      { title: "Merchant Dashboard", description: "Intuitive control panel for managing products, orders, and customer relationships." },
      { title: "Payment Integration", description: "Support for local payment methods including CIB, EDAHABIA, and cash on delivery." },
      { title: "Inventory Management", description: "Real-time stock tracking with low-stock alerts and automatic reorder suggestions." },
      { title: "Analytics & Reports", description: "Comprehensive business intelligence with sales trends and customer insights." },
      { title: "Multi-language", description: "Full Arabic, French, and English support for broader market reach." },
      { title: "Mobile Commerce", description: "Responsive design and PWA support for seamless mobile shopping experience." },
    ],
    stats: [
      { value: "500+", label: "Merchants Onboarded" },
      { value: "50K+", label: "Products Listed" },
      { value: "98%", label: "Uptime" },
      { value: "3 min", label: "Store Setup" },
    ],
    impact: "Nawras is empowering local businesses across Algeria to compete in the digital economy, creating new revenue streams and connecting merchants with customers nationwide.",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/#projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container mx-auto px-6 pt-8 pb-16 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/#projects">
              <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <IconComponent className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">{project.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className={`text-xl ${project.accentColor} mb-6`}>
                {project.tagline}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} blur-3xl opacity-20 -z-10`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold ${project.accentColor}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold">The Problem</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold">The Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12"
          >
            Technology Stack
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {project.techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 px-6 py-4 glass-card hover:border-primary/30 transition-colors"
              >
                <tech.icon className={`w-5 h-5 ${project.accentColor}`} />
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Key Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          >
            Comprehensive capabilities designed for real-world industrial applications
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors`}>
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Real-World Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {project.impact}
            </p>
            <Link to="/#contact">
              <Button size="lg" className="btn-primary">
                Discuss This Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
