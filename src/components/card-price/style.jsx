/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";
import { DEVICE, grid, flex } from "../../styles/base";

export const H4 = styled.h4``;
export const Address = styled(grid)``;

export const Img = styled.img`
  width: 100%;
`;

export const Li = styled.li`
  color: var(--cl-grey);
`;

export const Location = styled(grid)`
  grid-template-columns: 22.5% auto;
  gap: 1rem;
`;

export const P = styled.p`
  color: var(--cl-grey);
`;

export const Section = styled(flex)`
  box-shadow: 0 1px 4px 0 rgba(128, 128, 128, 0.5);
  border-radius: 5px;
  padding: 1.5rem 1rem;
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
    padding: 1.5rem 2rem;
    max-height: 57.5vh;
  }
`;

export const Span = styled.span`
  align-self: center;
  color: var(--cl-grey);
  font-size: 1rem;

  ${(props) =>
    props.normalprice &&
    css`
      text-decoration: line-through;
      justify-self: center;

      @media ${DEVICE.minDesktop} {
        justify-self: flex-start;
        font-size: 1rem;
      }
    `};

  ${(props) =>
    props.price &&
    css`
      color: var(--cl-orange);
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 1rem;
      text-align: center;

      @media ${DEVICE.minDesktop} {
        font-size: 1.8rem;
      }
    `};
`;

export const UL = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;

export const Pricing = styled(grid)``;

export const Tag = styled.span`
  display: block;
  background-color: var(--bg-light-red);
  color: var(--cl-light-red);
  font-weight: bold;
  text-align: center;

  @media ${DEVICE.minDesktop} {
    line-height: 2;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    justify-self: flex-end;
  }
`;

export const WrapperPricing = styled(grid)`
  grid-template-columns: 50% auto;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: var(--cl-orange);
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  @media ${DEVICE.minDesktop} {
  }
`;
