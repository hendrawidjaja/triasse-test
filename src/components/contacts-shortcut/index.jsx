/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Content, Section, Img, Wrapper, P } from "./style";

const ContactShortcut = () => {
  return (
    <Section className="section-contact-shortcut">
      <Content className="content">
        <Wrapper className="wrapper">
          <Img src={require("../../assets/image/img-calendar.svg").default} />
          <P>Senin - Jumat (09.00 - 18.00)</P>
        </Wrapper>
        <Wrapper className="wrapper">
          <Img src={require("../../assets/image/img-message.svg").default} />
          <P>+62811 1122 015</P>
        </Wrapper>
        <Wrapper className="wrapper">
          <Img src={require("../../assets/image/img-email.svg").default} />
          <P as="a" href="mailto:cs@trisasse.com">
            cs@triasse.com
          </P>
        </Wrapper>
      </Content>
    </Section>
  );
};

export default ContactShortcut;
