import Image, { StaticImageData } from "next/image";
import React from "react";
import SectionLayout from "../shared/SectionLayout";

import person1 from "../../images/OurTeam/person1.jpg";
import person2 from "../../images/OurTeam/person2.jpg";
import person3 from "../../images/OurTeam/person3.jpg";
import person4 from "../../images/OurTeam/person4.jpg";

type MeetOurTeamProps = {};

const MeetOurTeam: React.FC<MeetOurTeamProps> = () => {
  type dataItem = {
    id: number;
    img: StaticImageData;
    name: string;
    details: string;
    title: string;
  }[];
  const data: dataItem = [
    {
      id: 1,
      img: person1,
      name: "Kathleen Grant",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
      title: "Funder",
    },
    {
      id: 2,
      img: person2,
      name: "Keith Bailey",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
      title: "CEO",
    },
    {
      id: 3,
      img: person3,
      name: "Danielle Murray",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
      title: "Manager",
    },
    {
      id: 4,
      img: person4,
      name: "Thomas Stevens",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu.",
      title: "Manager",
    },
  ];
  return (
    <SectionLayout
      title={"Meet Our Team"}
      className={"py-[50px] sm:py-[100px]"}
      classTitle={"text-[35px] leading-[42px] text-black"}
      paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
      pClass={"text-[16px] leading-[25px] text-accent"}
    >
      <div className="pt-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {data.map((item) => (
            <div
              className="p-4 shadow-xl  relative rounded-lg group overflow-hidden"
              style={{
                backgroundImage: `url(${item.img.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={item.id}
            >
              <div className="rounded-lg bg-[#000000] opacity-[0.4] absolute w-full h-full top-0 left-0 z-0"></div>
              <div className=" h-[388px] w-[260px] flex items-end ">
                <div className="w-full text-white z-30 text-center">
                  <h2>
                    <strong>{item.name}</strong>
                  </h2>
                  <p>{item.title}</p>
                </div>
                <div className="absolute left-0 top-0 p-8 transition duration-300 ease-in-out group-hover:translate-x-0 translate-x-full group-hover:opacity-90 opacity-0 bg-white w-full h-full rounded-md ">
                  <div className="flex items-center w-full h-full">
                    <div className="text-center">
                      <h2 className="text-black">
                        <strong>{item.name}</strong>
                      </h2>
                      <p className="text-black">{item.title}</p>
                      <p className="leading-relaxed text-black py-6">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
export default MeetOurTeam;
