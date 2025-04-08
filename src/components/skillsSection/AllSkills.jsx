import SingleSkill from "./SingleSkill";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { SiAdobexd } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
// import { SiNextdotjs } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Illustrator",
    icon: SiAdobeillustrator,
  },
  {
    skill: "Photoshop",
    icon: SiAdobephotoshop,
  },
  {
    skill: "Adobe XD",
    icon: SiAdobexd,
  },
  {
    skill: "MS Word",
    icon: PiMicrosoftWordLogoFill,
  },
  {
    skill: "Powerpoint",
    icon: PiMicrosoftPowerpointLogoFill ,
  },

  {
    skill: "MS Excel",
    icon: PiMicrosoftExcelLogoFill,
  },
  // {
  //   skill: "NextJS",
  //   icon: SiNextdotjs,
  // },
  // {
  //   skill: "TailwindCSS",
  //   icon: RiTailwindCssFill,
  // },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
