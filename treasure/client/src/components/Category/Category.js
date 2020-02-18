import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./Category.css";

const Category = props => {
  return (
    <div>
      <Nav className="category-title">
        <NavItem>
          <NavLink href="#">All</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Tops</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Pants</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Dresses</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Bags</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Jewelry</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Shoes</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default Category;
