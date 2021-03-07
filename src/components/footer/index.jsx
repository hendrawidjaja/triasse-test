/* eslint-disable no-unused-vars */
import React from "react";
import {
  About,
  Address,
  Contacts,
  Content,
  H4,
  Icon,
  Img,
  Li,
  Links,
  P,
  Section,
  Socmed,
  UL,
  Wrapper,
  WrapperSocMed
} from "./style";

const Footer = () => {
  return (
    <Section className="section-footer">
      <Content className="content">
        <About className="section-about">
          <Img src={require("../../assets/image/img-brand-logo-white@3x.png").default} alt="" />
          <P>
            Platform pertama untuk tes laboratorium dan pemeriksaan kesehatan di Indonesia yang
            memberikan pelanggan kemampuan untuk membuat keputusan yang lebih baik bagi
            kesehatan mereka.
          </P>
        </About>
        <Links className="section-links">
          <H4>Lainnya</H4>
          <UL>
            <Li>Syarat &amp; Ketentuan</Li>
            <Li>Karier</Li>
            <Li>Kebijakan Privasi</Li>
            <Li>Cara Kerja</Li>
            <Li>Login</Li>
          </UL>
        </Links>
        <Wrapper>
          <Contacts className="section-contacts">
            <H4>Hubungi kami</H4>
            <UL>
              <Li>cs@triasse.com</Li>
              <Li>021-35760496</Li>
              <Li>08-1111-22-015</Li>
              <Li>Senin - Jumat</Li>
              <Li>(09.00 - 18.00 WIB)</Li>
            </UL>
          </Contacts>
        </Wrapper>
        <Address className="section-address">
          <H4>Alamat</H4>
          <P className="address">
            Gedung Perkantoran Madison Park, Lantai 6 Unit B. No. 02. Jl. Letjen S. Parman Kav
            28, Jakarta 11470
          </P>
        </Address>

        <Socmed className="section-sosmed">
          <H4>Social media</H4>
          <WrapperSocMed>
            <Icon src={require("../../assets/image/img-icon-facebook.svg").default} alt="" />
            <Icon src={require("../../assets/image/img-icon-instagram.svg").default} alt="" />
            <Icon src={require("../../assets/image/img-icon-linkedin.svg").default} alt="" />
            <Icon src={require("../../assets/image/img-icon-pinteres.svg").default} alt="" />
            <Icon src={require("../../assets/image/img-icon-twitter.svg").default} alt="" />
            <Icon src={require("../../assets/image/img-icon-youtube.svg").default} alt="" />
          </WrapperSocMed>
        </Socmed>
      </Content>
    </Section>
  );
};

export default Footer;
