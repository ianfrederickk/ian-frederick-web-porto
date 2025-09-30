import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "student@binus.ac.id",
      link: "mailto:student@binus.ac.id",
      description: "Send me an email for internship opportunities"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com",
      description: "Let's connect and network professionally"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "View Projects",
      link: "https://github.com",
      description: "Explore my code and contributions"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Jakarta, Indonesia",
      link: "#",
      description: "Available for local and remote opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space text-plasma mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-plasma-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss AI, data science projects, and internship opportunities. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl text-center group hover:shadow-plasma-md transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-full bg-gradient-plasma-primary text-background mb-4 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              
              <h3 className="font-bold text-foreground mb-2">{method.label}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
              
              <Button
                variant="outline"
                size="sm"
                className="glass border-plasma-cyan/30 hover:bg-plasma-cyan/10 text-xs"
                onClick={() => method.link !== "#" && window.open(method.link, '_blank')}
              >
                {method.value}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold font-space text-foreground mb-4">
            Interested in My Work?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm currently seeking data science internship positions and would love to 
            discuss how my AI and machine learning skills can contribute to your team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-plasma px-8 group"
              onClick={() => window.open('mailto:student@binus.ac.id?subject=Data Science Internship Opportunity', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Send Email
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-plasma-purple/30 hover:bg-plasma-purple/10 px-8 group"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn Message
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              Available for internships starting January 2024 • Remote & On-site opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}