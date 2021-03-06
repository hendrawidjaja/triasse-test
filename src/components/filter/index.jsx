/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Content,
  ButtonCustom,
  Label,
  Option,
  Section,
  SectionOutput,
  SectionSelect,
  Select,
  SelectBox,
  Span,
  WrapperSelect
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

  const handleCancelTest = (e) => {
    const temp = Object.values(totalTest).filter((item) => item !== e.target.value);
    setTotalTest(temp);
    setSelectedTest();
  };

  const handleAddTest = (e) => {
    const value = e.target.value;
    console.log(
      "37",
      Object.values(totalTest).map((item) => item.includes(value))
    );

    if (value !== "Select one / more...") {
      setSelectedTest(value);
      setTotalTest((old) => [...old, value]);
    }
  };

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
      <Select name={label} ref={ref} onChange={(e) => handleAddTest(e)} value={selectedTest}>
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
      <Content className="conten">
        <SectionSelect className="wrapper-select">
          <SelectProvinsi label="Provinsi" ref={register} />
          <SelectKotaKabupaten label="Kota/Kabupaten" ref={register} />
          <SelectCustom label="Paket dan Jenis pemeriksaan" ref={register} />
        </SectionSelect>

        <SectionOutput className="section-output">
          {totalTest.length > 0 &&
            totalTest.map((item, index) => {
              return (
                <SelectBox className="output" key={index}>
                  <Span>{item}</Span>
                  <Button
                    className="btn-cancel"
                    value={item}
                    onClick={(e) => handleCancelTest(e)}>
                    X
                  </Button>
                </SelectBox>
              );
            })}
          {totalTest && totalTest.length > 2 && (
            <ButtonCustom
              btnDeleteAll
              onClick={() => {
                setSelectedTest();
                setTotalTest([]);
              }}>
              Hapus semua
            </ButtonCustom>
          )}
          {totalTest && totalTest.length > 1 && (
            <ButtonCustom btnFindLab>Cari Lab</ButtonCustom>
          )}
        </SectionOutput>
      </Content>
    </Section>
  );
};

export default Filter;
