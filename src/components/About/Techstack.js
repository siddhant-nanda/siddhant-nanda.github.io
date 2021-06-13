import React from "react";
import { Col, Row } from "react-bootstrap";
import Icon  from '@iconify/react';
import aerospikeIcon from '@iconify-icons/logos/aerospike';
import kubernetesIcon from '@iconify-icons/logos/kubernetes';
import cppIcon from '@iconify-icons/logos/c-plusplus';
import pythonIcon from '@iconify-icons/logos/python';
import javaIcon from '@iconify-icons/logos/java';
import mongoIcon from '@iconify-icons/logos/mongodb';
import psqlIcon from '@iconify-icons/logos/postgresql';
import djangoIcon from '@iconify-icons/logos/django';
import gitIcon from '@iconify-icons/logos/github';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={cppIcon} width="100px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={javaIcon} width="100px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={pythonIcon} width="100px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={mongoIcon} width="100px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={psqlIcon} width="100px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={djangoIcon} width="120px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={gitIcon} width="120px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={aerospikeIcon} width="120px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <Icon icon={kubernetesIcon} width="120px" />
      </Col>
    </Row>
  );
}

export default Techstack;
