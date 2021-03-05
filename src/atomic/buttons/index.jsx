/* eslint-disable no-unused-vars */
import React from "react";
import { StyledButton } from "./style";

const Button = ({ children, click }) => (
  <StyledButton onClick={click}>{children}</StyledButton>
);

export default Button;
