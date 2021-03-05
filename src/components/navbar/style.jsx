/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, FONT, SPACING, flex, SCREEN } from "../../styles/base";

export const Section = styled(flex)`
  ${SPACING.navbar};

  @media ${DEVICE.minDesktop} {
    box-shadow: 0 1px 4px 0 rgba(32, 32, 32, 0.2);
  }
`;

export const Content = styled(flex)`
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media ${DEVICE.minDesktop} {
    flex-direction: row;
    ${SPACING.myAuto};
    width: ${SCREEN.maxWidth};
  }
`;

export const Img = styled.img`
  max-width: 5rem;
  ${SPACING.myAuto};

  @media ${DEVICE.minDesktop} {
    max-width: 8rem;
  }
`;

export const Wrapper = styled(flex)`
  ${SPACING.gutter};
  flex-direction: column;
  left: -1000px;
  transition: 0.5s linear;
  width: 100%;

  &.open {
    background: #f0ffff;
    left: 0;
    transition: 0.4s ease-out;
  }

  @media ${DEVICE.minDesktop} {
    align-items: center;
    background: transparent;
    flex-direction: row;
    margin-left: auto;
    width: auto;
  }

  a {
    color: #29365f;
    margin-top: 0.5rem;
    ${FONT.a};

    @media ${DEVICE.minDesktop} {
      &:not(:first-of-type) {
        margin-left: 3rem;
      }

      &:last-of-type {
        margin-right: 1.5rem;
      }
    }
  }

  button {
    &:last-of-type {
      margin-top: 1.25rem;
    }

    @media ${DEVICE.minDesktop} {
      &:last-of-type {
        margin-top: 0;
        margin-left: 1.5rem;
      }
    }
  }
`;

export const ButtonHamburger = styled.div`
  display: flex;
  flex-direction: column;
  left: 0.8rem;
  position: absolute;
  top: 0.8rem;

  span {
    transition: 0.4s linear;

    &.open {
      &:first-of-type {
        transform: rotate(45deg) translateX(40%);
        transition: 0.4s linear;
      }

      &:last-of-type {
        transform: rotate(315deg) translateX(40%);
        transition: 0.4s linear;
      }
    }
  }

  @media ${DEVICE.minDesktop} {
    display: none;
  }
`;

export const HamburgerMenuStrip = styled.span`
  background: red;
  height: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
  width: 16px;
`;

export const WrapperButton = styled(flex)`
  flex-direction: column;
  margin-top: 2.5rem;
  max-width: 50%;

  @media ${DEVICE.minDesktop} {
    margin-top: 0;
    flex-direction: row;
  }
`;
