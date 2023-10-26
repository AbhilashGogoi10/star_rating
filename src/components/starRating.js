import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [color, setColor] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input type="radio" name="rate"
                value={currentRate}
                onClick={()=> setRating(currentRate)}

              />
              <FaStar className="stars" size={50} 
                color={currentRate <= (color || rating ) ? "yellow" : "white"}
              />
            </label>
          </>
        );
      })}
    </>
  );
};

export default StarRating;
