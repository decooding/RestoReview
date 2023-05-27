import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function JurnalFood() {
  const location = useLocation();
  const { title, image, text, ul_items, li_items } = location.state;


  return (
    <Container className='mt-5' style={{ textAlign: 'left' }}>
      <h2>{title}</h2>
      <img className='my-3' src={image} alt='' />
      <p style={{ textAlign: 'justify' }}>{text}</p>
      <p style={{ textAlign: 'justify' }}>{ul_items}</p>
      <ul>
        {li_items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Container>
  );
}
