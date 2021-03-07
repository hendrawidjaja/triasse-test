/* eslint-disable no-unused-vars */
import React from "react";
import { Section, P } from "./style";

const Copyright = () => {
  const date = new Date();

  return (
    <Section className="section-copyright">
      <P>
        Copyright &copy; {date.getFullYear()} PT. Digital Medika Informatik. All rights
        reserved.{" "}
      </P>
    </Section>
  );
};

export default Copyright;
