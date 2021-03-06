/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { flex, DEVICE, FONT, SCREEN, SPACING } from "../../styles/base";

export const Img = styled.img`
  display: none;

  @media ${DEVICE.minDesktop} {
    display: flex;
    max-width: 30%;
    width: 100%;
  }
`;

export const Section = styled(flex)`
  background-color: var(--cl-soft-blue);
  ${SPACING.gutter};
`;

export const Content = styled(flex)`
  align-content: center;
  justify-content: space-between;

  @media ${DEVICE.minDesktop} {
    ${SPACING.myAuto};
    flex-direction: row;
    width: ${SCREEN.maxWidth};
  }
`;

export const Wrapper = styled(flex)`
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
  }
`;

export const H2 = styled.h2`
  ${FONT.h2}
  font-size: 1.25rem;
  padding-top: 1.25rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.5rem;
  }
`;

export const P = styled.p`
  ${FONT.p};
  font-size: 0.9rem;
  padding-bottom: 1.25rem;
  padding-top: 0.5rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
    padding-bottom: 1.25rem;
    padding-top: 0.5rem;
  }
`;
