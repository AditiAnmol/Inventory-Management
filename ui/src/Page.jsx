import React from 'react';
import {
  Glyphicon, Grid, Nav, Navbar, NavItem, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Content from './Content.jsx';

const NavBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>My Company Inventory</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer exact to="/">
        <NavItem>Home</NavItem>
      </LinkContainer>
      <LinkContainer to="/products">
        <NavItem>Product List</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavItem>
        <OverlayTrigger
          delayShow={200}
          placement="left"
          overlay={<Tooltip id="create-issue">Create Issue</Tooltip>}
        >
          <Glyphicon glyph="plus" />
        </OverlayTrigger>
      </NavItem>
    </Nav>
  </Navbar>
);

function Footer() {
  return (
    <small>
      <p className="text-center">
        Copyright &copy; 2021
      </p>
    </small>
  );
}

const Page = () => (
  <div>
    <NavBar />
    <Grid><Content /></Grid>
    <Footer />
  </div>
);

export default Page;
