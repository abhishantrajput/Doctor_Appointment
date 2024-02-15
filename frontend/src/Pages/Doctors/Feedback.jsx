import { useState } from "react";
import avatarIcon from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../Utils/FormateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All Reviews(272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full ">
              <img className="w-full" src={avatarIcon} alt="avatarImg" />
            </figure>

            <div className="">
              <h5 className="text-[15px] font-bold leading-6 text-primaryColor">
                Sumit Prajapati
              </h5>
              <p className="text-[13px] leading-5 text-textColor">
                {formateDate("02-13-2024")}
              </p>
              <p className="text__para mt-3 text-[15px] font-medium">
                Good Services, Highly Recommended 👍👍👍
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
