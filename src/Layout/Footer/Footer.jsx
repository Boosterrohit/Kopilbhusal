import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  //   const whatsapp = () => {
  //     const whatapps = "https://wa.link/p26k4b";
  //     window.open(whatapps, "_target");
  //   };
  const whatapps = "https://wa.link/p26k4b";
  const linkedin = "https://www.linkedin.com/in/kopil-bhusal";
  const instagram = "https://www.instagram.com/kapvil/";
  const facebook = "https://www.facebook.com/kapvil12";
  return (
    <footer>
      <div className="text-center footer-link">
        <div className="container">
          <h1 className="text-white">Let's Connect!</h1>
          <div className="media-link d-flex justify-content-center">
            <div className="linkd">
              <Link to={linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-twitter text-white fs-5 hov"></i>
              </Link>
            </div>
            <div className="linkd">
              <Link to={facebook} target="_blank" rel="noreferrer">
                <i className="bi bi-facebook text-white fs-5 hov1"></i>
              </Link>
            </div>
            <div className="linkd">
              <Link to={linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-google text-white fs-5 hov2"></i>
              </Link>
            </div>
            <div className="linkd">
              <Link to={whatapps} target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp text-white fs-5 hov3"></i>
              </Link>
            </div>
            <div className="linkd">
              <Link to={instagram} target="_blank" rel="noreferrer">
                <i className="bi bi-instagram text-white fs-5 hov4"></i>
              </Link>
            </div>
            <div className="linkd">
              <Link to={linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin text-white fs-5 hov5"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbg">
        <div className="container">
          <p className="text-center">
            Copyright © 2020 - 2023 Kopil Bhusal{" "}
            <span className="d-block">
              Copy of the content on this website is strictly prohibited while
              open to use with source citations
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
