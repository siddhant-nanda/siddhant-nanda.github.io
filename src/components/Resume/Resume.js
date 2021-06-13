import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Resume-SiddhantNanda.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://www.codechef.com/users/sidnanda97";
  const [codechefRating, updateCodechefRating] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        console.log(res);
        updateCodechefRating();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer [Turtlemint]"
              date="Aug 2020 - Present"
              content={[
                "Organized and prioritized work to complete assignments in a timely, efficient manner.",
                "Developed a new product to capture consent in the real-time scenario from the customer to proceed with their purchase",
                "Directed config-driven services for SaaS clients which reduced the development time by 50%.", "Effectively multi-tasked and prioritized projects according to need.",
                "Tech Stack - Spring Boot, Play, PostgreSQL & MongoDB"
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern [Turtlemint]"
              date="Jan 2020 - July 2020"
              content={[
                "Developed an assistant in Python which can automate the process of data manipulation and management along with handling multiple formats of files.",
                "Co-ordinated with a cross-functional team of 10 in 2 locations (Mumbai and Pune), and collaborated with business development, data science, and operations teams.",
                "Identified steps to reduce data management by 30% resulting in reducing the time by 80%.",
                "Tech Stack - Django, MongoDB, PostgreSQL, and Rest framework."
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Deep Learning Nanodegree by Udacity"
              content={[
                "Created Deep Learning models and tested them wrt to the benchmark models",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="International Institute of Information Technology, Bhubaneswar"
              date="2016 - 2020"
              content={[`CGPA: 8.66/10`,
              `Data Structure and Algorithms`,
              `Theory of Computation`,
              `Data Communication and Computer Network`,
              `Data and Web Mining`,
              `Cyptography & Network Security`]}
            />
            <Resumecontent
              title="Kendriya Vidyalaya No-2, CRPF Campus, Bhubaneswar"
              date="2015"
              content={["Precentage: 86%", "Science Stream"]}
            />
            <Resumecontent
              title="Kendriya Vidyalaya, Puri"
              date="2013"
              content={["CGPA: 10/10"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Won the Facebook Udacity Scholarship 2019",
                "Secured Top 20 rank in AI challenge of TechGIG contest 2019",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
