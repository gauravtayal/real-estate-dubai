import React from "react";

type LabelProps = {
  className?: string;
  label: string;
};

const Label: React.FC<LabelProps> = ({ className, label }) => {
  return (
    <label
      className={`${className} mt-1 block w-full font-bold text-[15px] leading-[25px] text-black`}
      htmlFor="inquiry type"
    >
      {label}
    </label>
  );
};
export default Label;
