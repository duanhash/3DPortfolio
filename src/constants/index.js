import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  threejs,
  redux,
  git,
  openavenues,
  iotproject,
  stockscreener,
  portfoliowebsite,
  devmissionlogo
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
      id: "projects",
      title: "Projects",
    },
    // {
    //   id: "testimonials",
    //   title: "Feedback",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Lorem Ipsum",
      icon: web,
    },
    {
      title: "Lorem Ipsum",
      icon: mobile,
    },
    {
      title: "Lorem Ipsum",
      icon: backend,
    },
    {
      title: "Lorem Ipsum",
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
      name: "React JS",
      icon: reactjs,
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
      name: "git",
      icon: git,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    }
  ];
  
  const experiences = [
    {
      title: "Apprenticeship Trainee",
      company_name: "Dev/Mission",
      icon: devmissionlogo,
      iconBg: "#DCCFEC",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Completed 120 hours of:",
        "IT Fundamentals (Hardware, Software, OS)",
        "Intro to Web App Programming (HTML, CSS, JavaScript, Bootstrap, AirTable)",
        "IoT (Internet of Things)",
        "Critical Career Skills",
      ],
    },
    {
      title: "Student Consultant, Investment Analysis",
      company_name: "Open Avenues",
      icon: openavenues,
      iconBg: "#DCCFEC",
      date: "March 2020 - April 2021",
      points: [
        "Learned about the structure of venture capital funds and how they operate.",
        "Learned how to understand & negotiate terms with a startup including valuation, ownership stake, voting rights, liquidation preferences, and other key provisions of a term sheet.",
        "Created an investment memo for a growth stage startup that included a market map, market size estimate. operating and financial analysis, competitive analysis, and thesis.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem Ipsum.",
      name: "[Name]",
      designation: "[Title]",
      company: "Acme Co.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem Ipsum.",
      name: "[Name]",
      designation: "[Title]",
      company: "Acme Co.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem Ipsum.",
      name: "[Name]",
      designation: "[Title]",
      company: "Acme Co.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ESP32 Screener",
      description:
        "Used ESP32 to connect to APIs to display the latest prices of any stock on an LCD. Type stock symbol into the console after running the simulation (Can continue typing without restarting).",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        }
      ],
      image: iotproject,
      source_code_link: "https://github.com/duanhash/ESP32Screener",
    },
    {
      name: "Stock Screener",
      description:
        "duanchen.netlify.app is a single page web application that grabs data from four different APIs (twelvedata, alphavantage, mboum finance, polygon) to display stock data.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React Router",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "orange-text-gradient",
        },
        {
          name: "Highcharts",
          color: "blue-text-gradient",
        },
        {
          name: "Axios",
          color: "green-text-gradient",
        }
      ],
      image: stockscreener,
      source_code_link: "https://github.com/duanhash/StockScreener",
    },
    {
      name: "Portfolio Website",
      description:
        "The code for this website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React Router",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "threeJS",
          color: "orange-text-gradient",
        }
      ],
      image: portfoliowebsite,
      source_code_link: "https://github.com/duanhash/Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };