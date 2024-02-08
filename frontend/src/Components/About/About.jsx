import React from "react";

import AboutImg from "../../assets/images/about.png";
import AboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ------------------About Img----------------- */}

          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={AboutImg} alt="About Images" />

            {/* ------------------Doctor Card----------------- */}

            <div className="absolute z-20 bottom-4 w-[200px] lg:w-[360px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={AboutCardImg} alt="About Card img" />
            </div>
          </div>

          {/* ---------------About Content----------------- */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be One of the nations best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              maiores, error soluta debitis ea accusantium repellat. Enim qui
              facere quo mollitia asperiores reprehenderit? Perspiciatis magnam
              ipsam sequi natus totam ipsum deleniti facere adipisci voluptates
              rerum.
            </p>
            <p className="text__para mt-[35px] ">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              sint nulla eligendi ipsam quia ex delectus doloribus harum
              accusamus! Illo reiciendis exercitationem beatae voluptatem
              facilis!
            </p>

            <Link to={"/"}>
              <button className="btn ">Learn more...</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
