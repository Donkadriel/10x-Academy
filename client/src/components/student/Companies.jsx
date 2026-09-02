import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-body  ">Trusted by learners from</p>
      <div className="flex flex-wrap justify-between justify-center gap-6 md:gap-16 md:mt-10 mt-5">

        {Object.entries(assets)
          .filter(([key]) => key.includes("_logo"))
          .map(([key, src]) => (
            <img key={key} src={src} alt={key} className="w-20 md:w-28" />
          ))}
      </div>
    </div>
  );
};

export default Companies;
