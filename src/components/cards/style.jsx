/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import { DEVICE, grid, flex } from "../../styles/base";

export const Section = styled(grid)`
  grid-template-rows: auto;
  box-shadow: 0 1px 4px 0 rgba(128, 128, 128, 0.5);
  margin-bottom: 2.5rem;

  @media ${DEVICE.minDesktop} {
    grid-template-columns: 15% auto 28%;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const Icon = styled.img`
  margin-right: 0.5rem;
  max-height: 0.75rem;
  max-width: 0.75rem;

  @media ${DEVICE.minDesktop} {
    max-height: 1rem;
    max-width: 1rem;
  }
`;

export const Content = styled(grid)`
  padding: 1rem 1rem;
`;

export const Details = styled.ul`
  align-items: center;
  display: grid;
  list-style-type: disc;
  padding-top: 1rem;
  position: relative;
  grid-template-columns: 25% auto auto;

  @media ${DEVICE.minDesktop} {
  }
`;

export const Li = styled.li`
  color: var(--cl-grey);
  font-size: 0.8rem;

  @media ${DEVICE.minDesktop} {
    font-size: 1rem;
  }
`;

export const Pricing = styled(grid)`
  align-items: center;
  border-left: 1px solid var(--cl-light-grey);
  grid-template-columns: repeat(3, 33.333%);
  justify-items: center;
  padding: 1rem 1rem;

  @media ${DEVICE.minDesktop} {
    align-content: center;
    grid-template-columns: auto;
    grid-template-rows: 15% 25% 25%;
    padding: 1rem 2rem;
  }
`;

export const P = styled.p`
  &:first-of-type {
    color: var(--cl-dark-blue);
    font-weight: bold;
    margin-top: 1rem;
  }

  &:not(:first-of-type) {
    color: var(--cl-grey);
    margin-top: 0.5rem;
  }

  @media ${DEVICE.minDesktop} {
    font-size: 1.2rem;
  }
`;

export const WrapperIcon = styled(flex)`
  align-items: center;
`;

export const Span = styled.span`
  align-self: center;
  color: var(--cl-grey);
  font-size: 1rem;

  ${(props) =>
    props.normalprice &&
    css`
      text-decoration: line-through;

      @media ${DEVICE.minDesktop} {
        margin-top: 0.5rem;
        font-size: 1.6rem;
      }
    `};

  ${(props) =>
    props.price &&
    css`
      color: var(--cl-orange);
      font-size: 1.25rem;
      font-weight: bold;

      @media ${DEVICE.minDesktop} {
        font-size: 1.8rem;
        margin-top: 0.5rem;
      }
    `};
`;

export const WrapperTag = styled(flex)`
  align-items: center;
`;

export const Tag = styled.span`
  display: block;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 50px;
      max-width: 60%;
      padding: 0.25rem 0.75rem;
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
      text-align: center;

      @media ${DEVICE.minDesktop} {
        line-height: 2;
        max-width: 60%;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
      }
    `};

  @media ${DEVICE.minDesktop} {
    font-size: 0.8rem;
    height: 1.5rem;
  }
`;
