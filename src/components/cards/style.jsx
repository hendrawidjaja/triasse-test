/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import { DEVICE, SCREEN, SPACING, grid, flex } from "../../styles/base";

export const Section = styled(grid)`
  grid-template-columns: 15% auto 27.5%;
  box-shadow: 0 1px 4px 0 rgba(128, 128, 128, 0.5);

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const Icon = styled.img`
  margin-right: 0.5rem;
  max-height: 1.5rem;
  max-width: 1.5rem;
`;

export const Content = styled(grid)`
  padding: 1rem 1rem;
`;

export const Details = styled.ul`
  align-items: center;
  display: grid;
  grid-template-columns: 25% auto auto;
  list-style-type: disc;
  padding-top: 1rem;
  position: relative;
`;

export const Li = styled.li`
  color: var(--cl-grey);
`;

export const Pricing = styled(grid)`
  align-items: center;
  align-content: center;
  border-left: 1px solid var(--cl-light-grey);
  padding: 1rem 2rem;
  grid-template-rows: 15% 25% 25%;

  @media ${DEVICE.minDesktop} {
  }
`;

export const P = styled.p`
  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;

    &:first-of-type {
      font-weight: bold;
      padding-top: 1rem;
    }

    &:not(:first-of-type) {
      padding-top: 0.5rem;
      color: var(--cl-grey);
    }
  }
`;

export const WrapperIcon = styled(flex)`
  align-items: center;
`;

export const Span = styled.span`
  align-self: center;

  ${(props) =>
    props.normalprice &&
    css`
      text-decoration: line-through;
      color: var(--cl-grey);
    `};

  ${(props) =>
    props.price &&
    css`
      color: var(--cl-orange);

      @media ${DEVICE.minDesktop} {
        font-size: 2rem;
        font-weight: bold;
      }
    `};
`;

export const WrapperTag = styled(flex)`
  align-items: center;
`;

export const Tag = styled.span`
  height: 1.5rem;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 50px;
      padding: 0.25rem 0.75rem;
      max-width: 60%;
    `};

  ${(props) =>
    props.green &&
    css`
      background-color: var(--cl-green);
      color: #ffffff;
    `};

  ${(props) =>
    props.blue &&
    css`
      background-color: var(--cl-blue);
      color: #ffffff;
    `};

  ${(props) =>
    props.red &&
    css`
      background-color: var(--bg-light-red);
      color: var(--cl-light-red);
      font-weight: bold;
      line-height: 2;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      max-width: 45%;
      text-align: center;
    `};

  @media ${DEVICE.minDesktop} {
    font-size: 0.8rem;
  }
`;
