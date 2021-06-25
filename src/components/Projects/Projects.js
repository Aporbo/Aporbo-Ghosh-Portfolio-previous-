import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import boighor from "../../Assets/Projects/boighor.png";
import covid19 from "../../Assets/Projects/covid.png";
import uber from "../../Assets/Projects/uber.png";
import slider from "../../Assets/Projects/slider.png";
import hungry from "../../Assets/Projects/hungry.png";
import sports from "../../Assets/Projects/sportsss.png";
import team from "../../Assets/Projects/team.png";

import blog1 from "../../Assets/Blogs/blog1.png";
import blog2 from "../../Assets/Blogs/blog2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dream Destination"
              description="It is a demo e-commerce travel related website. I have listed below some features of it."
              feature= "(1).Any one can book a travel place. (2).different type of view for admin and user. (3)User and Admin can sign up and log in to this website using google. (4)User can see his/her all booked destination. (5)Firebase Auth (6)Register new user Signin (7)exiting user Keep tracks of entries for each user (8)Respoisive Design (9)There is a dashboard for admin by which admin can add update and delete places for showing users. admin also can delete users destination admin can set destination status user can review the system. user also see the all reviews"
              link="https://dream-destination-f64f9.web.app/"
              link2="https://github.com/Aporbo/Dream-destination-client"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boighor}
              isBlog={false}
              title="BoiGhor"
              description="It is a demo e-commerce book-shop related website. I have listed below some features of it."
              feature= "(1).any one can order books.(2).User and Admin can sign up and log in to this website using google.(3)User and Admin can sign up and log in to this website using google. (4)User can see his/her all ordered book.(5)Firebase Auth (6)Register new user Signin (7)exiting user Keep tracks of entries for each user (8)Responsive Design (9)There is a dashboard for admin by which admin can maintain and delete Books for showing users"
              link="https://boighor-da35b.web.app/"
              link2="https://github.com/Aporbo/BoiGhor-client"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid19}
              isBlog={false}
              title="Covid-19 Tracker"
              description="This a Covid-19 tracker for track regular update off new cases of affected, recovered and deaths."
              feature= "(1)Real Time Covid Information (2).Country wise Map (3)Graph of Covid (4)All Countries info in one place (5)Firebase Auth (6)Register new user Signin (7)exiting user Keep tracks of entries for each user"
              link="https://covid19-tracker-byaporbo.web.app/"
              link2="https://github.com/Aporbo/Covid-tracker"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="Uber-Lite"
              description="A firebase related  E-commerce firebase authentication app"
              feature= "(1).Any one can book a place. (3)User  can sign up and log in to this website using google. (4)User can see his/her all booked destination. (5)Firebase Auth (6)Register new user Signin (7)exiting user Keep tracks of entries for each user (8)Respoisive Design"
              link="https://uber-lite-13064.web.app/"
              link2="https://github.com/Aporbo/Uber-lite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slider}
              isBlog={false}
              title="Photo-Slider"
              description="A photo search and slider website"
              feature= "(1).Search through name and get photo (2)photos are being fetched via API cal(3)one can select as much as photo(4)Create slider and it will slide automatically those selected photos"
              link="https://aporbo.github.io/Unlimited-Photo-Slider/"
              link2="https://github.com/Aporbo/Unlimited-Photo-Slider"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sports}
              isBlog={false}
              title="Sports-Mania"
              description="This is a website where one can know about football leagues and teams."
              feature= "(1)team details using api(2)League details using api"
              link="https://footballleagues1.netlify.app/leagues/4334"
              link2="https://github.com/Aporbo/Sports-mania"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hungry}
              isBlog={false}
              title="Hungry-Monstar"
              description="A website where one can search food and get food with recipe"
              feature= "(1).One can Search food (2)get food details (4)can get recipe"
              link="https://aporbo.github.io/Hungry-Monstar/"
              link2="https://github.com/Aporbo/Hungry-Monstar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team}
              isBlog={false}
              title="Team-Selection"
              description="This is a team 11 selection demo website."
              feature= "(1).Show BANGLADESHI cricket players and their salary(2)one can select playe(3)one can make team 11 from selected player(4).show cost for team"
              link="https://bcb-team-selection.netlify.app/"
              link2="https://github.com/Aporbo/team-selection"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>Here is my recent blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6} className="blog-card">
            <BlogCard
              imgPath={blog1}
              link="https://aporbogosh249.medium.com/basics-of-javascript-adf6e6e13af"
              title="Basics of JavaScript"
              // site=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6} className="blog-card">
            <BlogCard
              imgPath={blog2}
              link="https://aporbogosh249.medium.com/javascript-interview-solution-5cbf45a03618"
              title="Javascript interview solution"
              // site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
