import React, { useState } from "react";
import MyModal from './mymodal.component';
import "../style/img_card.css";

const ImgCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const { image, title, Rating, text, kuh, time, address } = props;
  
  return (
    <>
      <div className="card-bady" onClick={handleModalOpen}>
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p>{Rating}</p>
        </div>
      </div>

      <MyModal
        showModal={showModal}
        handleModalClose={handleModalClose}
        title={title}
        image={image}
        text={text}
        kuh={kuh}
        time={time}
        address={address}
      />
    </>
  );
};

export default ImgCard;
