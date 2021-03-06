/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE, FONT, flex } from "../../styles/base";

export const WrapperLink = styled(flex)`
  margin-top: 1rem;
  flex-direction: column;
  transition: 0.5s all ease-in;

  &.open {
    transition: 0.5s all ease-in;
    a {
      display: flex;
    }
  }

  a {
    ${FONT.a};
    color: ${COLOR.link};
    display: none;
    margin-top: 1.25rem;
    padding: 0.5rem 0;

    &:hover {
      background: ${COLOR.link};
      color: #ffffff;
    }

    @media ${DEVICE.minDesktop} {
      display: flex;
      margin-top: 0;

      &:not(:first-of-type) {
        margin-left: 3rem;
      }
    }
  }

  @media ${DEVICE.minDesktop} {
    margin-top: 0;
    flex-direction: row;
  }
`;
