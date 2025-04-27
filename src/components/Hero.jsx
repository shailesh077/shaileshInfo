import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black relative px-4 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-float-delay"></div>
        </div>
      </div>
      
      {/* Particle effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              repeatType: "mirror" 
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative inline-block"
        >
          <div className="relative z-10">
            <span className="text-sm uppercase tracking-wider bg-blue-500 text-white py-1 px-3 rounded-md">
              Welcome to my portfolio
            </span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Shailesh <span className="text-blue-400">Vishwakarma</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="h-px w-12 bg-blue-500"></div>
          <motion.p 
            className="mx-4 text-xl text-gray-300 font-light"
            animate={{ 
              color: ["#d1d5db", "#60a5fa", "#d1d5db"],
              transition: { duration: 3, repeat: Infinity }
            }}
          >
            Software Developer
          </motion.p>
          <div className="h-px w-12 bg-blue-500"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-xl mx-auto text-lg text-gray-400 mb-8"
        >
          Specializing in creating beautiful, responsive frontend experiences with a focus on modern React applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20 transition duration-300"
          >
            Explore My Work
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 64, 175, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-medium hover:text-white transition duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <motion.a 
          href="#about"
          className="text-blue-400"
          aria-label="Scroll down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;