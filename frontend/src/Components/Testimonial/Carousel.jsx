import { HiStar } from "react-icons/hi";

const CarouselItem = ({ name, avatar, message }) => {
  return (
    <div className="py-[30px] px-5 rounded-[13px]">
      <div className="flex items-center gap-[13px]">
        <img src={avatar} alt={name} />
        <div>
          <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
            {name}
          </h4>

          <div className="flex items-center gap-1">
            <HiStar className="w-[18px] h-6 text-yellowColor " />
            <HiStar className="w-[18px] h-6 text-yellowColor " />
            <HiStar className="w-[18px] h-6 text-yellowColor " />
            <HiStar className="w-[18px] h-6 text-yellowColor " />
            <HiStar className="w-[18px] h-6 text-yellowColor " />
          </div>
        </div>
      </div>
      <p className=" text-[14px] mt-4  text-textColor">{`" ${message} "`}</p>
    </div>
  );
};

export default CarouselItem;
