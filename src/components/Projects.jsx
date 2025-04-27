import { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    { 
      id: 1,
      title: "Portfolio Website", 
      category: "Web Design",
      image: "/api/placeholder/600/400", 
      description: "Modern portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    { 
      id: 2,
      title: "E-commerce Platform", 
      category: "Full Stack",
      image: "/api/placeholder/600/400", 
      description: "A full-featured shopping application with payment integration.",
      technologies: ["MERN Stack", "Redux", "Stripe API"],
      link: "#"
    },
    { 
      id: 3,
      title: "Blog App", 
      category: "Web App",
      image: "/api/placeholder/600/400", 
      description: "Content management system with authentication and comment system.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    { 
      id: 4,
      title: "Weather Dashboard", 
      category: "API",
      image: "/api/placeholder/600/400", 
      description: "Real-time weather forecasting application with interactive maps.",
      technologies: ["JavaScript", "Weather API", "Chart.js"],
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-wider font-medium">My Work</span>
          <h2 className="text-4xl font-bold mt-2">Featured Projects</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group rounded-xl overflow-hidden bg-gray-800 shadow-xl"
              style={{ height: "400px" }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-blue-400 text-sm mb-2"
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                <div className="overflow-hidden">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl font-bold"
                  >
                    {project.title}
                  </motion.h3>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs bg-blue-900/50 text-blue-200 py-1 px-2 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-medium"
                  >
                    View Project
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View more projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
