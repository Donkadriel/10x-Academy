import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CoursesSection = () => {

  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8 space-y-5">
      <h2 className="text-3xl font-medium text-heading">Learn from the best</h2>
      <p className="text-sm md:text-base text-body mt30">
        Discover out top-rated courses across various categories. From coding
        and design to <br /> busines and wellness, our coourses are crafted to deliver
        results.{" "}
      </p>

      <div className="grid gridTemplateColumns px-4 md:px-0 md:my-16 my-10 gap-4 ">
      {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course} />)}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-body border border-body/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
