/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, SPACING, flex, SCREEN } from "../../styles/base";

export const Section = styled(flex)`
  padding-top: 1rem;

  @media ${DEVICE.minDesktop} {
    box-shadow: 0 1px 4px 0 rgba(32, 32, 32, 0.2);
    padding-bottom: 1rem;
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
  transition: 0.8s all ease-in;
  width: 100%;

  &.open {
    margin-top: 1rem;
    background: #f0ffff;
    transition: 0.8s all ease-out;
  }

  @media ${DEVICE.minDesktop} {
    align-items: center;
    background: transparent;
    flex-direction: row;
    left: unset;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
    width: auto;
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
  left: 1rem;
  position: absolute;
  top: 1rem;

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
  display: none;
  flex-direction: column;
  max-width: 50%;
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;

  &.open {
    display: flex;
  }

  @media ${DEVICE.minDesktop} {
    display: flex;
    padding-bottom: 0;
    padding-top: 0;
    margin-left: 3rem;
    flex-direction: row;
  }
`;
