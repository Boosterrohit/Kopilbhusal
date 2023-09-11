import React from "react";
import "../../Asset/Style/Resume.css";
import { paragraph, training } from "../../utils/data";
const Summary = () => {
  return (
    <section>
      <div className="container  resume-step2 overflow-hidden">
        <div className="d-flex justify-content-center mt-5 py-1">
          <p>
            AWS Certified DevOps Engineer with experience in Supporting
            Infrastructure (AWS, Linux, Windows), DevOps (Build & Release
            Management)
            <span className="d-block">
              with strong background on web applications, middleware, and
              databases.
            </span>
          </p>
        </div>
        <p className="text-uppercase text-primary fw-bold fs-4 pt-4">
          professional Summary
        </p>
        <div className="mb-5" data-aos="flip-up">
          {paragraph.map((item, index) => {
            return (
              <div key={index}>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: item.title }} />
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-uppercase text-primary fw-bold fs-4">
            TECHNICAL SKILLS
          </p>
          <div
            data-aos="fade-left"
            className="overflow-hidden
          "
          >
            {training.map((texts, idx) => {
              return (
                <div key={idx}>
                  <ul>
                    <li dangerouslySetInnerHTML={{ __html: texts.text }} />
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <p className="text-uppercase text-primary fw-bold fs-4 pt-3">
              CERTIFICATIONS & TRAINING
            </p>
            <ul data-aos="fade-down">
              <li>
                Master's in Computer Science - Texas A&M University, Commerce,
                Texas, USA.
              </li>
              <li>
                Bachelor's in Computer Sciences - Anna University, Chennai,
                INDIA.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-uppercase text-primary fw-bold fs-4 pt-3">
              education
            </p>
            <ul data-aos="fade-up">
              <li>
                Master's in Computer Science -
                <span className="text-primary fw-medium">
                  Texas A&M University, Commerce,
                </span>
                Texas, USA
              </li>
              <li>
                Bachelor's in Computer Sciences -
                <span className="text-primary fw-medium">Ambition College</span>
                , Chennai, INDIA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
