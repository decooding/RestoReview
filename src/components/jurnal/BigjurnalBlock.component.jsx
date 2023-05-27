import React from 'react'
import { Card } from 'react-bootstrap'

function BigJurnal(props) {
  return (
    <Card className='px-0' style={{ width: '575px', height: '400px' }}>
      <Card.Img className='mx-0'  style={{ width: '100%', height: '300px' }} variant="top" src={props.image} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Card.Title style={{ textAlign: 'left' }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.text}
          </Card.Text>
        </div>
        <div style={{ alignSelf: 'flex-end'}}>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BigJurnal;

