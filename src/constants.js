// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import sqlLogo from './assets/tech_logo/SQL.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import angularLogo from './assets/tech_logo/angular.png';
import hibernateLogo from './assets/tech_logo/hibernate.png';
import awsLogo from './assets/tech_logo/aws.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import stsLogo from './assets/tech_logo/sts.jpg';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import androidLogo from './assets/tech_logo/android.png';
import intellijLogo from './assets/tech_logo/intellij_idea.png';
import eclipseLogo from './assets/tech_logo/eclipse.png';
import linuxLogo from './assets/tech_logo/linux.png';
import windowsLogo from './assets/tech_logo/windows.png';
import claudeaiLogo from './assets/tech_logo/claudeai.png';
import chatgptLogo from './assets/tech_logo/chatgpt.png';
import cursoraiLogo from './assets/tech_logo/cursor_ai.png';
import geminiaiLogo from './assets/tech_logo/gemini.png';


// Experience Section Logo's
import creazioneLogo from './assets/company_logo/creazione_logo.jpg';
import suvidhaLogo from './assets/company_logo/suvidha_logo.jpg';


// Education Section Logo's
import mmcoeLogo from './assets/education_logo/mmcoe_logo.jpg';
import kpcLogo from './assets/education_logo/kpc_logo.png';
import nwcLogo from './assets/education_logo/nwc_logo.jpg';
import bhsLogo from './assets/education_logo/bhs_logo.jpg';

// Project Section Logo's
import cutoutLogo from './assets/work_logo/cutout_react.png';
import shoppingcartLogo from './assets/work_logo/shopping_cart.jpeg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
    ],
  },

  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'Hibernate', logo: hibernateLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },

  {
    title: 'Dev Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'STS', logo: stsLogo },
      { name: 'IntelliJ IDEA', logo: intellijLogo },
      { name: 'Eclipse', logo: eclipseLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },

  {
    title: 'AI & OS',
    skills: [
      { name: 'ChatGPT', logo: chatgptLogo },
      { name: 'Claude AI', logo: claudeaiLogo },
      { name: 'Cursor AI', logo: cursoraiLogo },
      { name: 'Gemini AI', logo: geminiaiLogo },
      { name: 'Linux', logo: linuxLogo },
      { name: 'Windows', logo: windowsLogo },
      { name: 'Android', logo: androidLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: creazioneLogo,
      role: "Jr. Software Developer",
      company: "Creazione Software ",
      date: "June 2025 - Dec 2025",
      desc: "Developed dynamic and scalable web applications using the Java Full Stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Spring Boot",
        "Spring",
        "Node JS",
        "MySQL",
      ],
    },
    {
      id: 1,
      img: suvidhaLogo,
      role: "App Development Intern",
      company: "Suvidha Foundation",
      date: "Feb 2024 - May 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Android, SQL, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Android",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: mmcoeLogo,
      school: "Marathwada Mitra Mandal's College of Engineering, Pune",
      date: "Aug 2022 - May 2025",
      grade: "6.58 CGPA",
      desc: "I have completed my Bachelors degree (BE) in Electronics & Telecommunication(ECE) from SPPU University, Pune. During my time at MMCOE, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MMCOE has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Engineering - BE (ECE)",
    },
    {
      id: 1,
      img: kpcLogo,
      school: "Karmayogi Institute of Technology(Polytechnic), Pandharpur",
      date: "Aug 2020 - July 2022",
      grade: "79.71%",
      desc: "I completed my Diploma in Computer Technology (Diploma) from KPC College, Pandharpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at KPC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Diploma in Computer Technology",
    },
    {
      id: 2,
      img: nwcLogo,
      school: "Nowrosjee Wadia College, Pune",
      date: "Aug 2018 - March 2020",
      grade: "53.54%",
      desc: "I completed my class 12 education from Nowrosjee Wadia College, Pune, under the Maharashtra State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "HSC(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: bhsLogo,
      school: "Bharat HighSchool, Makani",
      date: "Apr 2017 - March 2018",
      grade: "84.8%",
      desc: "I completed my class 10 education from Bharat HighSchool, Makani, Dharashiv, under the Maharashtra State board, where I studied Science with Computer.",
      degree: "SSC(X)- Mharashtra State Board",
    },
  ];
  
  export const projects = [

    {
      id: 0,
      title: "Shopping Cart",
      description:
        "A responsive shopping cart application built with React.js and integrated with a backend API. It allows users to add items, update quantities, and remove items from their cart.",
      image: shoppingcartLogo,
      tags: ["Java", "SQL", "HTML", "CSS", "JavaScript", "MySQL", "SpringBoot", "React JS"],
      github: "https://github.com/shivbansode369/Shopping_Kart",
      webapp: "#",
    },
     
    {
      id: 1,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: cutoutLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/shivbansode369/cutout-react",
      webapp: "https://cutout-react.vercel.app/",
    },

  ];  