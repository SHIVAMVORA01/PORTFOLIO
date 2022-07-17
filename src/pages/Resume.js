import React from "react";
import "../css/Resume.css";
import {
  Nav,
  Navbar,
  Container
} from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto py-4">
              <Nav.Link
                className="my-3 my-md-0"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  padding: "0px 25px",
                }}
                href="/"
              >
                Works
              </Nav.Link>
              <Nav.Link
                className="my-3 my-md-0"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  padding: "0px 25px",
                }}
                href="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="my-3 my-md-0"
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  padding: "0px 25px",
                }}
                href="/resume"
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="pdfDiv">
     
        <iframe
          title="resume of shivam"
          name="Resume"
          src="/pdf/resume.pdf#toolbar=0"
          height="1000px"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
