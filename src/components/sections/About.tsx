import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Cog, Zap, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Implementing machine learning solutions in industrial contexts",
    },
    {
      icon: Cog,
      title: "Industrial Systems",
      description: "Deep expertise in fluid mechanics, turbomachines & automation",
    },
    {
      icon: Zap,
      title: "IoT Solutions",
      description: "Building smart connected devices for energy optimization",
    },
    {
      icon: Award,
      title: "Startup Label",
      description: "Awarded startup label holder with 3 innovative projects",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              The <span className="gradient-text">Hybrid</span> Engineer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I don't just maintain machines; <span className="text-foreground font-medium">I make them smart.</span> Holding a <span className="text-foreground font-medium">Master's Degree in Electromechanics from the University of Biskra</span>—a major Algerian industrial hub—I combine local industrial expertise with a Startup Label certification to bridge the gap between heavy industry and cutting-edge AI solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My unique approach combines deep industrial knowledge—electrical power systems, PLC/SCADA automation, fluid mechanics—with modern software development skills including Python, C++, and computer vision, enabling me to deliver innovative solutions that optimize efficiency and reduce production downtime.
            </p>

            {/* Education Highlight */}
            <div className="glass-card p-6 inline-block border-2 border-primary/30 bg-primary/5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-electric-glow flex items-center justify-center shadow-lg shadow-primary/30">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-1">
                    Higher Education
                  </span>
                  <p className="font-bold text-foreground text-lg">Master's Degree in Electromechanics</p>
                  <p className="text-sm text-primary font-medium">University of Biskra — Industrial Hub of Algeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
