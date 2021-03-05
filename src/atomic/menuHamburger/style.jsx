/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLOR, DEVICE, FONT, flex } from "../../styles/base";

export const WrapperLink = styled(flex)`
  margin-top: 1rem;
  flex-direction: column;

  a {
    color: ${COLOR.link};
    margin-top: 1.25rem;
    padding: 0.5rem 0;
    ${FONT.a};

    &:hover {
      background: ${COLOR.link};
      color: #ffffff;
    }

    @media ${DEVICE.minDesktop} {
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
