// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Electrical And Electronics Engineer",
    firstName: "DINAKARAN",
    LastName: "SELVARAJU",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in Programming",
      },
      {
        count: "3+",
        text: "Projects in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "C Programming",
        para: "Problem solving",
        logo: figma,
      },
      {
        name: "C++ Programming",
        para: "STL Libraries and Problem Solving",
        logo: nodejs,
      },
      {
        name: "HTML",
        para: "Designing the Developing the Website's Structure",
        logo: ps,
      },
      {
        name: "CSS",
        para: "Giving vibrant colours and Alignment to Designed HTML Page",
        logo: reactjs,
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Internships",
    subtitle: "EXPERIENCES",
    service_content: [
      {
        title: "SRG Power Control Systems LTD,Coimbatore",
        para: "Worked on manufacturing MOP panels using PLC ",
        logo: services_logo1,
      },
      
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "RANGE EXTENED ELECTRIC VEHICLE",
        image: project1,
      },
      {
        title: "Nano Turbine",
        image: project2,
      },
      {
        title: "Air Quality Index balancing in ports",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Achievements",
    subtitle: "Feats",
    testimonials_content: [
      {
        review:
          "“	Best Presentation and Team Coordination Award presented by SAE REEV 2022,Bangalore,lndia”",
          img: avatar1,
        name: "SAEINDIA",
      },
      {
        review:
          "“	Overall Winner Cash price 1.5Lakhs”",
          img: avatar2,
        name: "SAEINDIA",
      },

    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Competent minded Engineer looking for a position in an innovative company with a leadership character that has evolved along with management responsibilities. Challenging organization where I can put my expertise and abilities to use.Hard-working, ambitious professional seeking a challenging position in a technical organization where I can enhance my skills and strength in conjunction with the institution’s goal and achieve excellence through experience. ",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "dinakaranselvaraju05@gmail.com",
        icon: GrMail,
        link: "mailto:dinakaranselvaraju05@gmail.com",
      },
      {
        text: "+91 9342446490",
        icon: MdCall,
        link: "https://wa.me/9342446490",
      },
      {
        text: "Devil_dina05",
        icon: BsInstagram,
        link: "https://instagram.com/devil_dina05?igshid=YmJhNjkzNzY=",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
