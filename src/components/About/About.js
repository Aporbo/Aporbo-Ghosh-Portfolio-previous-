import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profileImg from "../../Assets/profile.png";
import homeLogo from "../../Assets/homelogo.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Here <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={homeLogo} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Techstack iconName="devicon-c-line" />
          <Techstack iconName="devicon-cplusplus-line" />
          <Techstack iconName="devicon-java-plain" />
          <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-css3-plain" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-materialui-plain" />
          <Techstack iconName="devicon-redux-plain" />
          <Techstack iconName="devicon-firebase-plain" />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-github" />
          <Techstack iconName="cib-heroku" />
          <Techstack iconName="devicon-intellij-plain" />

        </Row>
        <Github />

      </Container>
    </Container>
  );
}

export default About;
