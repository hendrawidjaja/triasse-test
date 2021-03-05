/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atomic/buttons";
import { Content, Section, Img, Wrapper } from "./style";

const Navbar = () => {
  const handleClick = (obj) => {
    console.log(obj);
  };

  return (
    <Section className="navbar">
      <Content>
        <Link to="/#">
          <Img
            src={require("../../assets/image/img-brand-logo@3x.png").default}
          />
        </Link>

        <Wrapper>
          <Link onClick={() => handleClick("Paket Test Darah")} to="/#">
            Paket Test Darah
          </Link>
          <Link onClick={() => handleClick("Laboratorium")} to="/#">
            Laboratorium
          </Link>
          <Link onClick={() => handleClick("Artikel")} to="/#">
            Artikel
          </Link>

          <Button click={() => handleClick("SignIn")}>Masuk</Button>
          <Button click={() => handleClick("Register")}>Daftar</Button>
        </Wrapper>
      </Content>
    </Section>
  );
};

export default Navbar;
