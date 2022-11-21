import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
// faSearch
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = ({ offset }) => {
  // console.log(offset);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nature Style</Navbar.Brand>
          <Navbar.Toggle style={{float:"right"}} aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="top-nav me-auto justify-content-center w-100">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Collection</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Cases</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          <Form className="d-flex search-b" style={{width:"7em"}}>
            <Button variant="outline-light">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
    // <div className="navbar">
    //   <p>Nature Styles</p>
    //   <ul>
    //     <li>Home</li>
    //     <li>Contact Us</li>
    //     <li>About Us</li>
    //   </ul>
    //   <div className="search-icon">
    //     <FontAwesomeIcon icon={faSearch}/>
    //   </div>
    // </div>
  );
};

export default MyNavbar;
