import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const headline1 = useTypewriter({ text: "Bridging ", speed: 80, delay: 500 });
  const headline2 = useTypewriter({ text: "Heavy Industry", speed: 80, delay: 1200 });
  const headline3 = useTypewriter({ text: " with ", speed: 80, delay: 2400 });
  const headline4 = useTypewriter({ text: "Artificial Intelligence", speed: 80, delay: 2900 });
  const subheadline = useTypewriter({ 
    text: "Electromechanical Engineer • IoT Specialist • Startup Founder", 
    speed: 40, 
    delay: 5000 
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Network Background */}
      <NetworkBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Main Headline with Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 min-h-[120px] md:min-h-[180px] lg:min-h-[200px]">
            <span className="text-foreground">{headline1.displayText}</span>
            <span className="gradient-text">{headline2.displayText}</span>
            {headline2.isComplete && <br />}
            <span className="text-foreground">{headline3.displayText}</span>
            <span className="gradient-text">{headline4.displayText}</span>
            {!headline4.isComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle"
              />
            )}
          </h1>

          {/* Sub-headline with Typewriter Effect */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 min-h-[28px]">
            {subheadline.displayText}
            {!subheadline.isComplete && headline4.isComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[2px] h-[0.9em] bg-primary ml-1 align-middle"
              />
            )}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 6.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#projects">
              <Button variant="hero" size="lg" className="group">
                <Briefcase className="w-5 h-5" />
                View Projects
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </a>
            <a href="/Islam_Saker_CV.pdf" download="Islam_Saker_CV.pdf">
              <Button variant="heroOutline" size="lg" className="group">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
