import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="bg-black text-white py-4 sm:py-5 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-10">
        <h3 className="text-sm sm:text-base md:text-xl font-bold order-2 md:order-none">{personal.email}</h3>

        <p className="text-center text-gray-500 text-[10px] sm:text-xs order-3 md:order-none">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm order-1 md:order-none">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;