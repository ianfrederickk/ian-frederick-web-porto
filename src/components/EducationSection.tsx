import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Brain } from 'lucide-react';

export default function EducationSection() {
  const courses = [
    'Machine Learning & Deep Learning',
    'Data Structures & Algorithms', 
    'Database Systems & SQL',
    'Natural Language Processing',
    'Computer Vision & Image Processing',
    'Statistical Analysis & Mathematics',
    'Software Engineering Principles',
    'Artificial Intelligence Fundamentals'
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space text-plasma mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-plasma-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl plasma-glow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-plasma-primary">
                <GraduationCap className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space text-foreground">
                  Bachelor of Science
                </h3>
                <p className="text-plasma-cyan font-semibold">Computer Science (AI Major)</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Brain className="h-4 w-4 text-plasma-purple" />
                <span>BINUS University</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4 text-plasma-pink" />
                <span>Class B27 - AI Specialization</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Focused curriculum in artificial intelligence, machine learning, and data science 
                with emphasis on practical applications and research methodologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-2xl"
          >
            <h4 className="text-xl font-bold font-space text-foreground mb-6">
              Relevant Coursework
            </h4>
            
            <div className="grid grid-cols-1 gap-3">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-plasma-purple/5 border border-plasma-purple/20 hover:border-plasma-cyan/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-plasma-primary"></div>
                  <span className="text-muted-foreground">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}