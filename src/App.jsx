import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  // Preloader effect
  useEffect(() => {
    // Create a preloader
    const preloader = document.createElement('div');
    preloader.className = 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000';
    
    const logoContainer = document.createElement('div');
    logoContainer.innerHTML = `
      <div class="relative mb-8">
        <div class="text-5xl font-bold text-white">
          Shailesh<span class="text-blue-400">Dev</span>
        </div>
        <div class="h-1 w-24 bg-blue-500 mt-2 relative overflow-hidden">
          <div class="absolute inset-0 bg-white w-full animate-shimmer"></div>
        </div>
      </div>
      <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    `;
    preloader.appendChild(logoContainer);
    
    document.body.appendChild(preloader);
    document.body.style.overflow = 'hidden';
    
    // Hide preloader after a delay
    setTimeout(() => {
      preloader.style.opacity = '0';
      document.body.style.overflow = '';
      setTimeout(() => {
        document.body.removeChild(preloader);
      }, 1000);
    }, 2000);
    
    // Add particles
    const particles = [];
    const colors = ['#38bdf8', '#0ea5e9', '#0284c7', '#075985'];
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      
      const size = Math.random() * 5 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.position = 'fixed';
      particle.style.borderRadius = '50%';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = color;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.zIndex = '-1';
      particle.style.opacity = '0.3';
      particle.style.filter = 'blur(1px)';
      
      document.body.appendChild(particle);
      particles.push(particle);
      
      // Animate particles
      const duration = Math.random() * 60 + 30;
      const direction = Math.random() > 0.5 ? 1 : -1;
      
      let posX = parseFloat(particle.style.left);
      let posY = parseFloat(particle.style.top);
      let speedX = (Math.random() * 0.2 + 0.1) * direction;
      let speedY = (Math.random() * 0.2 + 0.1) * direction;
      
      const animateParticle = () => {
        posX += speedX;
        posY += speedY;
        
        if (posX < 0 || posX > window.innerWidth) speedX *= -1;
        if (posY < 0 || posY > window.innerHeight) speedY *= -1;
        
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        
        requestAnimationFrame(animateParticle);
      };
      
      animateParticle();
    }
    
    return () => {
      particles.forEach(particle => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Cursor />
      <ScrollProgress />
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;