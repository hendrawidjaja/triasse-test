/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "../cards";
import FilterSearch from "../filter-search";
import { Content, Section, Wrapper, H4 } from "./style";

const Home = () => {
  return (
    <Section className="section-home">
      <H4>Filter hasil pencarian</H4>

      <Content className="section-content">
        <FilterSearch />
        <Wrapper>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Wrapper>
      </Content>
    </Section>
  );
};
export default Home;
