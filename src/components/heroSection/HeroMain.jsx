import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row  sm:flex-col sm:gap-20 max-w-[1200px] mx-auto justify-between items-center relative px-4 py-10">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
