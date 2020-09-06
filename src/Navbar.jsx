import React from "react";
import {Nav,Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
   .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/teacher">Teacher</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/student">Student</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
);
export default NavigationBar;
