import React from 'react';
import { Card } from 'react-bootstrap';

function GridCard(props) {
  return (
    <div className='p-0 mx-auto' xs={3}>
      <Card style={{ transform: 'scale(0.8)' }}>
        <Card.Img
          variant="top"
          src={props.img}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <Card.Body>
          <Card.Title>{props.value}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GridCard;
