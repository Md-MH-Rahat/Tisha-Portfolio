import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import abc from "../../../src/assets/images/brand.jpg"
import abcd from "../../../src/assets/images/tshirt.jpg"
const projects = [
  {
    name: "TERRATREK",
    year: "Mar2025",
    align: "right",
    image: abc,
    link: "https://www.behance.net/gallery/223188239/TERRATREK-Brand-Identity",
  },
  {
    name: "T‑SHIRT DESIGNS",
    year: "Feb2025",
    align: "left",
    image: abcd,
    link: "https://www.behance.net/gallery/223187023/ANIME-TSHIRT-DESIGNS",
  },
  // {
  //   name: "Tourzania",
  //   year: "Jan2023",
  //   align: "right",
  //   image: "../../public/images/website-img-3.jpg",
  //   link: "#",
  // },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "../../public/images/website-img-4.jpg",
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
