/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE, FONT } from "../../styles/base";

export const StyledButton = styled.button`
  ${FONT.btn};
  background-color: ${COLOR.btnBgNavbar};
  color: ${COLOR.btnNavbar};
  min-width: 5rem;
  padding-bottom: 1rem;
  padding-top: 1rem;

  &:hover {
    background-color: ${COLOR.btnNavbar};
    color: #eeeeee;
    cursor: pointer;
  }

  @media ${DEVICE.minDesktop} {
    padding: 1rem 1.45rem;
  }
`;
