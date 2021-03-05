/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const flex = styled.div`
  display: flex;
  position: relative;
`;

export const COLOR = {
  contactShortcutBg: `background-color: rgba(234, 234, 234, 1)`,
  p: `color: rgba(128, 128, 128, 1)`,
  btnNavbar: `rgba(79, 115, 219, 1)`,
  btnBgNavbar: `rgba(235,244,255, 0.8)`,
};

export const DEVICE = {
  minFold: `(min-width: 280px)`,
  minMobileS: `(min-width: 320px)`,
  minMobileL: `(min-width: 425px)`,
  minTablet: `(min-width: 768px)`,
  minDesktop: `(min-width: 960px)`,
  minDesktopM: `(min-width: 1920px)`,
};

export const SCREEN = {
  maxWidth: `1180px`,
};

export const SPACING = {
  Gutter: `
    padding-left: 0.6rem;
    padding-right: 0.6rem;

    @media ${DEVICE.minDesktop} {
      padding-left: 0.6rem;
      padding-right: 0.6rem;
    }
  `,

  myAuto: `
    margin-left: auto;
    margin-right: auto;
  `,

  contactShortcut: `
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;

    @media ${DEVICE.minDesktop} {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  `,

  navbar: `
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media ${DEVICE.minDesktop} {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  `,

  heroBanner: `
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media ${DEVICE.minDesktop} {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  `,

  filter: `
    padding-top: 1.5rem;
    padding-bottom: 1.75rem;

    @media ${DEVICE.minDesktop} {
      padding-top: 1.75rem;
      padding-bottom: 2rem;
    }
  `,
};

export const FONT = {
  btn: `
    font-size: 0.9rem;
    font-weight: bold;

    @media ${DEVICE.minDesktop} {
      font-size: 1.1rem;
    }
  `,

  a: `
    font-weight: 500;

    @media ${DEVICE.minDesktop} {
    }
  `,

  p: `
    font-weight: 500;

    @media ${DEVICE.minDesktop} {
    }
  `,

  h2: `
    font-weight: 600;

    @media ${DEVICE.minDesktop} {
    }
  `,
};
