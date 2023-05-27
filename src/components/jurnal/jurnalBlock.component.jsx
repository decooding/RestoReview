import React from 'react'
import { Card } from 'react-bootstrap'

function JurnalBlock(props) {
  return (
    <Card className='px-0' style={{ width: '280px', height: '400px' }}>
      <Card.Img className='mx-0' style={{ width: '100%' }} variant="top" src={props.image} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Card.Title style={{ textAlign: 'left' }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.shortText}
          </Card.Text>
        </div>
        <div style={{ alignSelf: 'flex-end' }}>
          <p>Open</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JurnalBlock;

