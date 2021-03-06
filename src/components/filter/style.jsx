/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import { flex, DEVICE, SCREEN, SPACING } from "../../styles/base";

export const Section = styled(flex)`
  flex-direction: column;
  &:after {
    display: flex;
    height: 3px;
    width: 100%;
    content: " ";
    background-color: rgb(101, 133, 210);
  }
`;

export const Content = styled(flex)`
  ${SPACING.gutter};
  flex-direction: column;
  ${SPACING.filter};

  @media ${DEVICE.minDesktop} {
    ${SPACING.myAuto};
    width: ${SCREEN.maxWidth};
  }
`;

export const Label = styled(flex)`
  font-size: 1rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;

export const Option = styled.option`
  font-size: 0.9rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;

export const SectionSelect = styled(flex)`
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
    flex-direction: row;
  }
`;

export const WrapperSelect = styled(flex)`
  flex-direction: column;
  width: 100%;

  &:not(:first-child) {
    margin-top: 1.5rem;
  }

  @media ${DEVICE.minDesktop} {
    &:not(:first-child) {
      margin-top: 0;
      padding-left: 1.5rem;
    }
  }
`;

export const Select = styled.select`
  background: url("../../assets/image/img-arrow-back-orange.svg") no-repeat 0.4rem center;
  appearance: none;
  background-size: 1rem auto;
  border: 1px solid #888888;
  cursor: pointer;
  font-size: 0.9rem;
  height: 1.75rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 0.5rem;
  }

  @media ${DEVICE.minDesktop} {
    height: 3em;
    font-size: 1.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const SectionOutput = styled(flex)`
  flex-wrap: wrap;
  font-size: 0.85rem;
  margin-top: 1rem;

  @media ${DEVICE.minDesktop} {
    flex-direction: row;
    font-size: 1.25rem;
  }
`;

export const SelectBox = styled(flex)`
  align-items: center;
  background-color: var(--cl-soft-green);
  font-size: 0.9rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.5rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
    margin-right: 0.8rem;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
  }
`;

export const Span = styled.span`
  font-size: 0.9rem;
  user-select: none;

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  background-color: var(--bg-btn-cancel);
  color: #ffffff;
  font-size: 0.75rem;
  margin-left: 0.5rem;

  @media ${DEVICE.minDesktop} {
    padding: 0.1rem 0.15rem 0;
    font-size: 1rem;
  }
`;

export const ButtonCustom = styled.button`
  ${(props) =>
    props.btnDeleteAll &&
    css`
      background-color: var(--bg-btn-cancel-all);
      color: var(--cl-btn-cance-all);
    `};

  ${(props) =>
    props.btnFindLab &&
    css`
      background-color: var(--bg-btn-find-lab);
      color: #ffffff;
      margin-left: auto;
    `};

  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1.25rem;
    margin-top: 0.75rem;
    min-width: 10rem;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
  }
`;

export const HorizontalLine = styled.div`
  background-color: rgb(101, 133, 210);
`;
