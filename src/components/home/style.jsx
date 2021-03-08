/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, SCREEN, SPACING, grid } from "../../styles/base";

export const Section = styled(grid)`
  ${SPACING.gutter};
  padding-bottom: 3rem;
  padding-top: 3rem;

  @media ${DEVICE.minDesktop} {
    ${SPACING.myAuto};
    padding-bottom: 5rem;
    padding-top: 5rem;
    width: ${SCREEN.maxWidth};
  }
`;

export const Wrapper = styled(grid)`
  grid-auto-flow: row;
  margin-top: 2rem;

  @media ${DEVICE.minDesktop} {
    margin-top: 0;
  }
`;

export const H4 = styled.h4`
  letter-spacing: 0.5px;
  padding-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;

export const Content = styled(grid)`
  @media ${DEVICE.minDesktop} {
    grid-template-columns: 25% auto;
    gap: 2.25rem;
  }
`;
