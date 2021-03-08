/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { flex, DEVICE, SCREEN, SPACING } from "../../styles/base";

const radius = {
  size: `2px`,
  sizeDesktop: `4px`
};

export const Button = styled.button`
  background-color: var(--cl-orange);
  border-bottom-right-radius: ${radius.size};
  border-top-right-radius: ${radius.size};
  color: #ffffff;
  font-size: 0.9rem;
  padding: 0.5rem 1rem 0.5rem;

  @media ${DEVICE.minDesktop} {
    border-bottom-right-radius: ${radius.sizeDesktop};
    border-top-right-radius: ${radius.sizeDesktop};
    font-size: 1.2rem;
    padding: 1rem 1.25rem 1rem;
  }
`;

export const Content = styled(flex)`
  ${SPACING.gutter};
  flex-direction: column;
  padding-bottom: 2rem;
  padding-top: 2rem;

  @media ${DEVICE.minDesktop} {
    ${SPACING.myAuto};
    align-items: center;
    flex-direction: row;
    padding-bottom: 4rem;
    padding-top: 4rem;
    width: ${SCREEN.maxWidth};
  }
`;

export const H3 = styled.h3`
  color: #ffffff;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  line-height: 1.4;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  font-size: 0.9rem;
  border-top-left-radius: ${radius.size};
  border-bottom-left-radius: ${radius.size};
  padding: 0.5rem 0.5rem 0.5rem;

  @media ${DEVICE.minDesktop} {
    border-bottom-left-radius: ${radius.sizeDesktop};
    border-top-left-radius: ${radius.sizeDesktop};
    font-size: 1.2rem;
    min-width: 18rem;
    padding: 1rem 0.75rem 1rem;
  }
`;

export const Section = styled(flex)`
  background-color: var(--bg-newsletter);
`;

export const Wrapper = styled(flex)`
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1rem;

  @media ${DEVICE.minDesktop} {
    align-items: center;
    margin-left: auto;
    margin-top: 0;
  }
`;

export const WrapperInput = styled(flex)`
  flex-direction: row;
  margin-top: 1.5rem;

  @media ${DEVICE.minDesktop} {
    margin-top: 0;
  }
`;

export const Span = styled.span`
  color: #ffffff;
  font-size: 0.9rem;
  left: 0;
  position: absolute;
  top: 10%;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
    top: -50%;
  }
`;
