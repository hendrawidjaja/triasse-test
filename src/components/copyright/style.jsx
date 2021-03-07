/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, flex } from "../../styles/base";

export const Section = styled(flex)`
  background-color: var(--bg-copyright);
  justify-content: center;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;

  @media ${DEVICE.minDesktop} {
    padding-bottom: 2.25rem;
    padding-top: 2.25rem;
  }
`;

export const P = styled.p`
  font-size: 0.7rem;
  color: #ffffff;

  @media ${DEVICE.minDesktop} {
    font-size: 0.9rem;
  }
`;
