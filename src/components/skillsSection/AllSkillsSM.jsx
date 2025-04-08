import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { SiAdobexd } from "react-icons/si";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
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
 
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
