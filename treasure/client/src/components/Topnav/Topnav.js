import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from "reactstrap";
import "./Topnav.css";

const Topnav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="topnav " color="light" light expand="md">
      <NavbarBrand href="/">
        Treasure
        {/* {props.user.email} */}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse className="nav" isOpen={isOpen} navbar>
        <Nav navbar>
          {/* mr-auto align right */}

          <NavItem>
            <NavLink href="https://github.com/AmberH31/Treasure-App">
              GitHub
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/cart">Cart</NavLink>
          </NavItem>

          {/* suppose to show username here */}
          <NavItem className="username">
            <NavLink href="">
              Account
              {props.username}
            </NavLink>
          </NavItem>

          <NavItem className="login">
            <NavLink href="/log-in">Log in</NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topnav;
