import React from "react";
import { FiPlay } from "react-icons/fi";
import SectionLayout from "../shared/SectionLayout";

import tag1 from "../../images/tagImg/tag1.jpg";
import tag2 from "../../images/tagImg/tag2.jpg";
import tag3 from "../../images/tagImg/tag3.jpg";
import tag4 from "../../images/tagImg/tag4.jpg";
import tag5 from "../../images/tagImg/tag5.jpg";
import tag6 from "../../images/tagImg/tag6.jpg";

type AboutServicesProps = {};

const AboutServices: React.FC<AboutServicesProps> = () => {
  const tagDataImg = [
    { id: 1, img: tag1, total: "7", type: "Studio" },
    { id: 2, img: tag2, total: "12", type: "Single Family Home" },
    { id: 3, img: tag3, total: "22", type: "Apartment" },
    { id: 4, img: tag4, total: "10", type: "Villa" },
    { id: 5, img: tag5, total: "3", type: "Office" },
    { id: 6, img: tag6, total: "3", type: "Shop" },
  ];
  return (
    <SectionLayout
      title={"Services"}
      className={"py-[40px] sm:pt-[80px] sm:pb-[150px] bg-white"}
      classTitle={"pb-[20px] text-[35px] leading-[42px] text-black"}
      paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit "}
      pClass={"text-[15px] leading-[25px] text-accent"}
    >
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-7 mt-10">
        {tagDataImg.map((item) => (
          <div
            key={item.id}
            className={`p-[15px]  relative rounded-md ${
              item.id === 3 && "row-span-2 h-[276px] lg:h-full"
            } 

            ${item.id === 4 && "row-span-2 h-[276px] lg:h-full"}
            
          h-[276px]
            `}
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
      </div>
    </SectionLayout>
  );
};
export default AboutServices;
