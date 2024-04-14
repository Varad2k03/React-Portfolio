import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Amazon from "../../Assets/Projects/Amazon.png";
import PixelProEdit from "../../Assets/Projects/Image Editor.png";
import Crypto from "../../Assets/Projects/Crypto-Site.png";
import Starbucks from "../../Assets/Projects/Starbucks.png";
import Youtube from "../../Assets/Projects/Youtube.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon Clone"
              description="Implemented Amazon Clone template for small online shopping platform."
              ghLink="https://github.com/Varad2k03/Amazon-Clone"
              demoLink="https://varad2k03.github.io/Amazon-Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PixelProEdit}
              isBlog={false}
              title="PixelProEdit"
              description="Image editor built using HTML, CSS, and JavaScript. It provides users with the ability to upload, edit, and save images directly in the browser."
              ghLink="https://github.com/Varad2k03/Image-Editor"
              demoLink="https://varad2k03.github.io/Image-Editor/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="Crypto Site"
              description="Implemented a Crypto Currency website using React, Chart.js, and LocalS"
              ghLink="https://github.com/Varad2k03/Crypto-site-react"
              demoLink="https://crypto-site-react.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Starbucks}
              isBlog={false}
              title="Starbucks"
              description="Implemented Starbucks website using Html, CSS, and JavaScript."
              ghLink="https://github.com/Varad2k03/Product-landing-page"
              demoLink="https://varad2k03.github.io/Product-landing-page/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Clone"
              description="Implemented Youtube Clone using rapidapi and React.js."
              ghLink="https://github.com/Varad2k03/youtube-clone"
              demoLink="https://watch-hub3.netlify.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
