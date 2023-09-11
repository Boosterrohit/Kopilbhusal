import React from "react";
import "../../Asset/Style/HeroSection.css";
import bgVide from "../../Asset/Video/background.mp4";
import "../../media/Media.css";
const Header = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className="header1">
      <video autoPlay loop muted playsInline className="header-video">
        <source src={bgVide} type="video/mp4" />
      </video>
      <div className="container header-content">
        <h1 className="text-white main-text" data-aos="fade-up">
          Hi, This is Kopil Bhusal
        </h1>
        <p className="text-white main-para fw-bold" data-aos="fade-up">
          AWS Certified DevOps Engineer
        </p>
        <button className="main-btn fw-bold fs-6" data-aos="fade-up">
          VIEW MY RESUME
        </button>
        <div>
          <button onClick={scrollDown()} className="arrow-down">
            <p className="arrow-down1 fw-bold fs-4">&#8595;</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
