import Image from "next/image";
import React from "react";

import client1 from "../../images/Brands/partner-01-e1582734705113.jpg";
import client2 from "../../images/Brands/partner-02-e1582734691936.jpg";
import client3 from "../../images/Brands/partner-03-e1582734671602.jpg";
import client4 from "../../images/Brands/partner-04-e1582734649458.jpg";
import client5 from "../../images/Brands/partner-05-e1582734603812.jpg";

type ClientsProps = {};

const Clients: React.FC<ClientsProps> = () => {
  const data = [
    { id: 1, img: client1 },
    { id: 2, img: client2 },
    { id: 3, img: client3 },
    { id: 4, img: client4 },
    { id: 5, img: client5 },
  ];
  return (
    <section className="bg-white py-[15px] border-[1px] border-[#ECECEC]">
      <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="z-10 w-full">
          <div className="py-5">
            <h2 className="text-[35px] leading-[42px] text-black z-10 text-center w-full mb-[40px] font-semibold">
              Our Sponsors
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-[100px]">
          {data.map((item) => (
            <div key={item.id}>
              <Image
                className="w-[228px] h-[60px] mx-auto"
                src={item.img}
                alt="client image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Clients;
