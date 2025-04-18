import Link from "next/link";
import React from "react";
import bg from "../../images/Properties/035.jpg";

type personProps = {};

const person: React.FC<personProps> = () => {
  return (
    <section>
      <div>
        <div
          className="relative py-[50px]"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="bg-black opacity-75 absolute w-full h-full top-0 left-0 -z-1"></div>
          <div className="max-w-[1210px] my-[40px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="z-10 w-full">
              <div className="">
                <h2 className="font-normal text-[35px] leading-[42px] text-white z-10 text-center w-full mt-8">
                  Account
                </h2>
              </div>
            </div>
            <div className="flex gap-4 w-full justify-center z-10 p-2 sm:p-5">
              <button
                type={"submit"}
                className="mt-[15px] bg-blue-600 text-white font-semibold text-sm leading-snug uppercase rounded shadow-md hover:text-black border-0 hover:bg-[#fbc21c] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full md:w-[20%] py-[10px]"
              >
                <Link href={"/signIn"}> sign In </Link>
              </button>

              <button className="mt-[15px] bg-[#fbc21c] text-black font-semibold text-sm leading-snug uppercase rounded shadow-md hover:text-white hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border-0 w-full md:w-[20%] py-[10px]">
                <Link href={"/register"}> Create a account </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default person;
