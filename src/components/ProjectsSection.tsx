"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Zap, Heart, ChevronLeft, ChevronRight, FileText} from 'lucide-react';

function useResponsiveProjectsPerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1);   // mobile
      else if (window.innerWidth < 1024) setPerPage(2); // tablet
      else setPerPage(3); // desktop
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}


export default function ProjectsSection() {
  const projects = [
    {
      title: "Dynamic Traffic Light Control Research",
      description: "Intelligent traffic management system using fuzzy logic algorithms integrated with SUMO traffic simulation for optimized urban traffic flow.",
      image: "🚦",
      techStack: ["Python", "Fuzzy Logic", "SUMO", "OpenCV", "NumPy"],
      type: "Research",
      color: "hover:bg-blue-600",
      customButton: { 
        text: "View Report", 
        link: "#report",
        icon: "FileText",
      }
    },
    {
      title: "Cat & Dog Emotion Classification", 
      description: "Multi-modal emotion recognition system combining audio analysis and image processing to classify emotional states in cats and dogs.",
      image: "🐱🐶", 
      techStack: ["TensorFlow", "PyTorch", "OpenCV", "Librosa", "Pandas"],
      github: "#",
      demo: "#", 
      type: "Computer Vision",
      color: "hover:bg-emerald-500"
    },
    {
      title: "AiCNE Detector",
      description: "Developed a predictive model using time-series analysis to forecast stock prices, achieving high accuracy on historical data.",
      image: "💆‍♂️",
      techStack: ["Python", "Pandas", "Scikit-learn", "LSTM"],
      github: "https://github.com/ianganteng/ai-cne-detector",
      demo: "#", 
      type: "AI/ML",
      color: "hover:bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      title: "CateRingZ Web",
      description: "A high-performance object detection model using YOLOv5 for real-time video analysis and tracking on edge devices.",
      image: "👀",
      techStack: ["Python", "YOLOv5", "PyTorch", "OpenCV"],
      github: "#",
      demo: "#",
      type: "Computer Vision",
      color: "hover:bg-purple-600"
    },
    {
      title: "Natural Language Processing Engine",
      description: "A custom NLP engine for sentiment analysis and text summarization from social media data using Transformer models.",
      image: "🤖",
      techStack: ["Python", "Hugging Face", "spaCy", "Transformers", "Gensim"],
      github: "#",
      demo: "#",
      type: "AI/ML",
      color: "hover:bg-emerald-600"
    },
    {
      title: "Personalized Recommendation System",
      description: "A collaborative filtering and content-based recommendation system for e-commerce platforms, increasing user engagement by 20%.",
      image: "🛍️",
      techStack: ["Python", "Pandas", "Scikit-learn", "Flask"],
      github: "#",
      demo: "#",
      type: "Data Science",
      color: "hover:bg-orange-600"
    }
  ];
  
  const projectsPerPage = useResponsiveProjectsPerPage();
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1 ) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

    const renderActionButton = (project) => {
    
    // Prioritas 1: Gunakan Custom Button (jika ada, hanya render satu tombol)
    if (project.customButton) {
        const buttonData = project.customButton;
        const IconComponent = buttonData.icon;
        
        return (
          <Button 
            size="sm" 
            className="rounded-none bg-blue-500 hover:bg-blue-600 text-xs text-white w-full" 
            onClick={(e) => {
              e.stopPropagation();
              window.open(buttonData.link, '_blank');
            }}
          >
            {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
            {buttonData.text}
          </Button>
        );
    } 
    
    // Prioritas 2: Render DUA tombol default (Code dan Demo)
    return (
        <>
            <Button 
                size="sm" 
                className="rounded-none bg-blue-500 hover:bg-blue-600 text-xs text-white flex-1"
                onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                }}
            >
                <Github className="mr-2 h-4 w-4" />
                Code
            </Button>
            <Button 
                variant="outline" 
                size="sm" 
                className="rounded-none bg-transparent border-none hover:bg-neutral-700 text-xs text-neutral-900 group-hover:text-white flex-1"
                onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.demo, '_blank');
                }}
            >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
            </Button>
        </>
    );
  };



  return (
    <section id="projects" className="py-20 px-6 bg-white text-neutral-100 scroll-mt-20">
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans leading-tight mb-8 text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Featured Projects.
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-xl font-sans mb-12">
            Showcasing AI and machine learning projects that demonstrate practical 
            applications of computer science concepts.
          </p>
        </motion.div>

        {/* Tombol Panah kiri */}
        <button 
          onClick={handlePrev} 
          className="absolute bottom-4 -left-2 sm:-left-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-none bg-neutral-400 text-white hover:bg-neutral-700 transition-colors z-20"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Kontainer proyek */}
        <div className="relative overflow-hidden">
          <div 
            className="flex w-full transition-transform duration-1000 ease-in-out gap-0" 
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >

          
            {projects.map((project, index) => (
              <div key={index} className="relative flex-none w-full sm:w-1/2 lg:w-1/3 h-[500px] px-2"> 
              
                {/* Wrapper fix height */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0
                    px-8 pt-20 pb-8 group
                    cursor-pointer transition-all duration-700 ease-in-out transform-gpu
                    hover:-translate-y-0 hover:z-10 /* Menggeser ke atas saat hover */
                    ${project.color} hover:text-white
                    bg-neutral-100 text-neutral-900
                    min-h-[250px]
                  `}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{project.image}</div>
                      <div>
                        <h3 className="text-2xl font-sans leading-tight transition-colors group-hover:text-white text-neutral-900">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          {project.type === "AI/ML" ? (
                            <Zap className="h-4 w-4 transition-colors group-hover:text-white text-blue-400" />
                          ) : (
                            <Heart className="h-4 w-4 transition-colors group-hover:text-white text-rose-400" />
                          )}
                          <span className="text-sm font-semibold transition-colors group-hover:text-white text-purple-400">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hidden content */}
                  <div className="transition-all duration-700 ease-in-out overflow-hidden opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100rem]">
                    <p className="leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm font-medium rounded-none bg-neutral-300 text-neutral-800 group-hover:bg-white group-hover:text-neutral-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {renderActionButton(project)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Panah kanan */}
        <button 
          onClick={handleNext} 
          className="absolute bottom-4 -right-2 sm:-right-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-none bg-neutral-400 text-white hover:bg-neutral-700 transition-colors z-20"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6"/>
        </button>
      </div>
    </section>
  );
}
