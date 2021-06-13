import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#206e38",
    grade3: "#2fa14e",
    grade2: "#41c462",
    grade1: "#9be9a8",
    grade0: "#b8caf3",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "70px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      My Code <strong className="blue">Footprint</strong>
      </h1>
      <GitHubCalendar
        username="siddhant-nanda"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
