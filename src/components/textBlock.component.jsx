import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TextBlock(props) {
  return (
    <Container className='mt-5 mb-5'>
      <Row >
        <Col className="text-center">
          <h2>{props.value}</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default TextBlock;
