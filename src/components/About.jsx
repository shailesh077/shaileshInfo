import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Shailesh from "../assets/Shailesh.jpg";
import shaileshCV from "../../public/shailesh_cv.pdf";

function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-900 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent">
        {" "}
      </div>{" "}
      <div className="container mx-auto px-4 md:px-8">
        <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/3"
            >
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-blue-500 p-1">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center">
                    <img
                      src={Shailesh} // Replace with your actual image path
                      alt="Profile"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>{" "}
                </div>{" "}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl">
                  {" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full md:w-2/3"
            >
              <h2 className="text-3xl font-bold mb-2 inline-block">
                About <span className="text-blue-400"> Me </span>{" "}
                <div className="h-1 w-12 bg-blue-500 mt-1"> </div>{" "}
              </h2>{" "}
              <p className="text-lg text-gray-300 mt-6">
                I 'm a passionate{" "}
                <span className="text-blue-400 font-medium">
                  Frontend Developer{" "}
                </span>{" "}
                who loves building beautiful and responsive websites using
                ReactJS.{" "}
              </p>{" "}
              <p className="text-gray-400 mt-4">
                With a strong foundation in modern web technologies and a keen
                eye for design, I transform ideas into exceptional digital
                experiences that not only look great but also deliver results.{" "}
              </p>{" "}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">
                    {" "}
                    Name{" "}
                  </h3>{" "}
                  <p className="font-medium text-gray-200">
                    {" "}
                    Shailesh Vishwakarma{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">
                    {" "}
                    Email{" "}
                  </h3>{" "}
                  <p className="font-medium text-gray-200">
                    {" "}
                    shaileshvishwakarma2000 @gmail.com{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">
                    {" "}
                    Location{" "}
                  </h3>{" "}
                  <p className="font-medium text-gray-200">
                    {" "}
                    Ahmedabad, Gujarat, India{" "}
                  </p>{" "}
                </div>{" "}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-400">
                    {" "}
                    Degree{" "}
                  </h3>{" "}
                  <p className="font-medium text-gray-200">
                    {" "}
                    MCA Graduate{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
                whileTap={{ scale: 0.95 }}
                href={shaileshCV}
                download="Shailesh_CV.pdf"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20 transition duration-300"
              >
                Download CV{" "}
              </motion.a>{" "}
            </motion.div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}

export default About;
