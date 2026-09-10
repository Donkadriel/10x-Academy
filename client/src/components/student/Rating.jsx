// Bring in the tools we need from React.
// useState: a box that remembers a value. useEffect: runs code when something changes.
import { useState, useEffect } from "react";

// Make a Rating component. It receives initialRating as a prop.
// (Note: onRate should be inside the {} too, like {initialRating, onRate})
const Rating = ({initialRating, onRate}) => {
  // rating = how many stars are lit. Start at initialRating, or 0 if none given.
  // setRating changes that value.
  const [rating, setRating] = useState(initialRating || 0);
  // Called when a star is clicked. value = the star number (1 to 5).
  const handleRating = (value) => {
    setRating(value)          // light up that many stars
    if(onRate) onRate(value)  // tell the parent what was picked
  }
// Whenever initialRating changes, update the stars to match.
useEffect(() => {
  if(initialRating){
    setRating(initialRating)
  }
}, [initialRating])
  return (
    <div>
      {/* Create 5 stars (index goes 0,1,2,3,4). */}
      {Array.from({length:5}, (_, index) => {
       const starValue = index + 1; // stars are 1-based, so add 1

      return (
        // Yellow if this star is <= rating, gray otherwise. Clicking runs handleRating.
        <span key={index} className={`text-xl sm:texr-2xl cursor-pointer transition-colors ${starValue <= rating ? "text-yellow-500" : "text-gray-400"}`} onClick={()=> handleRating(starValue)}>
          &#9733; {/* &#9733; is the star character */}
        </span>
      )
         })}
    </div>
  )
}

// Allow other files to import this component (import Rating from "...")
export default Rating