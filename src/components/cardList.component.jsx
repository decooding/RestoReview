import React, { useState } from "react";
import { Modal, Button, Form, ListGroup, Image  } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardsData from "../Data/data";

const CardList = () => {  
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleModalOpen = (card) => {
    setSelectedCard(card);
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
      setReviewsList([...reviewsList, review]);
      setReview('');
    };

  const cardColumns = cardsData.slice(0, 12).reduce((columns, card, index) => {
    const columnIndex = Math.floor(index / 4);
    columns[columnIndex] = columns[columnIndex] || [];
    columns[columnIndex].push(card);
    return columns;
  }, []);

  const cardGroups = cardColumns.map((cards, index) => (
    <Carousel.Item key={index} style={{transition:'0.6s'}}>
      <Row className="card-deck">
        {cards.map((card, index) => (
          <Col key={index} md={3}>
            <Card
                onClick={() => handleModalOpen(card)}
                style={{
                    width: '315px',
                    height: '300px',
                    textAlign: 'left'
                }}
            >
              <Card.Img 
              variant="top" 
              src={card.image}
              style={{height: '180px'}} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                    <div>{card.RatingStar}</div>
                <Card.Text>{card.type}</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  ));

  return (
    <div>
    <Carousel 
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      indicators={false}
      className="mt-4"
    >
      {cardGroups}
    </Carousel>

    {showModal && (
        <Modal show={showModal} 
        onHide={handleModalClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header closeButton>
          <Modal.Title>{selectedCard.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img src={selectedCard.image} alt="image" style={{ height: '100%', objectFit: 'cover' }} />

          <div className=" mt-3" style={{ textAlign: 'left' }}>
            <p>{selectedCard.text}</p>
            <p>
              <b>Кухня:</b> {selectedCard.kuh}
            </p>
            <p>
              <b>Время работы:</b> {selectedCard.time}
            </p>
            <p>
              <b>Адрес:</b> {selectedCard.address}
            </p>
          </div>

          <ListGroup>
          {reviewsList.map((review, index) => (
             <ListGroup.Item key={index} className="d-flex align-items-center">
             <div className="mr-3">
               <Image
                 src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-1024.png"
                 alt="Img"
                 width={64}
                 height={64}
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
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={handleReviewChange}
            />
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
      </div>

  );
};

export default CardList;
