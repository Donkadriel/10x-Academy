import { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";


const CourseCard = ({course}) => {
  const {currency, calculateRating} = useContext(AppContext)
  const rating = calculateRating(course);
  const displayRating = rating % 1 === 0 ?rating : rating.toFixed(1)

  return (
      <Link to={`/course/` + course._id} onClick={() => scrollTo(0,0)} className="border border-border/30 pb-6 overflow-hidden rounded-lg">
      <img className="w-full" src={course.courseThumbnail} alt="" />
     <div className="p-3 text-left">
      <h3 className="text-base font-semibold"
      >{course.courseTitle}</h3>
      <p className="text-body"
      >{course.educator.name}</p>
      <div className="flex items-center space-x-2">
        <p>{displayRating}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={i < Math.floor(rating)? assets.star : assets.star_blank} alt={i} className="w-3.5 h-3.5" />
          ))}
        </div>
        <p className="text-body">{course.courseRatings.length}</p>
      </div>
       <p className="text-body font-semibold text-base">{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
     </div>
    
    </Link>
  );
};

export default CourseCard;
