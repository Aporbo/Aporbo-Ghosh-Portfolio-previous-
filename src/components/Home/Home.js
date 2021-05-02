import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";
import homeImage from "../../Assets/profile.png"
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/Aporbo's_Resume.pdf"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey, Folks! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M 
                <strong className="main-name"> Aporbo Ghosh</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <Button  variant="info" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
              </div>
              
            </Col>
           
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeImage} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
