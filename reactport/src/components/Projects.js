import React from "react";

// import "../styles/Team.css";

import Pierre from "../img/profile.original.jpg";
import Container from "react-bootstrap/Container";
import NoteTaker from "../img/NoteTaker.png";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Template from "../img/TemplateEngineHtml.png";
import Merritt from "../img/MerrittHuntClub.png";
import Weather from "../img/WeatherDashboard.png";
// import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Projects() {
  return (
    <Container>
      <Card>
        <Card.Img src={Pierre} alt="pierre" height="330px" />
        <Card.Body>
          <Card.Text>Developer Portfolio</Card.Text>
          <Card.Title>Pierre Calmels</Card.Title>
          <Card.Text></Card.Text>
          <Card.Text>
            <a href="https://github.com/pierre8237">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      <CardDeck style={{ width: "100%" }}>
        <Card>
          <Card.Img src={Template} alt="" height="330px" />
          <Card.Body>
            <Card.Title>Employee Template Engine</Card.Title>
            <a href="https://github.com/pierre8237/Employee_Summary">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={NoteTaker} alt="Pierre" height="330px" />
          <Card.Body>
            <Card.Title>Note Takin</Card.Title>
            <Card.Text></Card.Text>
            <Card.Text>
              <a href="https://github.com/pierre8237/note-takin">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img src={Merritt} alt="Pierre" height="330px" />
          <Card.Body>
            <Card.Title>Merritt Hunt Club</Card.Title>
            <Card.Text></Card.Text>
            <Card.Text>
              <a href="https://github.com/pierre8237/clubStaff">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={Weather} alt="Pierre" height="330px" />
          <Card.Body>
            <Card.Title>Open Weather Dashboard</Card.Title>
            <Card.Text></Card.Text>
            <Card.Text>
              <a href="https://github.com/pierre8237/Weather-Tracker">
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
