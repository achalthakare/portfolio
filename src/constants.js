// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import ccoewLogo from './assets/education_logo/ccoew_logo.png';
import angloLogo from './assets/education_logo/anglo_logo.jpg';
import abhLogo from './assets/education_logo/abh_logo.jpg';

// Project Section Logo's
import signSecureLogo from './assets/work_logo/signSecure.png'


import persistentLogo from './assets/company_logo/persistent-logo.jpeg'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
 
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: persistentLogo,
      role: "Intern",
      company: "Persistent Systems Limited",
      date: "Oct 2024 - Mar 2025",
      desc: "A full-stack web application that converts long URLs into short, easy-to-share links. Built with a React frontend, Spring Boot backend, and MySQL database, it includes features like link tracking and analytics. The application is fully deployed on AWS, ensuring high availability and scalability for real-time URL management.",
      skills: [
        "EC2",
        "S3",
       "RDS"
      ],
    },
   

  ];
  
  export const education = [
    {
      id: 0,
      img: ccoewLogo,
      school: "CCOEW, Nagpur",
      date: "Nov 2022 - May 2026",
      grade: "7.42 CGPA",
      desc: "I am currently persuing my Bachelor's degree in Computer Engineering (B.Tech) from Cummins College of Engineering for Women , Nagpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. It allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "B.Tech in Computer Engineering",
    },
    {
      id: 1,
      img: angloLogo,
      school: "Anglo Hindi Junior College, Yavatmal",
      date: "Aug 2020 - Jun 2022",
      grade: "85.17%",
      desc: "I completed my class 12 education from Anglo Hindi Junior College, Yavatmal, under the Maharashtra State Board, where I studied Physics, Chemistry,Biology and Mathematics (PCMB).",
      degree: "HSC (XII), Maharashtra State Board - PCMB",
    },
    {
      id: 2,
      img: abhLogo,
      school: "Abhyankar Kanya School, Yavatmal",
      date: "Apr 2019 - March 2020",
      grade: "96%",
      desc: "I completed my class 10 education from Abhyankar Kanya School, Yavatmal, affiliated with the Maharashtra State Board. During this time, I developed a strong academic foundation, especially in core subjects like Mathematics and Science, which later fueled my interest in technology and problem-solving.",
      degree: "SSC (X), Maharashtra State Board",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "IntelliChat",
      description:
          "A secure handwritten signature verification system built for offline leave approval. It uses CNN-based signature analysis, Spring Boot backend, and a React frontend. Warden verifies the physical signature, and notifications are sent to both HOD and student upon verification.",
      image: signSecureLogo,
       tags: ["React JS", "Spring Boot", "CNN", "Python", "Machine Learning", "Firebase", "Tailwind CSS"],
      github: "https://github.com/achalthakare/IntelliChat.git",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "TradeMate",
      description:
          "A full-featured learning management system , built for students and instructors. Features include video course uploads, user authentication, progress tracking, course reviews, and responsive design. Built to enhance digital education accessibility.",
      image: signSecureLogo,
       tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/achalthakare/TradeMate.git",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "SignSecure",
      description:
          "A secure handwritten signature verification system built for offline leave approval. It uses CNN-based signature analysis, Spring Boot backend, and a React frontend. Warden verifies the physical signature, and notifications are sent to both HOD and student upon verification.",
      image: signSecureLogo,
       tags: ["React JS", "Spring Boot", "CNN", "Python", "Machine Learning", "Firebase", "Tailwind CSS"],
      github: "https://github.com/achalthakare/Handwritten-Signature-Verification.git",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
  ];