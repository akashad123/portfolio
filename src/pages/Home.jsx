import { portfolioData } from "../data/portfolioData";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "../components/Footer";
import MagneticButton from "../components/MagneticButton";
import img1 from "../assets/home.png";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const { personal } = portfolioData;
  const containerRef = useRef(null);
  const homeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  return (
    <div ref={containerRef} className="relative bg-[#f4f4f4]">
      <Navbar />

      <motion.section
        ref={homeRef}
        id="home"
        style={{ opacity }}
        className="
          fixed top-0 left-0 w-full
          min-h-screen
          bg-[#f4f4f4]
          flex items-center
          px-6 sm:px-10 md:px-16 lg:px-24
          pt-15 lg:pt-0
          overflow-hidden
          z-10
        "
      >
        {/* Grid Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000014_1px,transparent_1px),linear-gradient(to_bottom,#00000014_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
        <div className="grid lg:grid-cols-2 items-center w-full gap-5 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div style={{ y: textY }} className="space-y-6">
            <p className="text-gray-500 tracking-[4px] uppercase text-xs sm:text-sm">
              {personal.location}
            </p>

            <h1
              className="
  text-3xl
  sm:text-5xl
  md:text-4xl
  lg:text-4xl
  font-extrabold
  leading-tight
"
            >
              Frontend Developer
              <br />
              <span className="text-gray-500">
                <TypeAnimation
                  sequence={[
                    "Specialized in React",
                    2000,
                    "Building Scalable UI",
                    2000,
                    "Crafting Clean Architecture",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Hi, I'm {personal.name}
            </h2>

            <p className="text-gray-600 max-w-lg text-base sm:text-lg leading-relaxed">
              Passionate about building scalable, high-performance web
              applications with clean UI architecture and exceptional user
              experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 md:mb-5">
              <MagneticButton>
                <a
                  href={personal.resume}
                  className="px-6 py-3 rounded-xl bg-white shadow-lg hover:scale-105 transition text-sm sm:text-base"
                >
                  Download CV
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${personal.email}`}
                  className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition shadow-xl text-sm sm:text-base"
                >
                  Contact Me
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ y: imageY }}
            className="flex justify-center lg:mt-0"
          >
            <img
              src={img1}
              alt="profile"
              className="
                w-full
                sm:w-[320px]
                md:w-[600px]
                lg:w-[520px]
                md:h-[600px]
                lg:h-full
                grayscale
                rounded-3xl
                shadow-2xl
                object-cover
              "
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Spacer for fixed hero */}
      <div className="h-[120vh] lg:h-screen" />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
