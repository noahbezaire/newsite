/*!

=========================================================
* BLK Design System PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function ScrollNavbar() {
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-scroll"));
    // initialise
    headroom.init();
  }, []);
  const scrollPage = (e, id) => {
    e.preventDefault();
    if (document.getElementById(id) !== null) {
      document.getElementById(id).scrollIntoView();
    }
  };
  return (
    <>
      <Navbar className="fixed-top bg-info" expand="lg" id="navbar-scroll">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/index" tag={Link} id="tooltip1995010466">
              <span>NB•</span> Noah Bezaire
            </NavbarBrand>
            <button className="navbar-toggler" id="navigation">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navigation">
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    NB• <span>Noah Bezaire</span>
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button className="navbar-toggler" id="navigation">
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  About
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem to="/index" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Sub Item 1
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Sub Item 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Experience
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <UncontrolledDropdown>
                    <DropdownItem to="/presentation" tag={Link}>
                      <i className="tim-icons icon-bullet-list-67" />
                        Full Time
                    </DropdownItem>
                  <DropdownToggle
                    caret
                    color="default"
                    className="dropdown-item"
                    tag="a"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-book-bookmark"
                    />
                    Co-Ops
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">

                      <DropdownItem to="/account-settings" tag={Link}>
                        <i className="tim-icons icon-lock-circle" />
                        Orbital Engineering
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        <i className="tim-icons icon-tablet-2" />
                        Kik Interactive
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        <i className="tim-icons icon-laptop" />
                        Avidbots
                      </DropdownItem>
                      <DropdownItem to="/reset-page" tag={Link}>
                        <i className="tim-icons icon-molecule-40" />
                        Symbility Intersect
                      </DropdownItem>
                      <DropdownItem to="/invoice-page" tag={Link}>
                        <i className="tim-icons icon-notes" />
                        Lifion by ADP
                      </DropdownItem>
                      <DropdownItem to="/invoice-page" tag={Link}>
                        <i className="tim-icons icon-notes" />
                        Microsoft
                      </DropdownItem>

                  </DropdownMenu>
                </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <Button
                  className="nav-link"
                  color="default"
                  href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=blkdspr-sections-navbar"
                  size="sm"
                  target="_blank"
                >
                  <p>Contact</p>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
