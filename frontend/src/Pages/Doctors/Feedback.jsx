import { useEffect, useState } from "react";
import avatarIcon from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../Utils/FormateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
import { UserRole } from "../../config.js";

const Feedback = ({ totalRating, reviews }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const [isPatient, setIsPatient] = useState(false);

  var role = UserRole;
  useEffect(() => {
    console.log(typeof role);

    console.log(role);

    if (role === "patient") {
      setIsPatient(true);
    }

    if (role === "doctor") {
      setIsPatient(false);
    }
  }, [role]);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All Reviews({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full ">
                <img
                  className="w-full"
                  src={review.user?.photo}
                  alt="avatarImg"
                />
              </figure>

              <div className="">
                <h5 className="text-[15px] font-bold leading-6 text-primaryColor">
                  {review?.user?.name}
                </h5>
                <p className="text-[13px] leading-5 text-textColor">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text__para mt-3 text-[15px] font-medium">
                  {review.reviewText}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedbackForm && isPatient && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && isPatient && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
