/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, flex } from "../../styles/base";

export const HLine = styled(flex)`
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:after {
    display: block;
    background-color: var(--cl-light-grey);
    content: " ";
    height: 3px;
    width: 100%;
  }

  @media ${DEVICE.minDesktop} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
