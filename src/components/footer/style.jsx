/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { DEVICE, SCREEN, SPACING, flex } from "../../styles/base";

export const UL = styled.ul``;
export const Wrapper = styled(flex)``;

export const Section = styled(flex)`
  background-color: rgb(13, 49, 95);
`;

export const Content = styled.div`
  display: grid;
  position: relative;
  ${SPACING.gutter};

  @media ${DEVICE.minDesktop} {
    ${SPACING.myAuto};
    grid-template-columns: 25% 17% 17% 22% 19%;
    padding-bottom: 3rem;
    padding-top: 3rem;
    width: ${SCREEN.maxWidthFooter};
  }
`;

export const Img = styled.img`
  max-width: 6rem;

  @media ${DEVICE.minDesktop} {
    height: 4rem;
    max-width: 6rem;
    padding-bottom: 0.5rem;
  }
`;

export const About = styled(flex)`
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const P = styled.p`
  color: rgb(193, 202, 214);
  padding-top: 1rem;
  line-height: 1.5;

  @media ${DEVICE.minDesktop} {
    font-size: 1.05rem;
    margin-top: 1.5rem;
    max-width: 80%;
    padding-top: 0;
  }
`;

export const H4 = styled.h4`
  color: rgb(193, 202, 214);
  font-weight: 600;
  height: 1.5rem;
  letter-spacing: 0.5px;

  @media ${DEVICE.minDesktop} {
    height: 3.5rem;
    font-size: 1.2rem;
  }
`;

export const Li = styled.li`
  color: rgb(193, 202, 214);

  &:first-of-type {
    padding-top: 1rem;
  }

  &:not(:first-of-type) {
    padding-top: 1rem;
  }

  @media ${DEVICE.minDesktop} {
    font-size: 1.1rem;

    &:first-of-type {
      padding-top: 1.5rem;
    }
  }
`;

export const Links = styled(flex)`
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Contacts = styled(flex)`
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Address = styled(flex)`
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const Socmed = styled(flex)`
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media ${DEVICE.minDesktop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const WrapperSocMed = styled(flex)`
  flex-wrap: wrap;
`;

export const Icon = styled.img`
  max-width: 2.5rem;
  min-width: 2.5rem;
  margin-top: 1rem;
  margin-right: 1rem;

  @media ${DEVICE.minDesktop} {
    margin-top: 1.5rem;
    max-width: 3.25rem;
    min-width: 3.25rem;
  }
`;
