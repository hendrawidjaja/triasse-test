/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, FONT, SPACING, flex, SCREEN } from "../../styles/base";

export const Section = styled(flex)`
  ${SPACING.navbar};
  box-shadow: 0 1px 4px 0 rgba(32, 32, 32, 0.2);
`;

export const Content = styled(flex)`
  ${SPACING.myAuto};

  @media ${DEVICE.minDesktop} {
    width: ${SCREEN.maxWidth};
  }
`;

export const Img = styled.img`
  @media ${DEVICE.minDesktop} {
    max-width: 9rem;
  }
`;

export const Wrapper = styled(flex)`
  align-items: center;
  margin-left: auto;

  a {
    color: #29365f;
    ${FONT.a};

    &:not(:first-of-type) {
      margin-left: 3rem;
    }

    &:last-of-type {
      margin-right: 1.5rem;
    }
  }

  button {
    &:last-of-type {
      margin-left: 1.5rem;
    }
  }
`;
