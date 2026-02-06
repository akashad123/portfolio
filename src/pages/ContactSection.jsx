import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="bg-[#f5f5f5] py-8 md:py-10 px-10 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          max-w-5xl mx-auto
          text-center
          rounded-3xl
          bg-white
          shadow-xl
          py-20 px-10
        "
      >
      
        <h2 className="text-2xl font-bold mb-6">
          Got a Vision? Let’s Bring It to Life!
        </h2>

     
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          I'm always excited to collaborate on new and innovative projects.
          Whether you’re starting from scratch or refining an idea.
        </p>

      
        <a
          href={`mailto:${personal.email}`}
          className="
            inline-block
            px-4 py-2
            rounded-xl
            bg-black text-white
            hover:scale-105
            transition
            font-medium
          "
        >
          Book A Call ↗
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
