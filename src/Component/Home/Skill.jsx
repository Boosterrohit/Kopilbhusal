import React, { useState } from "react";
import { data } from "../../utils/data.js";
import "../../Asset/Style/HeroSection.css";
const Skill = () => {
  const [filterData, setFilterData] = useState(data);

  const filterByData = (category) => {
    const filter = data.filter((item) => item.category === category);
    setFilterData(filter);
  };
  return (
    <section>
      <div className="container text-center">
        <h1 className="p-4 text-uppercase fw-medium text-black-50">
          Some of my Skills
        </h1>
        <div className="p-4 pb-5 btn-dev">
          <button
            onClick={() => setFilterData(data)}
            className="filter px-4 py-2 mb-2"
          >
            All
          </button>
          <button
            onClick={() => filterByData("Category A")}
            className="filter px-4 py-2 mx-2 mb-2"
          >
            Devops
          </button>
          <button
            onClick={() => filterByData("Category B")}
            className="filter px-4 py-2 mb-2"
          >
            Web Development
          </button>
        </div>
        <div className="row align-items-center justify-content-center">
          {filterData.map((items) => {
            return (
              <div key={items.id} className="col-6 col-sm-6 col-lg-3  ">
                <img
                  src={items.img}
                  className="img-fluid img2 mt-3"
                  alt=""
                  data-aos="zoom-in"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
