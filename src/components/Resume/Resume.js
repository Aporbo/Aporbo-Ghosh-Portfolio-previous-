import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import image from '../../Assets/student.gif'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Aporbo's_Resume.pdf";

function Resume() {
 
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Freelance job"
              date="April 2021"
              content={[
                "Build some of full stack simple website for client and get better reviews.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Volunteering"
              content={[
                "Member  NSUACMSC Web team.",
              ]}
            />
            <Resumecontent
             title="Volunteering"
             content={[
               "In-chrage of NSUACMSC corporate team",
             ]}
             
            />
             <h3 className="resume-title">Designing</h3>
            <Resumecontent
              title="3d/2d Designing"
              content={[
               "I am good at Autocad 3D/2D and floor-plan designing And passionate for this type of designing"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="North South University "
              date="2019 - Present"
              content={[` Studying  BSc in Computer Science and Engineering which one of Bangladesh's top universities.`]}
            />
            
           
            <h3 className="resume-title">Field of Interest</h3>
            <Resumecontent
              title="Android development"
              content={[
               ""
              ]}
            />
             <Resumecontent
              title="Ui/Ux design"
              content={[
               ""
              ]}
            />
             <Resumecontent
              title="Computer networking"
              content={[
               ""
              ]}
            />
          </Col>
          
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
