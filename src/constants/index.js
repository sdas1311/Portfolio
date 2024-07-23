import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have in depth knowledge in Data Structures andAlgorithms (DSA) and experience of programming in C / C++. I also have knowledge of some Machine Learning (ML) technologies. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, Express.js, Web sockets, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Synchronous Chat ",
    image: project1,
    description:
      `This is a MERN-based full stack responsive chat app using sockets for realtime communication.
      Users can signup or login in the app and can send & receive message between them along with emojis.
      Users can also upload & send as well as receive & download files.
      Mogoose ODM is used for Data Modelling, Socket.io for instant communication with authentication by JWT, user passwords are hashed, Multer is used for file handling,  and Zustand for Seamless State Management.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT", "Mongoose", "Multer", "Zustand"],
    source: "https://github.com/sdas1311/Synchronous-Chat.git",
    visit: "",
  },
  {
    title:"CalBurnPredict",
    image: project2,
    description:
      `It is a Machine Learning Model created using ML Regression algorithms like Linear, DecisionTree,RandomForest, XGBoost.
      Dataset is collected from Kaggle and the model can be integrated with a simple web application to allow users to provide input and receive predictions on the number of calories burned.`,
    technologies: ["Numpy", "Pandas", "Matplotlib", "Python","Seaborn", "Sklearn", "Pickle"],
    source: "https://github.com/sdas1311/CalBurnPredict.git",
    visit: "",
  },
  {
    title: "WeatherWise",
    image: project3,
    description:
      `Real time weather forecasting & information showing website made using Tailwind CSS, JavaScript,ReactJS and Vite bundler.
      Visual Crossing Weather API is used from RapidAPI for fetching real time weather data.`,
    technologies: ["JavaScript", "RapidAPI", "React.js", "Tailwind CSS", "Vite"],
    source: "https://github.com/sdas1311/WeatherWise.git",
    visit: "https://weather123xyz.netlify.app/",
  },
  {
    title: "TaskTracker",
    image: project4,
    description:
      `A To-Do web app where one can create Task to do, edit that task, check that task as completed after completion and also remove that task. It is uses local storage of the browser to store the task and context API of React is used which increases code readability and maintainability.  `,
    technologies: ["Javascript", "React.js", "ContextAPI", "Local Storage", "Vite", "Tailwind CSS"],
    source: "https://github.com/sdas1311/TaskTracker.git",
    visit: "https://tasktracker1311.netlify.app/",
  },
];

export const CONTACT = {
  address: "135, Swamiji Sarani Basak Bagan, Kolkata- 700048",
  phoneNo: "+91-6289472734 ",
  email: "dasronisoumya13@gmail.com",
};
