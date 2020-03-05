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
import { Badge } from "reactstrap";

import { useHistory } from "react-router-dom";
import "./Topnav.css";

const Topnav = ({ user, logoutUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="topnav " light expand="md">
      <NavbarBrand href="/">
        iCamera
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
            <NavLink href="/cart" className="cart">
              Cart
            </NavLink>
            <Badge href="#" color="danger">
              1{/* {this.props.number} */}
            </Badge>
          </NavItem>

          {/* suppose to show username here */}
          <NavItem className="username">
            <NavLink href="">
              Account
              {user && user.userName}
            </NavLink>
          </NavItem>

          {/* <NavItem className="login">
            <NavLink href="/logout">Log out</NavLink>
          </NavItem> */}
          <button
            onClick={async () => {
              await logoutUser(user);
              history.push("/");
            }}
          >
            Logout
          </button>
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
