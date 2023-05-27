import React from 'react';
import ImgCard from '../components/img_card.component';
import cardsData from '../Data/data';
import { Container } from 'react-bootstrap';

const MainRecomend = () => {
  // Выберите определенные элементы из массива cardsData
  const selectedCards = [
    cardsData[4],
    cardsData[5],
    cardsData[6],
    cardsData[7],
    cardsData[8],
    cardsData[9],
    cardsData[10],
    cardsData[11]
  ];

  return (
    <Container style={{ marginLeft: '10%' }}>
      <div className="row mb-3">
        {selectedCards.slice(0, 4).map((card, index) => (
          <ImgCard
            className="col-3"
            key={index}
            image={card.image}
            title={card.title}
            Rating={card.Rating}
            text={card.text}
            kuh={card.kuh}
            time={card.time}
            address={card.address}
          />
        ))}
      </div>

      <div className="row">
        {selectedCards.slice(4, 8).map((card, index) => (
          <ImgCard
            className="col-3"
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
            Rating={card.Rating}
            kuh={card.kuh}
            time={card.time}
            address={card.address}
          />
        ))}
      </div>
    </Container>
  );

};

export default MainRecomend;
