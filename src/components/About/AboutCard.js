import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import laptopImg from "../../Assets/about.png";
import homeLogo from "../../Assets/homelogo.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aporbo Ghosh </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />FRONTEND DEVELOPMENT is my area of expertise. As for frameworks REACT JS is my cup of tea. I started working with React Js for almost a year. But recently, NUXT JS and REACT native caught my eye, and trying it out. JAVASCRIPT, Jquery, Bootstrap, and CSS are a few key things that I specialize in.
            <br />
            Along with that, I also help people as a mentor on their journey of becoming a professional programmer.
            <br />
            I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
           <br/>
           <br/>
           <img style={{width:"300px"}} src={laptopImg} alt="about" className="img-fluid" />            

            <p>Apart from coding, some other activities that I love to do!</p>
          </p>
          <ul>
            <li className="about-activity">
              <i className="fas fa-info-circle"></i> Playing outdoor Games
            </li>
            <li className="about-activity">
              <i className="fas fa-info-circle"></i> Volunteering
            </li>
            <li className="about-activity">
              <i className="fas fa-info-circle"></i> Travelling
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
