import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (id) =>
    `cursor-pointer transition ${
      active === id ? "text-black font-semibold" : "text-gray-500"
    }`;

  const scrollTo = (id) =>
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-md">
      <div className="flex justify-center gap-10 py-4 text-sm">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={linkStyle(id)}
          >
            {id.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
