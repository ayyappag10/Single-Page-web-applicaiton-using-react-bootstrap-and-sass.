import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const AppNavBar = () => {
  return (
    <Navbar id="app-nav-bar" collapseOnSelect expanded="true">
      <Navbar.Brand href="#home">
        <img
          className="brand-logo"
          src="assets/goodera-brand-logo.png"
          alt="logoimg"
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="navbar-left-aligned-items">
          <Nav.Link href="#CAMPAIGNS">CAMPAIGNS</Nav.Link>
          <Nav.Link href="#VOLUNTEER">VOLUNTEER</Nav.Link>
          <Nav.Link href="#DONTATE">DONATE</Nav.Link>
          <Nav.Link href="#STORIES">STORIES</Nav.Link>
        </Nav>
        <Nav id="navbar-right-aligned-items">
          <Nav.Link href="#ADMIN">ADMIN</Nav.Link>
          <div className="small-vertical-seperator"></div>
          <Nav.Link href="#UNKNOWN">
            <img src="assets/group-6.png" alt="unkown"></img>
          </Nav.Link>
          <div className="small-vertical-seperator"></div>
          <NavDropdown
            eventkey={1}
            title={
              <div className="pull-left">
                <img
                  className="navbar-user-thumbnail-image"
                  src="assets/oval-5.png"
                  alt="user pic"
                />
                <img
                  className="caret"
                  src="assets/down.png"
                  alt="dropdown-caret"
                ></img>
              </div>
            }
            id="basic-nav-dropdown"
          ></NavDropdown>
          <Nav.Link href="#ADDUSER">
            <div id="add-user">
              <img id="add-user-icon" src="assets/add-1.png" alt="img"></img>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavBar;
