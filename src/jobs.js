import rollAloo from "./images/rollAloo.png";
import grafittyLogo from "./images/grafitty.png";
import qualityCopy from "./images/qualityCopy.png";
import volkswagenLogo from "./images/volkswagenLogo.png";

const jobs = [
  {
    id: 1,
    company: {
      name: "Roll Aloo",
      location: "Puebla City",
      logo: rollAloo,
    },
    position: "Shop Owner",
    description:
      "Roll Aloo is a european ice-cream franchise, where I was the owner and full time operations administrative. ",
    duration: "2021 - 2022",
  },
  {
    id: 2,
    company: {
      name: "Grafitty",
      location: "Puebla City",
      logo: grafittyLogo,
    },
    position: "CEO & Co-Founder",
    description:
      "Grafitty is not only a website where you can design a tshirt, but also, Grafitty offers a B2B service for other clothing brands that want to do dropshipping with us. I developed from scratch the supply chain, the branding, and created the website itself. Obtaining growth results of 120% per year.",
    duration: "2018 - 2022",
  },
  {
    id: 3,
    company: {
      name: "Quality Copy",
      location: "Puebla City",
      logo: qualityCopy,
    },
    position: "Marketing Director",
    description: "Quality Copy is a printing machine distributor.",
    duration: "2017 - 2021",
  },
  {
    id: 4,
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
