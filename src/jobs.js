import giga from "./images/giga-logo.jpg";
import rollalooLogo from "./images/rollAloo.png";
import grafittyLogo from "./images/grafitty.png";
import qualityCopy from "./images/qualityCopy.png";
import volkswagenLogo from "./images/volkswagenLogo.png";

const jobs = [
  {
    id: 1,
    company: {
      name: "GIGA IT",
      location: "Remote",
      logo: giga,
    },
    position: "Software Developer",
    description:
      "Software Developer at Nearshore Services USA",
    duration: "2023 - today",
  },
  {
    id: 2,
    company: {
      name: "Roll Aloo",
      location: "Remote",
      logo: rollalooLogo,
    },
    position: "Shop Owner",
    description:
      "Software Developer at Nearshore Services USA",
    duration: "2022-2023",
  },
  {
    id: 3,
    company: {
      name: "Grafitty",
      location: "Puebla City",
      logo: grafittyLogo,
    },
    position: "Project Manager",
    description:
      "Grafitty is not only a website where you can design a tshirt, but also, Grafitty offers a B2B service for other clothing brands that want to do dropshipping with us. I developed from scratch the supply chain, the branding, and created the website itself. Obtaining growth results of 120% per year.",
    duration: "2017 - 2022",
  },
  {
    id: 4,
    company: {
      name: "Quality Copy",
      location: "Puebla City",
      logo: qualityCopy,
    },
    position: "Marketing Manager",
    description: "Quality Copy is a printing machine distributor.",
    duration: "2017 - 2021",
  },
  {
    id: 5,
    company: {
      name: "Volkswagen Group",
      location: "Wolfsburg, Germany",
      logo: volkswagenLogo,
    },
    position: "Purchasing Department Assistant",
    description: "Metal Purchasing Department Data Analysis",
    duration: "2015 - 2016",
  },
];

export default jobs;
