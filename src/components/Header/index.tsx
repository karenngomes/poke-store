import React from "react";
import { InlineIcon } from "@iconify/react";
import shoppingCart from "@iconify/icons-fa-solid/shopping-cart";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.scss";

function Header() {
  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand>
        <Link to="/">PokéStore</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link>
            <Link to="/cart">
              <InlineIcon icon={shoppingCart} /> Carrinho
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
