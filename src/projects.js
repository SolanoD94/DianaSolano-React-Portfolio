import localEats from "./images/localEats.png";
import grafittyScreen from "./images/graffityScreen.png";

const projects = [
  {
    id: 1,
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
  {
    id: 2,
    name: "Grafitty",
    description:
      "Graffity is an Ecommerce where you can design your own T-shirt. ",
    technologies: ["HTML", "CSS", "Shopify"],
    url: "https://grafitty.com.mx/",
    role: "Team Leader and Owner",
    screenshot: grafittyScreen,
  },
];

export default projects;
