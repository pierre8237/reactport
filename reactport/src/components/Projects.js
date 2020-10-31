import React from "react";

// import "../styles/Team.css";
// import Mathew from "./Images/mathew (1).png";
// import Aimee from "./Images/aimee (1).png";
// import Pierre from "./Images/pierre (1).png";
import Pierre from "../img/profile.original.jpg";
import Container from "react-bootstrap/Container";
import NoteTaker from "../img/NoteTaker.png";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Template from "../img/TemplateEngineHtml.png";
// import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Projects() {
  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Img src={Pierre} alt="pierre" height="330px" />
          <Card.Body>
            <Card.Title>Pierre Calmels</Card.Title>
            <Card.Text>Developer Portfolio</Card.Text>
            <Card.Text></Card.Text>
            <Card.Text>
              <a href="https://github.com/pierre8237">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={Template} alt="" height="330px" />
          <Card.Body>
            <Card.Title></Card.Title>
            <a href="https://github.com/pierre8237/Employee_Summary">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <Card.Text></Card.Text>
            <Card.Text></Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={NoteTaker} alt="Pierre" height="330px" />
          <Card.Body>
            <Card.Title>Note Takin</Card.Title>
            <Card.Text></Card.Text>
            <Card.Text>pierre8237@yahoo.com</Card.Text>
            <Card.Text>
              <a href="https://github.com/pierre8237/note-takin">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}
export default Projects;
