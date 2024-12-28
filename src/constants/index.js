import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    bootstrap,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    aws,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    android,
    chatbot,
    fitzilla,
    wallify,
    campus,
    ai,
    school
  } from "../assets";


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Cloud Computing Enthusiast",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,//sd
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Android",
      icon: android, //ds
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "aws",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "Campus Market",
      company_name: "BMSIT&M",
      icon: shopify,
      iconBg: "#383E56",
      date: "February 2024 - April 2024",
      points: [
        "Developed a full-stack e-commerce platform using the MERN stack to address the specific needs of campus students.",
        "Facilitated seamless buying and selling of second-hand items such as study tables, books, beds, and vehicles.",
        "Streamlined the process of connecting buyers and sellers within the campus to save time and effort.",
        "Provided a user-friendly platform to enhance accessibility and promote sustainable reusability among students.",
      ],
    },
    {
      title: "Wallify",
      company_name: "BMSIT&M",
      icon: wallify,
      iconBg: "#383E56",
      date: "July 2024",
      points: [
        "Created an Android application that allowed users to automatically change wallpapers with customizable timers and intervals.",
        "Integrated intuitive UI components for seamless wallpaper transitions, resulting in increased user engagement.",
        "Optimized Java code to enhance app performance, reducing resource consumption and improving battery efficiency.",
      ],
    },
    {
      title: "AI Saas Chatbot",
      company_name: "BMSIT&M",
      icon: chatbot,
      iconBg: "#E6DEDD",
      date: "October 2024",
      points: [
        "Built a scalable AI-driven chatbot platform using the MERN stack, designed for seamless cross-device interaction.",
        "Developed a responsive and intuitive user interface with MUI React components to enhance user experience.",
        "Integrated the OpenAI API to generate and render chatbot responses, delivering functionality akin to ChatGPT.",
        "Utilized MongoDB for efficient storage and secure management of user data.",
      ],
    },
    {
      title: "FitZilla",
      company_name: "CodeRed Hackathon",
      icon: fitzilla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Built a responsive landing page using HTML, CSS, and React.js framework to enhance user engagement and functionality.",
        "Integrated the EmailJS API for seamless contact functionality, improving user interaction.",
        "Implemented responsive design principles, enhancing user experience and ensuring optimal performance across various devices.",
        "Utilized modern JavaScript frameworks to reduce page load time, improving overall app performance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "You didn't come this far to only come this far.",
      name: "Matthew Reilly",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "You Got a Dream, You Gotta Protect It.",
      name: "Chris Gardner",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "An algorithm must be seen to be believed.",
      name: "Donald Knuth",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Campus Market",
      description:
        "A MERN stack-based web platform enabling students within a campus to search, buy, and sell used items like tables, chairs, providing an efficient solution for their needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: campus,
      source_code_link: "https://github.com/raZer99/Campus-Market",
    },
    {
      name: "AI Saas ChatBot",
      description:
        "A full-stack AI chatbot built with the MERN stack, featuring seamless device compatibility and intelligent responses powered by the OpenAI API and MongoDB.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/raZer99/AI-SaaS-Chat-Bot",
    },
    {
      name: "School Website",
      description:
        " A React.js-based website developed by a team during a hackathon, showcasing essential school information with a user-friendly and interactive interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: school,
      source_code_link: "https://github.com/raZer99/School-Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  