import React from 'react';
import { Container } from 'react-bootstrap';
import Food from '../../Data/food';

export default function JurnalSoup() {
  const { title, image, text, ul_items, li_items } = Food[0];

  return (
    <Container className='mt-5' style={{ textAlign: 'left' }}>
      <h2>{title}</h2>
      <img className='my-3' src={image} alt="" />
      <p style={{ textAlign: 'justify' }}>{text}</p>
      <p style={{ textAlign: 'justify' }}>{ul_items}:</p>
      <ul>
        {li_items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Container>
  );
}
