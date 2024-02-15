import { AiFillStar } from "react-icons/ai";

import React, { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  console.log(reviewText)


  const handleSubmitReview = async(e)=>{

    e.preventDefault()
  }




  return (
    <form>
      <div>
        <h2 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How Would you like to Rate Overall Experience?😊
        </h2>

        {[...Array(5).keys()].map((_, index) => {
          index += 1;

          return (
            <button
              key={index}
              type="button"
              className={`${
                index <= ((rating && hover) || hover)
                  ? "text-yellowColor"
                  : "text-gray-400"
              } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
              }}
            >
              <span>
                <AiFillStar />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-[30px]">
        <h2 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share Your Feedback and Suggestions👇
        </h2>

        <textarea
          className="border border-solid border-[#0066ff34] w-full foucs:outline outline-primaryColor px-3 py-4 rounded-md"
          placeholder="Share your thoughts..."
          onClick={(e)=>setReviewText(e.target.value)}
          rows={5}
        />
      </div>



      <button type="submit" onClick={handleSubmitReview} className="btn">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
