import {
  backend,
  mobile,
  web,
  css,
  mysql,
  express,
  mui,
  gsap,
  framer,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  proj1,
  proj2,
  ts,
  sequelize,
  socket,
  sass,
  lottie,
  postgres,
  proj3,
  adminPanel,
  adminPanelWhite,
  CRMW,
  CRMD,
  proj6,
  proj7,
  proj8,
  flowerShop,
  vapeShop,
  hdoors,
} from "../assets";
import ant from "../assets/tech/ant.svg";
import Cyberswave from "../assets/company/cyberswave_logo.jpeg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    title: "CV",
    url: "/Khachik_Mesrobyan_CV.pdf",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer (React.js)",
    icon: mobile,
  },
  {
    title: "Backend Developer (Node.js)",
    icon: backend,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: ts },

  { name: "Tailwind CSS", icon: tailwind },
  { name: "Sass / SCSS", icon: sass },
  { name: "Material UI", icon: mui },
  { name: "Ant Design", icon: ant },

  { name: "GSAP", icon: gsap },
  { name: "Framer Motion", icon: framer },
  { name: "LottieFiles", icon: lottie },

  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Git", icon: git },

  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "Sequelize", icon: sequelize },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "PostgresSQL", icon: postgres },
  { name: "Socket.io", icon: socket },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "V Telecom",
    icon: web,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Implemented UI updates and migrated components from Material UI to Ant Design.",
      "Resolved bugs and complex application issues while improving responsive behavior and performance.",
      "Developed scalable, maintainable production features and participated in code reviews.",
      "Used AI-assisted development workflows to improve delivery speed and code quality.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Cyberswave",
    icon: Cyberswave,
    iconBg: "#383E56",
    date: "January 2025 – Present",
    points: [
      "Developed responsive interfaces with React and TypeScript, including animated UI with Framer Motion and Lottie.",
      "Built drag-and-drop workflows with DnD Kit and Atlaskit Pragmatic Drag and Drop.",
      "Managed application state with Redux Toolkit and built validated forms with Formik and Yup.",
      "Integrated REST APIs with Axios and real-time messaging with WebSockets.",
      "Delivered responsive, accessible interfaces with Tailwind CSS and Material UI.",
    ],
  },
];

const education = [
  {
    school: "Armenian State Pedagogical University after K. Abovyan",
    program: "Faculty of Mathematics, Physics & Informatics",
    date: "2024 – Present",
  },
  {
    school: "SmartCode Academy",
    program: "Web Frontend & Node.js Course",
    date: "6 Months",
  },
  {
    school: "Yerevan State College of Light Industry",
    program: "Software for Computing Equipment & Automated Systems",
    date: "2018 – 2022",
  },
];

const languages = [
  { name: "Armenian", level: "Native" },
  { name: "Russian", level: "Advanced" },
  { name: "English", level: "Intermediate" },
];

const projects = [
  {
    name: "Aurelia Flower Shop",
    description:
      "A responsive Armenian flower-shop experience with product discovery, category navigation, search, account and cart flows, and rich seasonal merchandising.",
    tags: [
      { name: "e-commerce", color: "pink-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "armenian", color: "blue-text-gradient" },
    ],
    image: flowerShop,
    live: "https://aurelia-612.pages.dev/hy",
  },
  {
    name: "Vape Hub",
    description:
      "A multilingual 18+ storefront for vape devices, liquids, and accessories, with product discovery, search, accounts, cart flows, themes, and localized content.",
    tags: [
      { name: "next.js", color: "white-text-gradient" },
      { name: "e-commerce", color: "pink-text-gradient" },
      { name: "i18n", color: "green-text-gradient" },
    ],
    image: vapeShop,
    live: "https://vape-shop-mesrobyan.vercel.app/",
  },
  {
    name: "HDoors",
    description:
      "A polished Armenian door catalog and shopping experience with product search, wish list, cart, user account, currency and language controls, and responsive navigation.",
    tags: [
      { name: "e-commerce", color: "pink-text-gradient" },
      { name: "responsive", color: "green-text-gradient" },
      { name: "ui-ux", color: "blue-text-gradient" },
    ],
    image: hdoors,
    live: "https://hdoors.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "WeatherWise is a modern web application that provides real-time weather updates, forecasts, and location-based data with a clean and responsive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "white-text-gradient",
      },
    ],
    image: proj2,
    source_code_link: "https://github.com/Mesrobyan77/weather",
    live: "https://acu-weather.netlify.app/",
  },
  {
    name: "Online Shop",
    description:
      "Tekisky Mart is an online clothing store where users can effortlessly browse, search, and shop for a wide range of apparel from various brands, offering a stylish and seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: proj1,
    source_code_link: "https://github.com/Mesrobyan77/Online_Shop_Front",
  },
  {
    name: "English-Armenian Translation Quiz",
    description:
      "A responsive React app for learning English and Armenian vocabulary through interactive quizzes with speech synthesis, animations, confetti, and sound effects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: proj3,
    source_code_link: "https://github.com/Mesrobyan77/english-quiz-app",
    live: "https://learn-new-words-en.netlify.app/",
  },
  {
    name: "MixWallet Admin Panel",
    description:
      "A wallet admin panel with dark and light themes, real-time messaging, user management, exchange rates, and request workflows (cash in/out, transfers, swaps). Responsive layout with chat threads, presence status, and conversation controls.",
    themes: ["dark", "light"],
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    imagesByTheme: { dark: adminPanel, light: adminPanelWhite },
  },
  {
    name: "CRM Dashboard App",
    description:
      "A full-stack CRM application built with React, TypeScript, Node.js, and MySQL. Features include client management, sales tracking, real-time notifications, analytics charts, Google OAuth integration, and secure authentication with JWT. The app leverages MUI for UI components, Redux Toolkit for state management, Formik + Yup for forms, and real-time updates via Socket.io.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "mui",
        color: "cyan-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
    ],
    imagesByTheme: { dark: CRMW, light: CRMD },
    themes: ["dark", "light"],
    source_code_link: "https://github.com/Mesrobyan77/CRM_front",
  },
  {
    name: "Serm LLC Website",
    description:
      " A modern and professional website for Serm LLC, showcasing their services and projects with a clean design and responsive layout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "white-text-gradient",
      },
    ],
    image: proj6,
    live: "https://sermllc.com/",
  },
  {
    name: "Efes Dashboard App",
    description:
      "Efes is a modular dashboard and management platform built with React 19, TypeScript, Vite, and MUI. It includes dynamic drag-and-drop components (via DnD Kit and Atlaskit), modern analytics with Recharts, secure JWT-based authentication, Google OAuth integration, and responsive UI powered by Tailwind CSS and Framer Motion. State management is handled by Redux Toolkit, with validation via Formik and Yup. Designed for scalability, performance, and real-time interaction.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "purple-text-gradient",
      },
      {
        name: "mui",
        color: "cyan-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "formik",
        color: "yellow-text-gradient",
      },
      {
        name: "yup",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "violet-text-gradient",
      },
    ],
    image: proj7,
  },

  {
    name: "Movies App",
    description:
      "Movies App is a modern movie browsing and discovery platform built with React 19, TypeScript, and Material UI. It provides a responsive interface for exploring trending, popular, and upcoming movies, featuring detailed movie pages and dynamic carousels powered by Swiper and Splide. The app uses Redux Toolkit for state management, Axios for API integration, and Formik + Yup for form handling and validation, ensuring a smooth and intuitive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "cyan-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "red-text-gradient",
      },
      {
        name: "formik",
        color: "yellow-text-gradient",
      },
      {
        name: "yup",
        color: "orange-text-gradient",
      },
      {
        name: "swiper",
        color: "violet-text-gradient",
      },
      {
        name: "splide",
        color: "purple-text-gradient",
      },
    ],
    image: proj8,
  },
];

export { services, technologies, experiences, education, languages, projects };
