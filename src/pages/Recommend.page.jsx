import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import cardsData from '../Data/data';
import PlaceBlock from '../components/placeBlock.component';

export default class New extends Component {
  render() {

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
      <Container>
        {selectedCards.map((data, index) => (
          <PlaceBlock
            key={index}
            image={data.image}
            title={data.title}
            type={data.type}
            text={data.text}
            kuh={data.kuh}
            time={data.time}
            address={data.address}
            RatingStar={data.Rating}
          />
        ))}
      </Container>
    );
  }
}
