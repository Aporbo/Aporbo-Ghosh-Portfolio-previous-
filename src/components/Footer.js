import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../Assets/logof.png'
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
         
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} <img style={{height:"25px"}} src={logo} alt=""/> </h3>
        </Col>
        <Col md="4" className="footer-body">
        
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
