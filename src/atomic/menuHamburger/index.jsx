/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { WrapperLink } from "./style";

const MenuHamburger = ({ props, menus }) => (
  <WrapperLink className={`${props ? "open" : ""}`}>
    {menus.map((item, index) => (
      <Link key={index} to={item.link} onClick={item.click}>
        {item.title}
      </Link>
    ))}
  </WrapperLink>
);

export default MenuHamburger;
