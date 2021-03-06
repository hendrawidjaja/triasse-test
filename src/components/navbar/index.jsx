/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../atomic/buttons";
import MenuHamburger from "../../atomic/menuHamburger";
import {
  ButtonHamburger,
  Content,
  HamburgerMenuStrip,
  Img,
  Section,
  Wrapper,
  WrapperButton
} from "./style";

const Navbar = () => {
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

  const handleClick = (obj) => {
    console.log(obj);
  };

  const handleHamburgerMenu = () => {
    setToggleHamburgerMenu((prevState) => !prevState);
  };

  return (
    <Section className="section-navbar">
      <Content className="content">
        <Link to="/#">
          <Img src={require("../../assets/image/img-brand-logo@3x.png").default} />
        </Link>

        <ButtonHamburger className="btn-hamburger" onClick={handleHamburgerMenu}>
          <HamburgerMenuStrip
            className={`${toggleHamburgerMenu ? "open" : ""}`}></HamburgerMenuStrip>
          <HamburgerMenuStrip
            className={`${toggleHamburgerMenu ? "open" : ""}`}></HamburgerMenuStrip>
        </ButtonHamburger>

        <Wrapper className={`wrapper-menu${toggleHamburgerMenu ? " open" : ""}`}>
          <MenuHamburger
            props={toggleHamburgerMenu}
            menus={[
              {
                title: "Paket Test Darah",
                link: "/#",
                click: () => handleClick("Paket Test Darah")
              },
              {
                title: "Laboratorium",
                link: "/#",
                click: () => handleClick("Laboratorium")
              },
              {
                title: "Artikel",
                link: "/#",
                click: () => handleClick("Artikel")
              }
            ]}
          />

          <WrapperButton className={`wrapper-button${toggleHamburgerMenu ? " open" : ""}`}>
            <Button click={() => handleClick("SignIn")}>Masuk</Button>
            <Button click={() => handleClick("Register")}>Daftar</Button>
          </WrapperButton>
        </Wrapper>
      </Content>
    </Section>
  );
};

export default Navbar;
