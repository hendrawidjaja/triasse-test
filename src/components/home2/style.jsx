/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, SCREEN, SPACING, flex, grid } from "../../styles/base";

export const Section = styled(grid)`
  padding-bottom: 3rem;
  padding-top: 3rem;

  @media ${DEVICE.minDesktop} {
    ${SPACING.myAuto};
    gap: 2rem;
    grid-template-columns: 67.5% auto;
    padding-bottom: 5rem;
    padding-top: 5rem;
    width: ${SCREEN.maxWidth};
  }
`;

export const Content = styled(flex)`
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(128, 128, 128, 0.5);
  flex-direction: column;
  //padding: 1.5rem 1rem;
  margin-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
    //padding: 1.5rem 2rem;
  }
`;

export const H3 = styled.h3`
  @media ${DEVICE.minDesktop} {
    padding-top: 2rem;
  }
`;

export const H4 = styled.h4`
  @media ${DEVICE.minDesktop} {
    padding-top: 2rem;
  }
`;

export const P = styled.p`
  color: var(--cl-grey);
  line-height: 1.5;

  @media ${DEVICE.minDesktop} {
    padding-top: 1.5rem;
  }
`;

export const Img = styled.img``;

export const Wrapper = styled(flex)`
  flex-direction: column;
  padding: 1.5rem 1rem;

  @media ${DEVICE.minDesktop} {
    padding: 1.5rem 2rem;
  }
`;
