/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Section, Content, H3, Span, Wrapper, WrapperInput, Input, Button } from "./style";

const Newsletter = () => {
  const [placeholder, _] = useState("Masukan email anda");
  const [inputValue, setInputValue] = useState();

  return (
    <Section className="section-newsletter">
      <Content className="content">
        <H3>Berlangganan newsletter special promo dan penawaran terbaik</H3>

        <Wrapper className="wrapper">
          <Span>{inputValue && placeholder}</Span>

          <WrapperInput className="wrapper-input">
            <Input
              type="text"
              placeholder={placeholder}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button>Berlangganan</Button>
          </WrapperInput>
        </Wrapper>
      </Content>
    </Section>
  );
};

export default Newsletter;
