import Image from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";

type UnrestrictedProps = {};

const Unrestricted: React.FC<UnrestrictedProps> = () => {
  return (
    <SectionLayout
      title={"Your Vision Unrestricted"}
      classTitle={"pb-[20px] text-[35px] leading-[42px] text-black"}
      className={"py-[70px] bg-white"}
    >
      <div>
        <div className="flex flex-col sm:flex-row sm:gap-8">
          <div className="py-5 w-full">
            <p className="">
              Our membership is composed of residential and commercial brokers,
              salespeople, property managers, appraisers, counselors, and others
              engaged in the real estate industry. Members belong to one or more
              of approximately 1,200 local associations/boards and 54 state and
              territory associations of REALEST®.
            </p>
          </div>
          <div className="py-5 w-full">
            <p className="">
              The term REALTOR® is a registered collective membership mark that
              identifies a real estate professional who is a member of the
              National Association of REAL ESTATE® and subscribes to its strict
              Code of Ethics.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
export default Unrestricted;
