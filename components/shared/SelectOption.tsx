import React from "react";

type SelectOptionProps = {
  selectData: {
    id: number;
    value: string;
  }[];
  fn: any;
  className?: string;
};

const SelectOption: React.FC<SelectOptionProps> = ({
  selectData,
  className,
  fn,
}) => {
  return (
    <select
      onChange={(e) => fn(e.target.value)}
      className={`px-[16px] py-[14px] border-[#dce0e0] border-[1px] rounded-[2px] mb-2 ${className} focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
    >
      {selectData.map((item) => (
        <option
          className={`p-5 h-[60px] block border-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none border-[#dce0e0]  active:outline-none rounded-[2px] mb-2 ${className}`}
          key={item.id}
          value={item.value}
        >
          {item.value}
        </option>
      ))}
    </select>
  );
};
export default SelectOption;
