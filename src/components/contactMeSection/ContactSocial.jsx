import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sadiya-afrin-tisha-304048347/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://www.behance.net/sadiyaafrin20" Icon={FaBehanceSquare} />
      <SingleContactSocial link="https://www.instagram.com/_sadiya.afrin_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
