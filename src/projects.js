import localEats from "./images/localEats.png";
// import grafittyScreen from "./images/graffityScreen.png";
import profinder from "./images/ProFinder-Home.png";

const projects = [
  {
    id: 1,
    name: "ProFinder",
    description:
      "ProFinder is an application designed to connect users with skilled professionals who offer services to address common daily life challenges. Whether you need assistance with cleaning, nursing, electrical work, carpentry, or other essential tasks, ProFinder provides a user-friendly interface where users can search for service providers based on their specific needs and location.",
    technologies: [
      "React.js",
      "GraphQl",
      "Tailwind CSS",
      "Mongoose",
      "MongoDB",
      "Javascript",
      "Node.js",
      "Express.js",
      "HTML",
    ],
    url: "https://profinder-dev.herokuapp.com/",
    github: "https://github.com/SolanoD94/profinder",
    role: "Team Leader and DB",
    screenshot: profinder,
  },
  {
    id: 2,
    name: "LocalEats",
    description:
      "Local Eats is a web application that allows users to post their favorite selfmade dishes along with information about where the dish can be bought, the time when the dish is available, and the price.",
    technologies: [
      "HTML",
      "Tailwind",
      "JavaScript",
      "Node.js",
      "Express.js",
      "SQL",
      "Sequelize",
      "Bcrypt",
    ],
    url: "https://localeats.herokuapp.com/",
    github: "https://github.com/SolanoD94/localeats",
    role: "Team Leader",
    screenshot: localEats,
  },
  // {
  //   id: 3,
  //   name: "Grafitty",
  //   description:
  //     "Graffity is an Ecommerce where you can design your own T-shirt. ",
  //   technologies: ["HTML", "CSS", "Shopify"],
  //   url: "https://grafitty.com.mx/",
  //   role: "Team Leader and Owner",
  //   screenshot: grafittyScreen,
  // },
];

export default projects;
