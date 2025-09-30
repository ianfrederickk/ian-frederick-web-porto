import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, FileText, Video, ExternalLink } from 'lucide-react';

export default function FeaturedSection() {
  const featuredItems = [
    {
      title: "GitHub Repository",
      description: "Explore my complete collection of AI, ML, and computer science projects with detailed documentation and code examples.",
      icon: <Github className="h-8 w-8" />,
      link: "https://github.com",
      buttonText: "Visit GitHub",
      gradient: "from-plasma-blue to-plasma-cyan"
    },
    {
      title: "Resume PDF",
      description: "Download my comprehensive resume with detailed experience, education, projects, and technical skills in AI and data science.",
      icon: <FileText className="h-8 w-8" />,
      link: "#",
      buttonText: "Download Resume",
      gradient: "from-plasma-purple to-plasma-violet"
    },
    {
      title: "Project Demos",
      description: "Watch interactive demonstrations of my key projects including traffic optimization and emotion classification systems.",
      icon: <Video className="h-8 w-8" />,
      link: "#",
      buttonText: "View Demos",
      gradient: "from-plasma-pink to-plasma-rose"
    }
  ];

  return (
    <section id="featured" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space text-plasma mb-4">
            Featured Links
          </h2>
          <div className="w-20 h-1 bg-gradient-plasma-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to my work, resume, and project demonstrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl plasma-glow group hover:shadow-plasma-lg transition-all duration-500"
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-background`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold font-space text-foreground group-hover:text-plasma-cyan transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <Button
                  className="btn-plasma w-full group/btn"
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <span className="mr-2">{item.buttonText}</span>
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold font-space text-foreground mb-4">
            Ready to Collaborate?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm actively seeking data science internship opportunities where I can 
            contribute my AI and ML skills to meaningful projects.
          </p>
          <Button size="lg" className="btn-plasma px-8 py-6">
            Let's Connect
          </Button>
        </motion.div>
      </div>
    </section>
  );
}