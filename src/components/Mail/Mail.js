import React from 'react';
import emailjs from 'emailjs-com';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Particle from '../Particle';
import { Container, Row, Col } from "react-bootstrap";

const Mail = () => {
  
    
      function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_l4htx16', 'template_hin7d49', e.target, 'user_P0F6asGnCyMiiEjSZHPFI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    function onClick(){
        alert('sent')
    }
      return (
        <div>
           <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Aporbo"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Aaporboo"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aporbo-ghosh-7753541a6/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/aporbo._/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
<MDBContainer>
          <Particle></Particle>
          <MDBRow>
              <MDBCol md-3 >

              </MDBCol>
            <MDBCol md="6">
              <form style={{color:"#6A06A9"}} className="contact-form" onSubmit={sendEmail} >
                <p  className="h5 text-center mb-4" >Email me</p>
                <div className="grey-text">
                  <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
                  <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                  <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                </div>
                <div className="text-center">
                  <MDBBtn onClick={onClick} type="submit" value="Send" outline color="primary">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol md-3 >

</MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
        
        );
        };
export default Mail;