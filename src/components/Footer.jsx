import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="bg-black text-white py-5 px-10 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <h3 className="text-xl md:text-xl font-bold">{personal.email}</h3>

        <p className="text-center text-gray-500 text-xs ">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400 text-sm">
          <a href={personal.github} target="_blank">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
