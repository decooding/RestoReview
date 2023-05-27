import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <Container>
        <Row>
          <Col md={6}>
            <p className="text-light">Company Name &copy; {new Date().getFullYear()}</p>
          </Col>
          <Col md={6} className="text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/" className="text-light">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="/about" className="text-light">About</a>
              </li>
              <li className="list-inline-item">
                <a href="/contact" className="text-light">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
