import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Code, Database, Cpu, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Cog,
      title: "Mécanique des Fluides & Thermodynamique",
      description: "Expertise fondamentale pour l'industrie lourde",
      badge: "Heavy Skills",
      skills: [
        { name: "Mécanique des Fluides", level: 95 },
        { name: "Thermodynamique", level: 92 },
        { name: "Turbomachines", level: 90 },
        { name: "Transfert Thermique", level: 88 },
      ],
    },
    {
      icon: Wrench,
      title: "Hydraulique & Pneumatique",
      description: "Systèmes de puissance fluidique industriels",
      badge: "Heavy Skills",
      skills: [
        { name: "Circuits Hydrauliques", level: 90 },
        { name: "Circuits Pneumatiques", level: 88 },
        { name: "Maintenance MBF", level: 85 },
        { name: "Instrumentation Industrielle", level: 87 },
      ],
    },
    {
      icon: Code,
      title: "Développement Logiciel",
      description: "Stack moderne pour solutions intelligentes",
      badge: "Smart Skills",
      skills: [
        { name: "Python Avancé", level: 92 },
        { name: "C++ / Embedded", level: 85 },
        { name: "JavaScript / React", level: 88 },
        { name: "Full-Stack Development", level: 85 },
      ],
    },
    {
      icon: Cpu,
      title: "IA & Vision par Ordinateur",
      description: "Intelligence artificielle pour l'industrie",
      badge: "Smart Skills",
      skills: [
        { name: "Computer Vision", level: 90 },
        { name: "Machine Learning", level: 88 },
        { name: "TensorFlow / PyTorch", level: 85 },
        { name: "Edge AI", level: 82 },
      ],
    },
    {
      icon: Database,
      title: "IoT & Systèmes SCADA",
      description: "Supervision et contrôle industriel",
      badge: "Smart Skills",
      skills: [
        { name: "Architecture IoT", level: 90 },
        { name: "Systèmes SCADA", level: 88 },
        { name: "Intégration Capteurs", level: 87 },
        { name: "Protocoles Industriels", level: 85 },
      ],
    },
    {
      icon: Zap,
      title: "Automatisation Industrielle",
      description: "Optimisation des processus de production",
      badge: "Heavy Skills",
      skills: [
        { name: "Automates Programmables (PLC)", level: 88 },
        { name: "Contrôle de Processus", level: 85 },
        { name: "Optimisation Énergétique", level: 90 },
        { name: "Industrie 4.0", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A unique blend of industrial engineering fundamentals and cutting-edge software development skills.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              <div className="mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  category.badge === "Heavy Skills" 
                    ? "bg-amber-500/10 text-amber-500" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {category.badge}
                </span>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-electric-glow rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
