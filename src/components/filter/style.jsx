/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { flex, DEVICE, FONT, SCREEN, SPACING } from "../../styles/base";

export const SectionOutput = styled(flex)``;
export const SectionSelect = styled(flex)``;

export const WrapperSelect = styled(flex)`
  flex-direction: column;
  width: 100%;

  &:not(:first-child) {
    padding-left: 1.5rem;
  }
`;

export const Section = styled(flex)`
  flex-direction: column;
  ${SPACING.filter};
  ${SPACING.myAuto};

  @media ${DEVICE.minDesktop} {
    width: ${SCREEN.maxWidth};
  }
`;

export const Label = styled(flex)`
  font-size: 1rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;

export const Select = styled.select`
  background: url("../../assets/image/img-arrow-back-orange.svg") no-repeat
    0.4rem center;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-size: 1rem auto;
  border: 1px solid #888888;
  cursor: pointer;
  font-size: 1.25rem;
  height: 3em;
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
`;

export const Option = styled.option`
  font-size: 1.2rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;
