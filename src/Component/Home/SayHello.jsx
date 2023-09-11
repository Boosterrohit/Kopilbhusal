import React, { useState } from "react";
import "../../media/Media.css";
const SayHello = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setError] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setError(errors);
    if (Object.keys(errors).length === 0) {
      alert("Done");
    }
  };
  const validate = () => {
    const error = {};
    if (!email) {
      error.email = "Email Is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is not Match";
    } else {
      error.email = "";
    }
    if (!name) {
      error.name = "Name is Required";
    } else {
      error.name = "";
    }
    return error;
  };
  return (
    <section className="sayhello">
      <div className="container">
        <div className="text-center">
          <h1 className="text-black-50 text-uppercase">Say Hello!</h1>
          <p className="pb-5 saypara">
            Feel free to reach out to me at anytime.
            <span className="d-block">
              I am available for consulting, contract or other opportunities on
              short to medium range notice.
            </span>
          </p>
        </div>
        <div className="form_container">
          <form onSubmit={handelSubmit}>
            <div className="form-group d-flex justify-content-center device1">
              <div
                className="d-flex flex-column input-field"
                data-aos="flip-left"
              >
                <label htmlFor="Name">Name *</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  onClick={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </div>
              <div
                className="d-flex flex-column input-field mx-3"
                data-aos="zoom-in"
              >
                <label htmlFor="Email">Email *</label>
                <input
                  type="text"
                  placeholder="Enter Your email"
                  onClick={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div
                className="d-flex flex-column input-field"
                data-aos="flip-right"
              >
                <label htmlFor="phone">Phone</label>
                <input type="text" placeholder="Enter Your Phone Number" />
              </div>
            </div>
            <div
              className="form-group d-flex justify-content-center align-items-center mt-3"
              data-aos="zoom-in"
            >
              <div className="d-flex flex-column w-100 text-area">
                <label htmlFor="ttext">Message</label>
                <textarea placeholder="Write Message" className="message" />
              </div>
            </div>
            <button className="filter1 p-2 w-25 mt-3">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SayHello;
