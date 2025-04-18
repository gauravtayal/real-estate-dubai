import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import React, { useState } from "react";
import tag1 from "../../images/tagImg/tag1.jpg";
import tag2 from "../../images/tagImg/tag2.jpg";
import tag3 from "../../images/tagImg/tag3.jpg";
import tag4 from "../../images/tagImg/tag4.jpg";
import tag5 from "../../images/tagImg/tag5.jpg";
import tag6 from "../../images/tagImg/tag6.jpg";
import bg from "../../images/bg-residential.jpg";

type ResidentialProps = {};

const Residential: React.FC<ResidentialProps> = () => {
  const tagDataImg = [
    { id: 1, img: tag1, total: "7", type: "Studio" },
    { id: 2, img: tag2, total: "12", type: "Single Family Home" },
    { id: 3, img: tag3, total: "22", type: "Apartment" },
    { id: 4, img: tag4, total: "10", type: "Villa" },
    { id: 5, img: tag5, total: "3", type: "Office" },
    { id: 6, img: tag6, total: "3", type: "Shop" },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "auto",
      }}
      className="py-[50px] sm:py-[150px] bg-white z-0"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="max-w-[900px] mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-7">
            <div className="p-[15px]">
              <div className="mb-[16px]">
                <h2 className="text-[#000] text-[28px] leading-[33px] mb-[10px]">
                  Residential
                </h2>
                <p className="text-[16px] leading-[27px] text-accent mb-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidi dunt
                </p>
                <div className="py-[15px]">
                  <span className="w-[30%] h-[1px] bg-[#000] inline-block"></span>
                </div>
              </div>
            </div>

            {tagDataImg.map((item) => (
              <div
                key={item.id}
                className={`p-[15px] relative rounded-md ${
                  item.id === 1 && "row-span-2 h-[276px] lg:h-full"
                } ${item.id === 1 ? " " : "h-[276px]"}`}
                style={{
                  backgroundImage: `url(${item.img.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="rounded-md bg-[#000000] opacity-[0.3] absolute w-full h-full top-0 left-0 "></div>
                <div className="mb-[16px] z-50 relative flex flex-col justify-between w-full h-full">
                  <div>
                    <p className="text-[12px] leading-[25px] text-white">
                      {item.total} Properties
                    </p>
                    <h2 className="text-[20px] leading-[25px] text-white">
                      {item.type}
                    </h2>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-white text-[12px] leading-[25px]">
                      MORE DETAILS
                    </p>
                    <p className="text-white">
                      <FiPlay className="text-[20px]" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-[15px] md:row-start-3 md:row-end-3 md:col-start-1 md:col-end-1">
              <div className="mb-[16px]">
                <h2 className="text-[#000] text-[28px] leading-[33px] mb-[10px]">
                  Commercial
                </h2>
                <p className="text-[16px] leading-[27px] text-accent mb-[10px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidi dunt
                </p>
                <div className="py-[15px]">
                  <span className="w-[30%] h-[1px] bg-[#000] inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Residential;
