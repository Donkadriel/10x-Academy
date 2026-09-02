import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:pt-36 pt-20 md:px-0 px-7 space-y-7 text-center bg-gradient-to-b from-navbar-bg/70 ">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-heading max-w-3xl mx-auto  px-5">
        Empower your future with the courses designed to        <span className="text-primary ">fit your choice.</span>
        <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0 bg-transparent" />
      </h1>

      <p className="md:block hidden text-body mt-10 max-w-2xl mx-auto ">
        We bring together world-class instructors, interactive content, and a suportive community to help your achieve personal and professional goals.
      </p>
      <p className="md:hidden text-body max-w-sm mx-auto mt-5">
        We bring together world-class instructors to help you achieve your professional goals.
      </p>


      <SearchBar />
   
    </div>
  );
};
export default Hero