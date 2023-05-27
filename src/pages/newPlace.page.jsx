import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import cardsData from '../Data/data';
import PlaceBlock from '../components/placeBlock.component';

export default class New extends Component {
  render() {
    return (
      <Container>
        {cardsData.map((data, index) => (
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
