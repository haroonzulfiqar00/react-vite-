import React from "react";
import Select from "react-select";

const CustomSelect = ({
  options,
  selectedOption,
  handleSelectChange,
  value,
}) => {
  // Custom styles for the select component
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };
  console.log("options.....", options);
  // Custom option component
  const customOption = ({ innerRef, innerProps, data }) => (
    <div
      ref={innerRef}
      {...innerProps}
      style={{ display: "flex", padding: "8px 0", alignItems: "center" }}
    >
      <img
        src={data.img}
        alt={data.label}
        style={{ width: "25px", height: "25px", marginRight: "8px" }}
      />
      <p style={{ color: "black", margin: "0" , fontSize:"16px !important"}}>{data.label}</p>
    </div>
  );

  // Custom single value component
  const customSingleValue = ({ data }) => (
    <div style={{ display: "flex", padding: "8px 0", alignItems: "center" }}>
      <img
        src={data.img}
        alt={data.label}
        style={{ width: "25px", height: "25px", marginRight: "8px" }}
      />
      <p style={{ color: "black", margin: "0", fontSize:"16px" }}>{data.label}</p>
    </div>
  );
  console.log("selctedddd option", selectedOption);
  return (
    <Select
      value={value}
      isSearchable={false}
      onChange={handleSelectChange}
      options={options}
      styles={customStyles}
      components={{ Option: customOption, SingleValue: customSingleValue }}
    />
  );
};

export default CustomSelect;
