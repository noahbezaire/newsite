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

export default function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  const changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <span>NB • </span>Noah Bezaire
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
                    Components
                  </DropdownItem>
                  <DropdownItem to="/presentation" tag={Link}>
                    <i className="tim-icons icon-bullet-list-67" />
                    Presentation Page
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                    target="_blank"
                  >
                    <i className="tim-icons icon-book-bookmark" />
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Education
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem to="/index" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Components
                  </DropdownItem>
                  <DropdownItem to="/presentation" tag={Link}>
                    <i className="tim-icons icon-bullet-list-67" />
                    Presentation Page
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                    target="_blank"
                  >
                    <i className="tim-icons icon-book-bookmark" />
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Experience
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem to="/index" tag={Link}>
                    <i className="tim-icons icon-paper" />
                    Components
                  </DropdownItem>
                  <DropdownItem to="/presentation" tag={Link}>
                    <i className="tim-icons icon-bullet-list-67" />
                    Presentation Page
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                    target="_blank"
                  >
                    <i className="tim-icons icon-book-bookmark" />
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}
