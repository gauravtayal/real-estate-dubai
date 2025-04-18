import Image from "next/image";
import React from "react";

import person1 from "../../images/person 1.jpg";
import person2 from "../../images/person2.jpg";
import person3 from "../../images/person3.jpg";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  const data = [
    { id: 1, name: "Roy Bennett", position: "Manager", img: person1 },
    { id: 2, name: "Kenya Soval", position: "Realtor", img: person2 },
    { id: 3, name: "Kathleen Peterson", position: "Manager", img: person3 },
  ];
  return (
    <section className="bg-white py-[100px]">
      <div className="max-w-[1140px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="text-gray-600 body-font">
          <div className=" ">
            <div className="pb-[40px] ">
              <h2 className="font-normal text-center text-[35px] leading-[42px] text-[#000]">
                Testimonials
              </h2>
              <p className="mt-3 text-center text-[16px] leading-[25px] text-accent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {/* single item start*/}
              {data.map((item) => (
                <div key={item.id} className="p-4  md:w-1/3 w-full ">
                  <div className="h-full px-14 py-10 rounded bg-[#edf9ff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="text-[15px] leading-[25px] text-black mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <a className="inline-flex items-center">
                      <Image
                        alt="testimonial"
                        src={item.img}
                        className="w-[70px] h-[70px] rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="text-[15px] leading-[25px] text-black">
                          by <strong> {item.name}</strong>
                        </span>
                        <span className="text-[15px] leading-[25px] text-black italic">
                          {item.position}, Company Inc.
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}

              {/* single item end*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
