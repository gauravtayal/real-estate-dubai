import React from "react";
import bg from "../../images/bg.jpg";
import AdvanceSearch from "../shared/AdvanceSearch";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <>
      <section
        className="relative -mt-[100px]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#002E51] opacity-70 absolute w-full h-full top-0 left-0 -z-1"></div>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="py-[200px] lg:py-[300px] text-center z-10 my-[10%] md:m-0">
            <div className="grid sm:grid-cols-1 md:grid-cols-5">
              <div className="col-span-1"></div>
              <div className="sm:col-span-1 md:col-span-3">
                <h1 className="font-semibold sm:text-[26px] md:text-[42px]  text-white mb-3">
                  Welcome to Real Estate website
                </h1>
                <p className="text-white text-base leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  expedita voluptas facilis nesciunt, labore fugit quo
                  inventore? Ad dignissimos laboriosam, sed harum repellendus
                  praesentium adipisci eligendi ut ipsam.
                </p>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
        <AdvanceSearch />
      </section>
    </>
  );
};

export default Banner;
