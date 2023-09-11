import React from "react";
import Card from "react-bootstrap/Card";
import "../../Asset/Style/HeroSection.css";
import linkedin from "../../Asset/Image/linkedin.svg";
import "../../media/Media.css";
import GetDev from "./GetDev";
const Linkedin = () => {
  const linkdin = "https://www.linkedin.com/in/kopil-bhusal";
  return (
    <section className="linkedin">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-6 col-lg-4">
            <p className="link-ko fw-bold">Kopil Bhusal</p>
            <Card data-aos="fade-up-right">
              <div className="d-flex py-1 link-head">
                <p className="px-3 pt-1 fw-bold linkedin-logo fs-4">
                  Linked<i className="bi bi-linkedin"></i>
                </p>
              </div>
              <Card.Img
                variant="top"
                src={linkedin}
                className="img-fluid mt-4 px-4 img-top"
              />
              <Card.Body>
                <Card.Title className="mt-3 fs-6 fw-bold">
                  Kopil Bhusal
                </Card.Title>
                <Card.Text className="mt-1 link-para">
                  Senior DevOps Engineer at Ramail Tech |{" "}
                  <span className="d-block"> AWS Certified</span>
                </Card.Text>
                <p className="link-ra">Ramilo Tech</p>
                <a
                  href={linkdin}
                  target="-blank"
                  className="linkedin-link text-decoration-none py-1 px-3"
                >
                  View Profile
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-1 hide"></div>
          <div className="col-sm-6 col-lg-7 link-dev-para" data-aos="flip-left">
            <h1 className="fw-bold text-black-50">A Little Story about me</h1>
            <p className="link-para1">
              Kopil Bhusal is a DevOps Engineer at Business.com where he is
              working closely with department heads, developments teams,
              editorial staff, IT helpdesk and executives to produce world class
              electronic media and product services. He got over 6 years of
              experience as infrastructure support (AWS, Linux, Windows), DevOps
              (Build & Release Management), and a background in web
              applications, database, middleware.
              <span className="d-block mt-3">
                He has a Master's Degree in Computer Science from Texas A&M
                University and this website tells the best, most up to date
                story about Akash and his career. However, if you need a plain
                resume in a standard format, click Download at the top.
              </span>
            </p>
          </div>
        </div>
      </div>
      <GetDev />
    </section>
  );
};

export default Linkedin;
