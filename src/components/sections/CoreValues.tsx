import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Activity, Cable, Plug } from "lucide-react";

const CoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: ShieldCheck,
      title: "Industrial Reliability (Fiabilité)",
      description:
        "Engineering robust systems built to operate continuously in demanding production environments—minimizing failures and ensuring product consistency on every cable line.",
    },
    {
      icon: Activity,
      title: "Predictive Maintenance Strategies",
      description:
        "Leveraging IoT sensors, data analytics and AI to anticipate equipment failures before they happen—reducing unplanned downtime and protecting production output.",
    },
    {
      icon: Cable,
      title: "Power Distribution Expertise",
      description:
        "Deep knowledge of low and medium voltage networks, switchgear and cable systems—aligned with the core of the cable manufacturing industry.",
    },
    {
      icon: Plug,
      title: "Connectivity & Smart Industry",
      description:
        "Connecting machines, sensors and supervision systems (PLC/SCADA) to deliver real-time visibility and control over the entire production line.",
    },
  ];

  return (
    <section id="core-values" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Engineering for <span className="gradient-text">Zero Downtime</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Principles that drive every solution I deliver to the cable manufacturing and heavy industry sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
