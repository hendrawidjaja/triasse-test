/* eslint-disable no-unused-vars */
import React from "react";
import Splitline from "../../atomic/splitline";
import {
  Address,
  Button,
  H4,
  Img,
  Li,
  Location,
  P,
  Pricing,
  Section,
  Span,
  Tag,
  UL,
  WrapperPricing
} from "./style";

const CardPrice = () => {
  return (
    <Section className="section-card-price">
      <H4>Paket Skrining Diabetes Mellitus</H4>

      <Splitline />
      <Location className="">
        <Img src={require("../../assets/image/img-hospital-example.jpg").default} alt="" />

        <Address>
          <P>Parahita Buncit</P>
          <P>Jl. Warung Buncit Raya 150 Jakarta Selatan</P>
        </Address>
        <Span></Span>
      </Location>
      <Splitline />
      <UL className="wrapper-information">
        <Li>Tidak bisa direschedule</Li>
        <Li>Tidak bisa refund</Li>
      </UL>
      <Splitline />

      <Pricing className="section-pricing">
        <WrapperPricing>
          <Tag red>Hemat 20% </Tag>
          <Span normalprice>Rp. 370.500</Span>
        </WrapperPricing>

        <Span price>Rp. 250.578</Span>
      </Pricing>

      <Button>Pesan sekarang</Button>
    </Section>
  );
};

export default CardPrice;
