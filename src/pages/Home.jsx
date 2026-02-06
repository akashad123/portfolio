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

const Home = () => {
  const { personal } = portfolioData;

  const { scrollY } = useScroll();
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const textY = useTransform(scrollY, [0, 500], [0, 120]);
  const imageY = useTransform(scrollY, [0, 500], [0, -120]);

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="min-h-screen bg-[#f4f4f4] flex items-center px-10 md:px-24 overflow-hidden relative z-10"
      >
        <div className="grid lg:grid-cols-2 items-center w-full gap-16">
          <motion.div
            style={{ y: textY }}
            className="space-y-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              className="text-gray-500 tracking-[4px] uppercase text-sm"
            >
              {personal.location}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="
      text-[110px] md:text-[160px]
      font-extrabold
      leading-none
      bg-gradient-to-r from-black via-gray-700 to-black
      bg-clip-text text-transparent
      select-none
    "
            >
              Hello
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="
      text-4xl md:text-5xl
      font-semibold
      relative inline-block
      after:absolute after:left-0 after:-bottom-2
      after:w-0 after:h-[3px] after:bg-black
      after:transition-all after:duration-500
      hover:after:w-full
    "
            >
              I'm {personal.name}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-600 font-medium tracking-wide"
            >
              {personal.title}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 max-w-md text-lg leading-relaxed"
            >
              {personal.tagline}
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-6 pt-6">
              <MagneticButton>
                <a
                  href={personal.resume}
                  className="
          px-8 py-3 rounded-xl
          backdrop-blur-md bg-white/40
          border border-white/50
          shadow-lg
          hover:scale-105
          transition
        "
                >
                  Download CV
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${personal.email}`}
                  className="
          px-8 py-3 rounded-xl
          bg-black text-white
          hover:bg-gray-900
          transition
          shadow-xl
        "
                >
                  Contact Me
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: imageY }} className="flex justify-center">
            <img
              src={img1}
              alt="profile"
              className="w-[450px] md:w-[560px] grayscale rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />

      <Footer />
    </>
  );
};

export default Home;
