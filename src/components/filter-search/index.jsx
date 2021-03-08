/* eslint-disable no-unused-vars */
import React from "react";
import Splitline from "../../atomic/splitline";
import { Checkbox, H4, Input, Label, P, Section, WrapperCheckbox, SplitLine } from "./style";

const FilterSearch = () => {
  return (
    <Section className="section-filter-search">
      <Checkbox className="section-checkbox">
        <P>Harga</P>
        <WrapperCheckbox>
          <Input type="checkbox" name="low" value="low" />
          <Label for="low" data-content="Terendah - tertinggi">
            Terendah - tertinggi
          </Label>
        </WrapperCheckbox>
        <WrapperCheckbox className="item-last">
          <Input type="checkbox" name="high" value="high" />
          <Label for="high" data-content="Tertinggi - terendah">
            Tertinggi - terendah
          </Label>
        </WrapperCheckbox>

        <Splitline />

        <P>Jenis layanan</P>
        <WrapperCheckbox>
          <Input type="checkbox" name="home" value="home" />
          <Label for="home" data-content="Home service">
            Home service
          </Label>
        </WrapperCheckbox>

        <WrapperCheckbox className="item-last">
          <Input type="checkbox" name="lab" value="lab" />
          <Label for="lab" data-content="Datang ke lab">
            Datang ke lab
          </Label>
        </WrapperCheckbox>
      </Checkbox>
    </Section>
  );
};
export default FilterSearch;
