import healthifyImg from "../assets/healthify.png";
import projectFairImg from "../assets/projectfair.png";
import movieImg from "../assets/aimovie.png";

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
      title: "Healthify - Hospital Management",
      image: healthifyImg,
      description:
        "Full-stack MERN application enabling patients to book appointments effortlessly with comprehensive admin dashboard for managing doctors, departments, patients, and appointment records",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
      liveDemo: "https://healthify-frontend-henna.vercel.app/",
      github: "https://github.com/akashad123/healthify",
      features: [
        "User authentication",
        "Appointment booking system",
        "Admin CRUD operations",
        "Responsive design",
      ],
      role: "Full-stack development including UI/UX design, API integration, and database management",
    },
    {
      title: "Project Fair - Management Platform",
      image: projectFairImg,
      description:
        "Collaborative platform allowing users to login, upload, and organize their projects efficiently",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      liveDemo: "https://projectfair-frontend-7wn3.vercel.app/",
      github: "https://github.com/akashad123/projectfair",
      features: [
        "User authentication",
        "Project upload functionality",
        "Organized project display",
        "Intuitive interface",
      ],
      role: "Frontend and backend development with focus on user experience",
    },
    {
      title: "AI Movie Recommendation System",
      image: movieImg,
      description:
        "Intelligent hybrid movie recommendation engine that combines content-based and collaborative filtering to suggest personalized movies",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "NumPy",
        "MovieLens Dataset",
      ],
      liveDemo: "https://akashad123.github.io/MovieRecommendation/",
      github: "https://github.com/akashad123/MovieRecommendation",
      features: [
        "Content-based filtering using movie genres",
        "Collaborative filtering based on user behavior",
        "Hybrid recommendation approach",
        "Interactive movie search and suggestions",
        "Real-time similarity calculations",
      ],
      role: "Full AI pipeline development - data preprocessing, algorithm implementation, and system integration",
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
