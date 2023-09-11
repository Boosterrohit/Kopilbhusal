import React from "react";
import "../../Asset/Style/HeroSection.css";
const GetDev = () => {
  return (
    <section className="getLink py-4 mt-5">
      <div className="container">
        <div className="row align-items-center d-flex">
          <div className="col-sm-6 col-lg-8">
            <h1 className="text-white fw-medium">
              Getting started with DevOps?
            </h1>
            <p className="text-white link-para2">
              Checkout my youtube channel for latest videos on DevOps tutorials
              for beginners.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center">
            <button className="text-white filter1">VIEW VIDEO TUTORIAL</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetDev;
