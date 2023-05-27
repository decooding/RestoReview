import React, { useState } from 'react';
import { Card, Modal, Button, Form, ListGroup, Image } from 'react-bootstrap';

function PlaceBlock(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const [review, setReview] = useState('');
  const [reviewsList, setReviewsList] = useState([]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавляем новый отзыв в список
    setReviewsList([...reviewsList, review]);
    // Очищаем поле ввода отзыва
    setReview('');
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

      {showModal && (
        <Modal
          show={showModal}
          onHide={handleModalClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img src={props.image} alt="image" style={{ height: '100%', objectFit: 'cover' }} />

            <div className=" mt-3" style={{ textAlign: 'left' }}>
              <p>{props.text}</p>
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

            <ListGroup>
              {reviewsList.map((review, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center">
                  <div className="mr-3">
                    <Image
                      src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-1024.png"
                      alt="image"
                      width={32}
                      height={32}
                      roundedCircle
                    />
                  </div>
                  <div className="ml-3">
                    <p>Пользователь</p>
                    <p>{review}</p>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Форма для оставления отзыва */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="reviewForm">
                <Form.Label>Отзыв:</Form.Label>
                <Form.Control as="textarea" rows={3} value={review} onChange={handleReviewChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Отправить
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default PlaceBlock;
