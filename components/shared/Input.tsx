import React, { useState } from "react";

type InputProps = {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  fn: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  className,
  fn,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={(e) => fn(e.target.value)}
      className={`px-[16px] py-2 border-[#dce0e0] border-[1px] rounded-[2px]  ${className} focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
    />
  );
};
export default Input;
