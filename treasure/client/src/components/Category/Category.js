import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./Category.css";

const Category = props => {
  return (
    <div>
      <Nav className="category-container category-title">
        <NavItem class="nav-item">
          <NavLink href="#">All</NavLink>
        </NavItem>
        <NavItem class="nav-item">
          <NavLink href="#">Tops</NavLink>
        </NavItem>
        <NavItem class="nav-item">
          <NavLink href="#">Pants</NavLink>
        </NavItem>
        <NavItem class="nav-item">
          <NavLink href="#">Dresses</NavLink>
        </NavItem>
        <NavItem class="nav-item">
          <NavLink href="#">Shoes</NavLink>
        </NavItem>
        <NavItem class="nav-item">
          <NavLink href="#">Bags</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default Category;
