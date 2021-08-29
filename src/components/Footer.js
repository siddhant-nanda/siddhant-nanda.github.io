import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Siddhant Nanda</h3>
        </Col> */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Siddhant Nanda</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:siddhantnanda03@gmail.com"
                className="social-icons-pic"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/siddhant-nanda"
                className="social-icons-pic"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/siddhant_nanda"
                className="social-icons-pic"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/siddhant-nanda/"
                className="social-icons-pic"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/siddhant_nanda/"
                className="social-icons-pic"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
