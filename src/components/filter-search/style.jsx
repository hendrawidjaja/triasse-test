/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, SCREEN, SPACING, flex } from "../../styles/base";

export const P = styled.p`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  font-weight: 600;

  @media ${DEVICE.minDesktop} {
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Section = styled(flex)`
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
  }
`;

export const Checkbox = styled(flex)`
  box-shadow: 0 1px 4px 0 rgba(128, 128, 128, 0.5);
  flex-direction: column;
  border-radius: 8px;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const WrapperCheckbox = styled(flex)`
  align-items: center;
  padding-left: 1.5rem;
  &.item-last {
  }

  @media ${DEVICE.minDesktop} {
    &.item-last {
      padding-top: 1rem;
    }
  }
`;

export const Label = styled.label`
  padding-left: 1rem;
  color: rgba(64, 64, 64, 1);

  @media ${DEVICE.minDesktop} {
    font-size: 1.1rem;
  }
`;

export const Input = styled.input`
  color: var(--cl-light-grey);
  height: 1.5em;
  width: 1.5em;
  margin: 0;

  @media ${DEVICE.minDesktop} {
    border-width: 3px;
    height: 2.25em;
    width: 2.25em;
  }
`;

export const SplitLine = styled(flex)`
  &:after {
    height: 2px;
    width: 100%;
    background-color: var(--bg-light-grey);
    content: " ";
  }

  @media ${DEVICE.minDesktop} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
