import React from "react";

const InputField = ({ name, placeholder, onChange, value }) => {
  return (
    <input
      className="w-full border border-black py-[7px] px-10 rounded-sm"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
