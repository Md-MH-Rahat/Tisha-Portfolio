import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo link="mailto:sadiyaafrinn04@gmail.com" text="sadiyaafrinn04@gmail.com" Image={HiOutlineMail} />
      <SingleInfo link="tel:+8801916262980" text="+8801916262980" Image={FiPhone} />
      <SingleInfo link="https://www.google.com/maps?q=Dhaka,Bangladesh" text="Dhaka, Bangladesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
