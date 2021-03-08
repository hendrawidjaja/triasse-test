/* eslint-disable no-unused-vars */
import React from "react";
import {
  Content,
  Details,
  Icon,
  Img,
  P,
  Pricing,
  Section,
  Span,
  Tag,
  Li,
  WrapperIcon,
  WrapperTag
} from "./style";

const Cards = () => {
  return (
    <Section className="section-card">
      <Img src={require("../../assets/image/img-hospital-example.jpg").default} alt="" />
      <Content className="section-content">
        <WrapperTag className="wrapper-tag">
          <Tag green rounded>
            DATANG KE LAB
          </Tag>
          <Tag blue rounded>
            HOME SERVICE
          </Tag>
        </WrapperTag>
        <P>Parahita Buncit</P>
        <P>Jl. Warung Buncit Raya 150 Jakarta Selatan</P>

        <Details className="section-details">
          <WrapperIcon className="wrapper-icon">
            <Icon src={require("../../assets/image/img-star-yellow.svg").default} />
            <Span>4.8/5</Span>
          </WrapperIcon>
          <Li>Tidak bisa direschedule</Li>
          <Li>Tidak bisa refund</Li>
        </Details>
      </Content>

      <Pricing className="section-pricing">
        <Tag red>Hemat 20%</Tag>
        <Span normalprice>Rp. 370.500</Span>
        <Span price>Rp. 250.578</Span>
      </Pricing>
    </Section>
  );
};
export default Cards;
