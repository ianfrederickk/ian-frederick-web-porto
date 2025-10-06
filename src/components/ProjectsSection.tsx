"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { Button } from '@/components/ui/button';
import ProjectsModal from './ProjectsModal';
import Stack from './Stack';
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
  const cursor = useCursorPosition();
  const ref = useRef(null);
  const [showBlur, setShowBlur] = useState(false);
  const [modalOpenIdx, setModalOpenIdx] = useState(null);
  // Scroll progress for background animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0.5 0.3"],
  });
  const projects = [
    {
      title: "Dynamic Traffic Light Control Research",
      description: "Intelligent traffic management system using fuzzy logic algorithms integrated with SUMO traffic simulation for optimized urban traffic flow.",
      image: "🚦",
      techStack: ["Python", "Fuzzy Logic", "SUMO", "OpenCV", "NumPy"],
      type: "Research",
      color: "hover:bg-blue-600",
      modalBg: "bg-blue-600",
      customButton: { 
        text: "View Report", 
        link: "#report",
        icon: "FileText",
      }
    },
    {
      title: "Dog Emotion Classification", 
      description: "A deep learning project that leverages a ResNet50 model and a custom CNN head to classify images of dogs into four emotional states: happy, angry, relaxed, and sad.",
      image: "🐶", 
      techStack: ["Python","TensorFlow / Keras", "Pandas", "Matplotlib", "Scikit-learn", "Numpy","Pillow"],
      github: "https://github.com/ianganteng/dog-emotion-classification/blob/main/README.md",
      demo: "#", 
      type: "Computer Vision",
      color: "hover:bg-emerald-500",
      modalBg: "bg-emerald-500"
    },
    {
      title: "AiCNE Detector",
      description: "My 3rd Semester AI project dedicated to automatic classification and early detection of acne severity from facial images.",
      image: "💆‍♂️",
      techStack: ["InceptionV3", "Tensorflow / Keras", "Python", "Gradio"],
      github: "https://github.com/ianganteng/ai-cne-detector",
      demo: "https://huggingface.co/spaces/ianhee/ai-cne-detector", 
      type: "AI/ML",
      color: "hover:bg-gradient-to-br from-orange-400 to-red-500",
      modalBg: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      title: "CateRingZ Web",
      description: "A Simple HTML, CSS, and JavaScript-based website for CateRingZ, my Human Computer Interaction project.",
      image: "🍔🌭🍕",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ianganteng/cateringz-web",
      demo: "#",
      type: "Web Development",
      color: "hover:bg-purple-600",
      modalBg: "bg-purple-600",
      imageGallery: {
        1: "src/assets/HomePage-Cateringz.png",
        2: "src/assets/Homepage2-Cateringz.png",
        3: "src/assets/Screenshot 2025-10-03 at 22.11.59.png",
        4: "src/assets/Screenshot 2025-10-03 at 22.13.41.png",
        5: "src/assets/Screenshot 2025-10-03 at 22.12.10.png",
        6: "src/assets/Screenshot 2025-10-03 at 22.08.22.png",
        7: "src/assets/Screenshot 2025-10-03 at 22.09.10.png",
      }
    },
    {
      title: "Natural Language Processing Engine",
      description: "A custom NLP engine for sentiment analysis and text summarization from social media data using Transformer models.",
      image: "🤖",
      techStack: ["Python", "Hugging Face", "spaCy", "Transformers", "Gensim"],
      github: "#",
      demo: "#",
      type: "AI/ML",
      color: "hover:bg-emerald-600",
      modalBg: "bg-emerald-600"
    },
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

  const renderActionButton = (project, idx) => {
    
    if (project.customButton) {
        const buttonData = project.customButton;
        // IconComponent harus di-resolve dari string jika perlu, tapi kita asumsikan sudah berupa component
        const IconComponent = buttonData.icon === "FileText" ? FileText : null; 
        
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
    
    return (
      <>
        {project.github && (
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
        )}
        {project.imageGallery ? (
          <Button
            variant="outline"
            size="sm"
            className="rounded-none bg-transparent border-none hover:bg-neutral-700 text-xs text-neutral-900 group-hover:text-white flex-1"
            onClick={(e) => {
              e.stopPropagation();
              setModalOpenIdx(idx);
            }}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Gallery
          </Button>
        ) : project.demo && (
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
        )}
      </>
    );
  };



  return (
    <section
      ref={ref}
      id="projects"
      className="relative min-h-screen bg-white text-black py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center overflow-hidden scroll-mt-25"
      onMouseEnter={() => setShowBlur(true)}
      onMouseLeave={() => setShowBlur(false)}
    >
      <div className="w-[90%]">
        <div className="relative z-10 container mx-auto max-w-7xl">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col justify-start relative px-4 mb-2 -mt-10 md:-mt-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-thin leading-tight mt-10 mb-4 text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Featured Projects.
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-xl font-sans">
              Showcasing AI and machine learning projects that demonstrate practical
              applications of computer science concepts.
            </p>
          </motion.div>

          {/* Arrow Buttons */}
          <button
            onClick={handlePrev}
            className="absolute bottom-4 -left-2 sm:-left-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-none bg-neutral-400 text-white hover:bg-neutral-700 transition-colors z-20"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Project Container (carousel) */}
          <div className="relative overflow-hidden">
            <div
              className="flex w-full transition-transform duration-1000 ease-in-out gap-0"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="relative flex-none w-full sm:w-1/2 lg:w-1/3 h-[500px]">
                  {/* Project Card */}
                  <div
                    className={`
                      absolute bottom-0 left-0 right-0
                      px-8 pt-20 pb-8 group
                      cursor-pointer transition-all duration-700 ease-in-out transform-gpu
                      hover:-translate-y-0 hover:z-10
                      ${project.color} hover:text-white
                      bg-neutral-100 text-neutral-900
                      min-h-[250px]
                    `}
                  >
                    {/* Card Header */}
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

                    {/* Hidden Content */}
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
                        {renderActionButton(project, index)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Render all modals for all projects outside carousel mapping */}
          {projects.map((project, index) => (
            <ProjectsModal
              key={index}
              open={modalOpenIdx === index}
              onClose={() => setModalOpenIdx(null)}
              bgClass={project.modalBg + ' text-white'}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl mb-2 font-sans font-light opacity-90">{project.image}</span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-extralight leading-tight mb-1 opacity-90">Gallery of {project.title}</h3>
                {/* ...other modal content... */}
              </div>

            {project.imageGallery && (
              <Stack 
                cardsData={Object.entries(project.imageGallery).map(([id, img]) => ({ id: parseInt(id), img })).reverse()}
                cardDimensions={{ width: 700, height: 700 }}
                randomRotation={false}
                sendToBackOnClick={true}
              />
            )} 
            </ProjectsModal>
          ))}

          {/* Arrow Right Button */}
          <button
            onClick={handleNext}
            className="absolute bottom-4 -right-2 sm:-right-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-none bg-neutral-400 text-white hover:bg-neutral-700 transition-colors z-20"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}