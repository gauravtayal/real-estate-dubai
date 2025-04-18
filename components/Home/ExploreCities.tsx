import Image from "next/image";
import React from "react";
import { FiPlay } from "react-icons/fi";

import img1 from "../../images/Countries/chicago.jpg";
import img2 from "../../images/Countries/miami-beach.jpg";
import img3 from "../../images/Countries/los-angeles.jpg";
import img4 from "../../images/Countries/new-york.jpg";
import bg from "../../images/ExploreCities.jpg";
type ExploreCitiesProps = {};

const ExploreCities: React.FC<ExploreCitiesProps> = () => {
  const data = [
    { id: "1", total: "13", City: "Chicago", img: img1 },
    { id: "2", total: "20", City: "Miami", img: img2 },
    { id: "3", total: "10", City: "New York", img: img3 },
    { id: "4", total: "14", City: "Los Angeles", img: img4 },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "auto",
      }}
      className="py-[100px] bg-white"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-5 items-center gap-7">
            <div>
              <h2 className="text-[28px] leading-[37px] text-black">
                Explore Cities
              </h2>
              <p className="text-[16px] leading-[27px] text-accent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            {data.map((item) => (
              <div
                key={item.id}
                className={`p-[30px] relative rounded-md h-[276px] sm:h-[482px] `}
                style={{
                  backgroundImage: `url(${item.img.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="rounded-md bg-[#000000] opacity-[0.5] absolute w-full h-full top-0 left-0 "></div>
                <div className="mb-[16px] z-50 relative flex flex-col justify-between w-full h-full">
                  <div>
                    <p className="text-[12px] leading-[25px] text-white">
                      {item.total} Properties
                    </p>
                    <h2 className="text-[20px] leading-[25px] text-white">
                      {item.City}
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
        </div>
      </div>
    </section>
  );
};
export default ExploreCities;
