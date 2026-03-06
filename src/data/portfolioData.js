import gameLandingImg from "../assets/gameLanding.jpg";
import cocktailImg from "../assets/cocktail.jpg";
import movieExplorerImg from "../assets/movieExplorer.jpg";

export const portfolioData = {
  personal: {
    name: "AKASH A.D",
    title: "React Front-End Developer",
    tagline: "Building Intuitive, High-Performing User Interfaces",
    location: "Kerala, India",
    email: "akashad23072002@gmail.com",
    phone: "+91 9072339553",
    github: "https://github.com/akashad123",
    linkedin: "https://www.linkedin.com/in/akash-ad-1734a527a/",
    resume: "/resume.pdf",
  },

  about: {
    description: `I'm a passionate React Front-End Developer with one year of professional experience at Stratagile Pvt Ltd, currently pursuing my MCA at Lead College, Palakad. My journey in web development began with a Bachelor's in Computer Science from University of Calicut, and has evolved into a specialization in creating dynamic, user-centric applications using modern technologies.`,
    experience: `At Stratagile, I honed my skills in React development, working on high-performing web applications and collaborating with cross-functional teams to deliver quality solutions. I'm particularly passionate about building intuitive user interfaces that enhance user experience and am committed to continuous learning in modern web technologies.`,
    philosophy: `I believe in writing clean, maintainable code and am always eager to contribute to impactful, scalable solutions that make a difference.`,
  },

  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Redux", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "Css", level: 95 },
      { name: "Sass", level: 95 },
      { name: "Bootstrap", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "EJS", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "Strapi", level: 80 },
    ],
    databases: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
    // programming: [
    //   { name: "Python", level: "basics" },
    //   { name: "Java", level: "basics" },
    // ],
    tools: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
    ],
  },

  experience: [
    {
      company: "Stratagile Pvt Ltd",
      position: "Front-End Developer",
      period: "Mar 2024 - Mar 2025",
      achievements: [
        "Designed and implemented dynamic user interfaces with React for high-performing web applications",
        "Created server-rendered views using EJS and contributed to backend functionalities",
        "Led development of a comprehensive event website featuring team standings, events gallery, and complete backend integration with SQL alongside React-based front-end",
        "Developed and maintained APIs using Strapi to support Flutter-based front-end application",
        "Collaborated effectively with cross-functional teams ensuring timely and quality project delivery",
      ],
    },
  ],

  projects: [
    {
      title: "Game Landing Page",
      image: gameLandingImg,
      description:
        "Modern animated landing page built to explore advanced frontend animations and interactive UI design using GSAP.",
      technologies: ["React", "GSAP", "Tailwind CSS", "clsx", "react-use"],
      liveDemo: "https://game-landing-page-nu.vercel.app/",
      github: "https://github.com/akashad123/game_landing_page",
      features: [
        "Smooth scroll-based animations",
        "Interactive UI components",
        "Responsive modern design",
        "Clean and modular component structure",
        "Performance-focused animations with GSAP",
      ],
      role: "Frontend development focusing on UI interactions, animation implementation, and responsive layout",
    },
    {
      title: "Cocktail Animated Website",
      image: cocktailImg,
      description:
        "Premium animated cocktail website focused on immersive motion design, smooth transitions, and a modern frontend experience.",
      technologies: ["React", "GSAP", "Tailwind CSS"],
      liveDemo: "https://gsap-cocktails-lovat-iota.vercel.app/",
      github: "https://github.com/akashad123/gsap_cocktails",
      features: [
        "Smooth scroll animations",
        "Immersive transitions",
        "Modern UI design",
        "Interactive motion effects",
        "Fully responsive layout",
      ],
      role: "Frontend animation and UI development using GSAP for motion-driven interface design",
    },
    {
      title: "Movie Explorer Web Application",
      image: movieExplorerImg,
      description:
        "Interactive movie browsing web application powered by the TMDB API that allows users to discover popular movies, search in real time, and manage favorite movies.",
      technologies: ["React", "JavaScript", "TMDB API", "CSS"],
      liveDemo: "https://movie-search-app-dun-five.vercel.app/",
      github: "https://github.com/akashad123/MovieSearchApp",
      features: [
        "Browse trending and popular movies",
        "Real-time movie search",
        "Add movies to favorites list",
        "External API integration",
        "Responsive user interface",
      ],
      role: "Frontend development including API integration, state management, and UI implementation",
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications - MCA",
      institution: "University of Calicut",
      college: "Lead College Palakad",
      period: "- 2025",
      status: "Pursuing",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Calicut",
      college: "Nirmala College of Arts & Science, Thrissur",
      period: "2020 - 2023",
      status: "Completed",
    },
  ],

  certifications: [
    {
      name: "MERN Stack Web Development",
      issuer: "Luminar Technolab, Kakkanad",
      year: "2023",
    },
    {
      name: "IOT Application Development",
      issuer: "ICT Academy of Kerala",
      year: "2022",
    },
    {
      name: "Cyber Security",
      issuer: "ICT Academy",
      year: "2022",
    },
  ],

  learning: {
    current: [
      "Python (Basics)",
      "Java (Fundamentals)",
      "Advanced React Patterns",
    ],
    goals: [
      "Deep dive into Python for backend development",
      "Java Spring Boot framework",
    ],
    philosophy:
      "Committed to expanding my technical toolkit and embracing new programming paradigms",
  },

  strengths: [
    "Communication",
    "Leadership",
    "Meticulous attention to detail",
    "Optimistic attitude",
    "Diligent work ethic",
    "Ambitious goal-setting",
  ],

  languages: [
    { language: "English", proficiency: "Professional" },
    { language: "Malayalam", proficiency: "Native" },
  ],
};
