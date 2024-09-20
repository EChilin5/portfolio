import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HomeContent from "../HomeLayout/HomeContent";
import ErrorPage from "./ErrorPage";


function TopNavBar() {
  return (
    <div className="navbar">
      <Router>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Chilin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/#">Home</Nav.Link>
                <Nav.Link as={HashLink} smooth to="/#about">
                  About
                </Nav.Link>
                <Nav.Link as={HashLink} smooth to="/#project">
                  Project
                </Nav.Link>
                <Nav.Link as={HashLink} smooth to="/#contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default TopNavBar;
