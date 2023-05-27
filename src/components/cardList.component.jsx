import React, { useState } from "react";
import {Card, Carousel, Row, Col } from "react-bootstrap";
import cardsData from "../Data/data";
import MyModal from "./mymodal.component";

const CardList = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const handleModalOpen = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const cardColumns = cardsData.slice(0, 12).reduce((columns, card, index) => {
    const columnIndex = Math.floor(index / 4);
    columns[columnIndex] = columns[columnIndex] || [];
    columns[columnIndex].push(card);
    return columns;
  }, []);

  const cardGroups = cardColumns.map((cards, index) => (
    <Carousel.Item key={index} style={{ transition: "0.6s" }}>
      <Row className="card-deck">
        {cards.map((card, index) => (
          <Col key={index} md={3}>
            <Card
              onClick={() => handleModalOpen(card)}
              style={{
                width: "315px",
                height: "300px",
                textAlign: "left",
              }}
            >
              <Card.Img variant="top" src={card.image} style={{ height: "180px" }} />
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

      {showModal && selectedCard && (
        <MyModal
          showModal={showModal}
          handleModalClose={handleModalClose}
          title={selectedCard.title}
          image={selectedCard.image}
          text={selectedCard.text}
          kuh={selectedCard.kuh}
          time={selectedCard.time}
          address={selectedCard.address}
        />
      )}
    </div>
  );
};

export default CardList;
