import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Code, Database, Cpu } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Cog,
      title: "Industrial Engineering",
      description: "Core expertise in heavy industry systems",
      skills: [
        { name: "Fluid Mechanics", level: 95 },
        { name: "Turbomachines", level: 90 },
        { name: "Thermodynamics", level: 92 },
        { name: "Pneumatics & Hydraulics", level: 88 },
        { name: "Industrial Automation", level: 85 },
      ],
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Modern tech stack for building solutions",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript/React", level: 88 },
        { name: "Web Development", level: 85 },
        { name: "Embedded Systems", level: 80 },
      ],
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent solutions for industry",
      skills: [
        { name: "Computer Vision", level: 88 },
        { name: "TensorFlow/PyTorch", level: 85 },
        { name: "Edge AI", level: 82 },
        { name: "Data Analytics", level: 86 },
        { name: "Predictive Models", level: 84 },
      ],
    },
    {
      icon: Database,
      title: "IoT & Systems",
      description: "Connected intelligent devices",
      skills: [
        { name: "IoT Architecture", level: 90 },
        { name: "Sensor Integration", level: 88 },
        { name: "SCADA Systems", level: 85 },
        { name: "Cloud Platforms", level: 82 },
        { name: "Protocol Design", level: 80 },
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
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="glass-card p-8"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
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
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
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
