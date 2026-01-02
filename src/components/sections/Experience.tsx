import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Rocket, Briefcase, Award } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      icon: GraduationCap,
      year: "2018 - 2023",
      title: "Master in Electromechanics",
      organization: "University of Biskra",
      description:
        "Specialized in industrial systems, fluid mechanics, and turbomachines. Developed strong foundation in thermodynamics and mechanical engineering.",
      type: "education",
    },
    {
      icon: Award,
      year: "2022",
      title: "Startup Label Certification",
      organization: "Algerian Ministry of Startups",
      description:
        "Awarded prestigious startup label for innovative projects combining AI with industrial applications. Recognition for entrepreneurial excellence.",
      type: "achievement",
    },
    {
      icon: Rocket,
      year: "2022 - 2024",
      title: "Founder & Lead Developer",
      organization: "Tech Startup Ventures",
      description:
        "Founded and developed three innovative projects: AI Surveillance System, IoT Energy Saver, and Nawras E-commerce Platform.",
      type: "startup",
    },
    {
      icon: Briefcase,
      year: "2024 - Present",
      title: "Electromechanical Engineer",
      organization: "Seeking Industrial Partnership",
      description:
        "Actively seeking opportunities to bring AI-powered innovation to mineral water and cement manufacturing facilities.",
      type: "current",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Professional <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From academic excellence to entrepreneurial achievements—a journey of continuous innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>

              {/* Content Card */}
              <div className="glass-card p-6 ml-4 hover:border-primary/30 transition-colors">
                {/* Year Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {item.year}
                </span>

                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{item.organization}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
