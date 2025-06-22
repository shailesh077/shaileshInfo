import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Shailesh<span className="text-blue-400">Dev</span></h3>
            <p className="text-gray-400 mt-1">Creating exceptional digital experiences</p>
          </div>
          
          <div className="flex space-x-4">
            {[
              { icon: "fab fa-github", link: "https://github.com/shailesh077" },
              { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/shailesh9265/" },
              { icon: "fab fa-instagram", link: "https://www.instagram.com/accounts/onetap/?next=%2F" }
            ].map((social, index) => (
              <motion.a 
                key={index} 
                whileHover={{ y: -5, color: '#60a5fa' }}
                href={social.link} 
                className="hover:text-blue-400 transition-colors"
                aria-label={`Social media link ${index + 1}`}
              >
                <i className={`${social.icon} text-xl`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center"
        >
          <p>© {new Date().getFullYear()} Shailesh Vishwakarma. All rights reserved.</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;