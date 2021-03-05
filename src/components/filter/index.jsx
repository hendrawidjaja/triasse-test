/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Label,
  Option,
  Section,
  Select,
  SectionSelect,
  SectionOutput,
  WrapperSelect,
} from "./style";
import LOKASI from "../../assets/json/lokasi.json";
import PAKET from "../../assets/json/paket.json";

const Filter = () => {
  const [selectedLocation, setSelectedLocationn] = useState();
  const [specificLocation, setSpecificLocation] = useState();
  const [totalTest, setTotalTest] = useState([]);
  const [selectedTest, setSelectedTest] = useState();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log("16", data);

  useEffect(() => {
    console.log("20", totalTest);
  }, [totalTest]);

  const SelectProvinsi = React.forwardRef(({ label }, ref) => (
    <WrapperSelect className="select-option">
      <Label>{label}</Label>
      <Select
        name={label}
        ref={ref}
        onChange={(e) => setSelectedLocationn(e.target.value)}
        value={selectedLocation}>
        {LOKASI.provinsi.map((item, index) => (
          <Option key={index} value={item.value}>
            {item.name}
          </Option>
        ))}
      </Select>
    </WrapperSelect>
  ));

  const SelectKotaKabupaten = React.forwardRef(({ label }, ref) => (
    <WrapperSelect className="select-option">
      <Label>{label}</Label>
      <Select
        name={label}
        ref={ref}
        onChange={(e) => setSpecificLocation(e.target.value)}
        value={specificLocation}>
        {LOKASI.kota.map((item, index) => {
          return (
            item.value === selectedLocation && (
              <Option key={index} value={item.name}>
                {item.name}
              </Option>
            )
          );
        })}
      </Select>
    </WrapperSelect>
  ));

  const SelectCustom = React.forwardRef(({ label }, ref) => (
    <WrapperSelect className="select-option">
      <Label>{label}</Label>
      <Select
        name={label}
        ref={ref}
        onChange={(e) => {
          const value = e.target.value;
          if (value !== "Select one...") {
            setSelectedTest(value);
            setTotalTest((old) => [...old, value]);
          }
        }}
        value={selectedTest}>
        {PAKET.test.map((item, index) => {
          return (
            selectedLocation &&
            specificLocation && (
              <Option key={index} value={item.name}>
                {item.name}
              </Option>
            )
          );
        })}
      </Select>
    </WrapperSelect>
  ));

  return (
    <Section className="section-filter">
      <SectionSelect>
        <SelectProvinsi label="Provinsi" ref={register} />
        <SelectKotaKabupaten label="Kota/Kabupaten" ref={register} />
        <SelectCustom label="Paket dan Jenis pemeriksaan" ref={register} />
      </SectionSelect>

      <SectionOutput>
        {totalTest.length > 0 &&
          totalTest.map((item, index) => {
            return <React.Fragment key={index}>{item}</React.Fragment>;
          })}
      </SectionOutput>
    </Section>
  );
};

export default Filter;
