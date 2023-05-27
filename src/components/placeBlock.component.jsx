import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import MyModal from './mymodal.component';

function PlaceBlock(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="mb-3" style={{ width: '100%' }} onClick={handleModalOpen}>
        <Card.Body className="d-flex flex-column">
          <div className="row">
            <div className="col-4">
              <Card.Img src={props.image} alt="image" style={{ height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="col">
              <div className="d-flex justify-content-between align-items-center">
                <h4>{props.title}</h4>
                <div className="date">{props.type}</div>
              </div>

              <div className=" mt-3" style={{ textAlign: 'left' }}>
                <p>
                  <b>Кухня:</b> {props.kuh}
                </p>
                <p>
                  <b>Время работы:</b> {props.time}
                </p>
                <p>
                  <b>Адрес:</b> {props.address}
                </p>
              </div>

              <div className="d-flex justify-content-end align-items-center mt-2">
                <div>{props.RatingStar}</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

        <MyModal
          showModal={showModal}
          handleModalClose={handleModalClose}
          title={props.title}
          image={props.image}
          text={props.text}
          kuh={props.kuh}
          time={props.time}
          address={props.address}
        />
    </>
  );
}

export default PlaceBlock;
