import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

type AboutOurBlogProps = {};

import img1 from "../../images/Properties/006.jpg";
import img2 from "../../images/Properties/008.jpg";
import img3 from "../../images/Properties/012.jpg";
import img4 from "../../images/Properties/030.jpg";
import img5 from "../../images/Properties/035.jpg";
import img6 from "../../images/Properties/036.jpg";
import img7 from "../../images/Properties/040.jpg";
import img8 from "../../images/Properties/045.jpg";
import { GrAttachment } from "react-icons/gr";
import {
  MdOutlineBathroom,
  MdOutlineBedroomParent,
  MdOutlineFavoriteBorder,
  MdOutlineSquareFoot,
  MdPersonPin,
} from "react-icons/md";
import Image from "next/image";
import { VscOpenPreview } from "react-icons/vsc";
import { RxPlusCircled } from "react-icons/rx";
import { AiFillCar } from "react-icons/ai";
import { BsTag } from "react-icons/bs";

const AboutOurBlog: React.FC<AboutOurBlogProps> = () => {
  const data = [
    {
      feature: "for Rent",
      id: 1,
      img: img1,
      title: "Skills That You Can Learn In The Real Estate Market",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...`,
      category: "Business",
      date: " March 9, 2016",
    },
    {
      feature: "for Rent",
      id: 2,
      img: img2,
      title: "Learn The Truth About Real Estate Industry",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...`,
      category: "Construction",
      date: " March 9, 2016",
    },
    {
      feature: "for Rent",
      id: 3,
      img: img3,
      title: "10 Quick Tips About Business Development",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...`,
      date: " March 9, 2016",
      category: " Real Estate",
    },
    {
      feature: "for Rent",
      id: 4,
      img: img4,
      title: "14 Common Misconceptions About Business Development",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec...`,
      date: " March 9, 2016",
      category: " Real Estate",
    },
  ];
  return (
    <SectionLayout
      title={"Read From Our Blog"}
      paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
      className={"pt-[80px] pb-[150px] "}
      classTitle={"pb-[20px] text-[35px] leading-[42px] text-black"}
      pClass={"text-[15px] leading-[25px] text-accent"}
    >
      <div className="mt-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {data.map((item) => (
            <div className="shadow-xl bg-white" key={item.id}>
              <div className="rounded-[.25rem] ">
                <div className="relative rounded-[.25rem] p-2">
                  <Image
                    className=" w-full h-full rounded-lg"
                    src={item.img}
                    alt={"slider img"}
                  />
                  <div className="bg-black opacity-20 p-2  rounded-lg  absolute w-full h-full bottom-0 left-0 -z-1"></div>
                </div>
                <div className="flex gap-4 p-4">
                  <p className="flex items-center gap-1 text-[12px] leading-[25px] text-neutral">
                    <span>
                      <FaRegCalendarAlt />
                    </span>
                    <span>{item.date}</span>
                  </p>
                  <p className="flex items-center gap-1 text-[12px] leading-[25px] text-neutral">
                    <span>
                      <BsTag />
                    </span>
                    <strong>
                      <span className="text-[#00aeff]">{item.category}</span>
                    </strong>
                  </p>
                </div>
                <div className="px-[20px] pb-[20px] border-b-[1px] border-[#dce0e0] text-left">
                  <h2 className="font-semibold text-[16px] text-secondary leading-[19px]">
                    {item.title}
                  </h2>
                  <p className="text-neutral text-[13px] leading-[25px] py-2">
                    {item.description}
                  </p>
                  <p className="cursor-pointer text-[13px] leading-[25px]  text-[#00aeff]">
                    <strong> Continue reading</strong>
                  </p>
                </div>
                <div className="text-neutral px-[24px] py-[15px] flex justify-between">
                  <p className="flex items-center justify-center gap-1 text-neutral text-[12px]">
                    <span>
                      <BsPerson />
                    </span>{" "}
                    <span>Hasan Rifat</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
export default AboutOurBlog;
