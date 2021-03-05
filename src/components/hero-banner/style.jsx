/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { flex, DEVICE, FONT, SCREEN, SPACING } from "../../styles/base";

export const Img = styled.img`
  display: flex;
  max-width: 30%;
  width: 100%;
`;

export const Section = styled(flex)`
  background-color: rgba(238, 247, 255, 1);
`;

export const H2 = styled.h2`
  ${FONT.h2}
  padding-bottom: 0.5rem;
  padding-top: 1.25rem;

  @media ${DEVICE.minDesktop} {
    padding-bottom: 0.5rem;
    padding-top: 1.25rem;
  }
`;

export const P = styled.p`
  ${FONT.p};
  padding-bottom: 1.25rem;
  padding-top: 0.5rem;

  @media ${DEVICE.minDesktop} {
    padding-bottom: 1.25rem;
    padding-top: 0.5rem;
  }
`;

export const Content = styled(flex)`
  align-content: center;
  justify-content: space-between;
  ${SPACING.myAuto};

  @media ${DEVICE.minDesktop} {
    width: ${SCREEN.maxWidth};
  }
`;

export const Wrapper = styled(flex)`
  @media ${DEVICE.minDesktop} {
    flex-direction: column;
  }
`;
