/* eslint-disable no-unused-vars */
import React from "react";
import { Content, H2, Img, P, Section, Wrapper } from "./style";

const HeroBanner = () => {
  return (
    <Section className="section-hero-banner">
      <Content className="content">
        <Wrapper className="wrapper">
          <H2>Pilih jenis pemeriksaan</H2>
          <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </P>
        </Wrapper>
        <Img src={require("../../assets/image/img-doctor.svg").default} />
      </Content>
    </Section>
  );
};

export default HeroBanner;
