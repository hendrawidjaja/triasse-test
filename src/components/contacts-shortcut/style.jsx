/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE, FONT, SPACING, flex, SCREEN } from "../../styles/base";

export const Section = styled.div`
  ${SPACING.contactShortcut};
  ${SPACING.gutter};
  ${COLOR.contactShortcutBg};
  box-shadow: 0 1px 4px 0 rgba(32, 32, 32, 0.2);
`;

export const Content = styled(flex)`
  align-items: flex-end;
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
    flex-direction: row;
    justify-content: flex-end;
    width: ${SCREEN.maxWidth};
    ${SPACING.myAuto};
  }
`;

export const Img = styled.img`
  display: none;

  @media ${DEVICE.minDesktop} {
    display: flex;
    margin-right: 0.5rem;
    min-height: 1.1rem;
    min-width: 1.1rem;
  }
`;

export const P = styled.p`
  ${COLOR.p};
  white-space: nowrap;
  ${FONT.p};
  font-size: 0.75rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1rem;
  }
`;

export const Wrapper = styled(flex)`
  align-items: center;

  &:not(:first-of-type) {
    margin-top: 0.25rem;
  }

  @media ${DEVICE.minDesktop} {
    &:not(:first-of-type) {
      margin-top: 0;
      margin-left: 1.5rem;
    }

    &:last-of-type {
      margin-right: initial;
    }
  }
`;
