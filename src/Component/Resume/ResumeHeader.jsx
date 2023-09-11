import React from "react";
import "../../Asset/Style/Resume.css";
const ResumeHeader = () => {
  return (
    <section className="resume">
      <div className="container content text-center position-absolute">
        <h1 className="text-white why" data-aos="fade-up">
          Resume
        </h1>
        <p className="text-white mt-4" data-aos="fade-up">
          This page tells the best, most up to date story about me and my
          career. However, if you need
          <span className="d-block">
            a plain resume in a standard format, click Download at the top or
            contact me for the most
          </span>
          recent version
        </p>
      </div>
    </section>
  );
};

export default ResumeHeader;
