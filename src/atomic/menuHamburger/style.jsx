/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, flex } from "../../styles/base";

export const WrapperLink = styled(flex)`
  margin-top: 2.5rem;
  flex-direction: column;

  @media ${DEVICE.minDesktop} {
    margin-top: 0;
    flex-direction: row;
  }
`;
