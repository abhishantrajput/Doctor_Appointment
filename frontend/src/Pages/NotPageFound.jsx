import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import NotFoundImg from "../assets/images/notFound.svg";

const NotPageFound = () => {
  return (
    <>
      <section className="notFound pt-0 min-h-screen">
        <div className="container">
          <img src={NotFoundImg} alt="notFound" className="ml-auto mr-auto" />
          <h1>LOOKS LIKE YOU'RE LOST</h1>
          <p>We can't seem to find you the page you're looking for</p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotPageFound;
