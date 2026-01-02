import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Camera, Zap, ShoppingCart, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Camera,
      title: "AI Surveillance Cam",
      slug: "ai-surveillance",
      category: "Computer Vision • Agriculture • Security",
      description:
        "Smart security solution for agriculture & industry using behavioral recognition algorithms. Detects anomalies, tracks movement patterns, and sends real-time alerts.",
      features: ["Behavioral Recognition", "Real-time Alerts", "Edge Computing"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Zap,
      title: "IoT Energy Saver",
      slug: "iot-energy",
      category: "IoT • Energy • Predictive Analytics",
      description:
        "A smart device to monitor consumption and predict electricity bills for industrial efficiency. Reduces energy waste by up to 30% through intelligent automation.",
      features: ["Consumption Monitoring", "Bill Prediction", "Auto Optimization"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: ShoppingCart,
      title: "Nawras Platform",
      slug: "nawras",
      category: "E-commerce • SaaS • Digital Transformation",
      description:
        "A comprehensive E-commerce solution enabling digital transformation for local merchants. Simplifies online presence with integrated payment and inventory management.",
      features: ["Merchant Dashboard", "Payment Integration", "Inventory Management"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-5" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Startup Label Awarded</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Innovation <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three award-winning projects that demonstrate the power of combining industrial expertise with modern technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-card h-full p-8 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Category */}
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/project/${project.slug}`}>
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
