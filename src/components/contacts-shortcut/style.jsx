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
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  ${SPACING.myAuto};

  @media ${DEVICE.minDesktop} {
    justify-content: flex-end;
    width: ${SCREEN.maxWidth};
  }
`;

export const Img = styled.img`
  margin-right: 0.5rem;
  min-height: 1.1rem;
  min-width: 1.1rem;
`;

export const P = styled.p`
  ${COLOR.p};
  white-space: nowrap;
  ${FONT.p};
`;

export const Wrapper = styled(flex)`
  align-items: center;

  &:last-of-type {
    ${SPACING.myAuto};
  }

  @media ${DEVICE.minDesktop} {
    &:not(:first-of-type) {
      margin-left: 1.25rem;
    }

    &:last-of-type {
      margin-right: initial;
    }
  }
`;
