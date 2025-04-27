import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: 'HTML5', level: 90, icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'JavaScript', level: 88, icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'React', level: 92, icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Tailwind', level: 85, icon: 'fab fa-css3', color: '#06b6d4' },
    { name: 'Git', level: 80, icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'Node.js', level: 75, icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python', level: 70, icon: 'fab fa-python', color: '#3776ab' }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-wider font-medium">What I know</span>
          <h2 className="text-4xl font-bold mt-2">My Skills</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 opacity-5 text-6xl transform translate-x-1/4 translate-y-1/4 group-hover:opacity-10 transition-opacity duration-300">
                <i className={skill.icon}></i>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900 flex items-center justify-center mr-4">
                  <i className={`${skill.icon} text-2xl`} style={{ color: skill.color }}></i>
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-medium text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full" 
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;