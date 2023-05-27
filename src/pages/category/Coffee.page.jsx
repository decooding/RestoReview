import React, { Component } from 'react';
import cardsData from '../../Data/data';
import PlaceBlock from '../../components/placeBlock.component';
import { Container } from 'react-bootstrap';

export default class Cafe extends Component {
  render() {
    const filteredData = cardsData.filter((data) => data.type === 'Кофейния');

    return (
      <Container>
        {filteredData.map((data, index) => (
          <PlaceBlock
            key={index}
            img={data.image}
            title={data.title}
            type={data.type}
            text={data.text}
            kuh={data.kuh}
            time={data.time}
            address={data.address}
            RatingStar={data.RatingStar}
          />
        ))}
      </Container>
    );
  }
}
