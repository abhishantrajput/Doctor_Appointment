import Pagination from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import avatarIcon from "../../assets/images/patient-avatar.png";
import "swiper/css";

import "swiper/css/pagination";

import CarouselItem from "./Carousel";

const Testimonial = () => {
  return (
    <div className="mt-[30px]">
      <Swiper
        modules={{ Pagination }}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          330:{slidesPerView:1 ,spaceBetween:0},
          640: { slidesPerView: 1, spaceBetween: 0 },
          770: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide className="flex items-center justify-between gap-7">
          <CarouselItem
            name="Abhi"
            avatar={avatarIcon}
            message={
              "I have taken medical Services from them.I'd say they treat their patients so well."
            }
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between gap-7">
          <CarouselItem
            name="Dhruvil"
            avatar={avatarIcon}
            message={
              "I have taken medical Services from them.I'd say they treat their patients so well."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            name="Jay"
            avatar={avatarIcon}
            message={
              "I have taken medical Services from them.I'd say they treat their patients so well."
            }
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between gap-7">
          <CarouselItem
            name="Abhay"
            avatar={avatarIcon}
            message={
              "I have taken medical Services from them.I'd say they treat their patients so well."
            }
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between gap-7">
          <CarouselItem
            name="Mohit"
            avatar={avatarIcon}
            message={
              "I have taken medical Services from them.I'd say they treat their patients so well."
            }
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between gap-7">
          <CarouselItem
            name="Sumit"
            avatar={avatarIcon}
            message={
              "I have taken medical Services from them.I'd say they treat their patients so well."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
