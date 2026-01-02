import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Phone, Globe, Linkedin, Github, Calendar, Award, GraduationCap, Briefcase, Code, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const experiences = [
    {
      title: "Co-Founder",
      company: "Nawras Platform",
      period: "2026",
      location: "Algeria",
      description: "أحد المؤسسين لمنصة نورس المتخصصة في ربط المنصات الرقمية للتجار الرقميين وتوفير طرق إدارة ذكية لدعم التجارة الإلكترونية.",
      achievements: [
        "ربط المنصات الرقمية للتجار الرقميين",
        "توفير أدوات إدارة ذكية للتجارة الإلكترونية",
        "دعم التجار في تطوير أعمالهم الرقمية"
      ]
    },
    {
      title: "Startup Label (Second Label)",
      company: "Ministry of Economy, Knowledge & Startups",
      period: "2025",
      location: "Algeria",
      description: "حصل على شهادة لابل ثانية من وزارة الاقتصاد والمعرفة والمؤسسات الناشئة لتطوير مشروع مراقبة ذكي للطاقة الكهربائية.",
      achievements: [
        "نظام مراقبة ذكي مرتبط بالهواتف الذكية",
        "إدارة واقتصاد الطاقة الكهربائية",
        "معرفة سعر الفاتورة وكمية الاستهلاك قبل وصول الفاتورة"
      ]
    },
    {
      title: "Founder & CEO",
      company: "Startup Label",
      period: "2023",
      location: "Algeria",
      description: "تأسيس شركة ناشئة متخصصة في حلول إنترنت الأشياء والأنظمة الصناعية المدعومة بالذكاء الاصطناعي.",
      achievements: [
        "تطوير أنظمة مراقبة ذكية للمنشآت الصناعية",
        "إنشاء حلول مراقبة الطاقة بتقنية IoT",
        "قيادة فريق من المهندسين في مشاريع متعددة"
      ]
    }
  ];

  const education = [
    {
      degree: "Master's in Electromechanical Engineering",
      school: "University of Biskra",
      period: "2021 - 2023",
      description: "تخصص في الأتمتة وأنظمة التحكم"
    },
    {
      degree: "Bachelor's in Electromechanical Engineering",
      school: "University of Biskra",
      period: "2016 - 2021",
      description: "شهادة ليسانس (2016-2018) ثم عطلة أكاديمية لمدة سنتين قبل العودة وإكمال الشهادة سنة 2021"
    }
  ];

  const skills = {
    technical: [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "React & Node.js", level: 85 },
      { name: "IoT & Embedded Systems", level: 95 },
      { name: "Machine Learning", level: 80 },
      { name: "PLC Programming", level: 90 }
    ],
    soft: ["Leadership", "Problem Solving", "Communication", "Project Management", "Team Collaboration", "Innovation"]
  };

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2022" },
    { name: "Certified IoT Professional", issuer: "CertNexus", year: "2021" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative container mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-8 items-center lg:items-start"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary to-primary/50 p-1">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <span className="text-5xl font-bold gradient-text">IS</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                Islam <span className="gradient-text">Saker</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-muted-foreground mb-6"
              >
                Electromechanical Engineer • IoT Specialist • Startup Founder
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a href="mailto:contact@islamsaker.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@islamsaker.com</span>
                </a>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Algeria</span>
                </span>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Skills & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Technical Skills */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Technical Skills</h2>
              </div>
              <div className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Soft Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <h3 className="font-medium text-sm">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer} • {cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Experience */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Professional Experience</h2>
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.15 }}
                      />
                      
                      <div className="p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Education</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                    className="p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="container mx-auto px-6 py-12"
      >
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10 border border-border">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-6">Let's discuss how I can help bring your ideas to life.</p>
          <Link to="/#contact">
            <Button variant="hero" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
