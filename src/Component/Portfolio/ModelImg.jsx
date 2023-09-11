import React, { useState } from "react";
import { imgModel } from "../../utils/data.js";
import "../../media/Media.css";
const ModelImg = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const openModal = (src, alt) => {
    setModalImageSrc(src);
    setModalCaption(alt);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <section className="img-model overflow-hidden">
      <div className="container text-center image-container py-5">
        <div className="row">
          {imgModel.map((image, index) => (
            <div
              key={index}
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-left"
            >
              <div className="image-container mx-auto position-relative ff">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="image w-100 mt-4"
                  onClick={() => openModal(image.src, image.alt, image.capton)}
                />
                <p className="caption p-2 fw-bold text-white fs-5 filter">
                  {image.capton}
                </p>
              </div>
            </div>
          ))}
        </div>

        {modalVisible && (
          <div
            id="myModal"
            className="modal"
            onClick={closeModal}
            style={{ display: "block" }}
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              className="modal-content"
              id="img01"
              src={modalImageSrc}
              alt={modalCaption}
            />
            <div id="caption">{modalCaption}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelImg;
