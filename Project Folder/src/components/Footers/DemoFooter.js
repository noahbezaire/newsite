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

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function DemoFooter() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="6">
              <h1 className="title">NB• Noah Bezare</h1>
            </Col>
            <Col md="2" xs="6">
              <Nav>
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Learn More
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="2" xs="6">
              <Nav>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    About
                  </NavLink>
                </NavItem>
                  <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="2">
              <h3 className="title">Follow:</h3>
              <div className="btn-wrapper profile text-left">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/creativetim"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://dribbble.com/creativetim"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
