import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, NavDropdown, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import './Navibar.css'

const Navibar = ({ name, ...props }: any) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggleMenu}
        />
        <div onClick={toggleShow} className='hamburgerButton'>
          <FontAwesomeIcon className="" icon={faBars} />
        </div>
        <Navbar.Brand className="siteTitle">
          Social .net
        </Navbar.Brand>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            className="me-auto"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Link className="navLink" to="/">Posts list</Link>
            <Link className="navLink" to="about_me">About me</Link>
            {/* <Link className="navLink" to="pricing"> My page </Link> */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navibar;
