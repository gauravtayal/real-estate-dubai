import React from "react";
import img1 from "../../images/Properties/006.jpg";
import img2 from "../../images/Properties/008.jpg";
import img3 from "../../images/Properties/012.jpg";
import img4 from "../../images/Properties/030.jpg";
import img5 from "../../images/Properties/035.jpg";
import img6 from "../../images/Properties/036.jpg";
import img7 from "../../images/Properties/040.jpg";
import img8 from "../../images/Properties/045.jpg";
import img9 from "../../images/Properties/047.jpg";
import img10 from "../../images/Properties/205.jpg";
import Image from "next/image";
import { AiFillCar } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import {
  MdOutlineBathroom,
  MdOutlineBedroomParent,
  MdOutlineFavoriteBorder,
  MdOutlineSquareFoot,
  MdPersonPin,
} from "react-icons/md";
import { RxPlusCircled } from "react-icons/rx";
import { VscOpenPreview } from "react-icons/vsc";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import Link from "next/dist/client/link";
import { useGetPropertiesQuery } from "../../redux/featuers/properties/propertiesApi";
type PropertiesContentProps = {};

const PropertiesContent: React.FC<PropertiesContentProps> = () => {
  interface property {
    _id: string;
    feature: string;
    img: string;
    title: string;
    description: string;
    address: string;
    City: string;
    State: string;
    ZipPostalCode: string;
    Area: string;
    County: string;
    Apartment: string;
    Bedrooms: number;
    Bathrooms: number;
    Garage: number;
    YearBuilt: number;
    squareFt: string;
    GarageSize: string;
    price: number;
    PropertySize: string;
    PropertyType: string;
    PropertyStatus: string;
  }
  [];

  const { data, isError, isLoading } = useGetPropertiesQuery({}, {});

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) {
    content = <Error message={"internal error"} />;
  }

  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <Error message={"No data found"} />;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data.data.map((item: property) => (
          <Link
            key={item._id}
            className="w-full h-full block"
            href={`/properties/${item._id}`}
          >
            <div className="shadow-xl bg-white rounded-[.25rem]  ">
              <div className="relative w-full h-[293px]">
                <Image
                  className="rounded-t-lg object-fill relative"
                  src={item?.img}
                  alt={"slider img"}
                  fill
                />
                <div className="bg-[#000] rounded-t-lg  opacity-20 absolute w-full h-full bottom-0 left-0 -z-1"></div>
                <div className="absolute left-0 top-0 p-[15px] w-full h-full">
                  <div className="flex justify-between flex-col w-full h-full">
                    <div>
                      <div className="flex justify-between ">
                        <span className="bg-[#77c720] text-white rounded-[2px] py-[3px] px-[5px] text-[10px] leading-[15px] font-semibold">
                          FEATUERD
                        </span>
                        <span className="bg-black opacity-[0.6] rounded-[2px] py-[3px] px-[5px] text-white text-[10px] leading-[15px] font-semibold uppercase">
                          {item.feature}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex h-full w-full justify-between working text-left text-white">
                        <div>
                          <h2>$ {item.price}</h2>
                          <p>{item.squareFt}</p>
                        </div>
                        <div className="flex gap-2">
                          <VscOpenPreview className="bg-[#3f4041] p-1 w-[30px] rounded-[4px] h-[30px] text-white" />
                          <MdOutlineFavoriteBorder className="bg-[#3f4041] p-1 w-[30px] rounded-[4px] h-[30px] text-white" />
                          <RxPlusCircled className="bg-[#3f4041] p-1 w-[30px] rounded-[4px] h-[30px] text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[20px] border-b-[1px] border-[#dce0e0] text-left">
                <h2 className="font-semibold text-[16px] text-secondary leading-[19px]">
                  {item.title}
                </h2>
                <p className="text-neutral text-[13px] leading-[25px]">
                  {item.description.slice(0, 69)}
                </p>
                <div className="text-secondary text-[14px] leading-[16px] flex gap-4">
                  <div className="flex gap-1 my-[12px]">
                    <span>
                      <MdOutlineBedroomParent className="text-neutral " />
                    </span>{" "}
                    <span>{item.Bathrooms}</span>
                  </div>

                  <div className="flex gap-1 my-[12px]">
                    <span>
                      <MdOutlineBathroom className="text-neutral " />
                    </span>{" "}
                    <span>{item.Bathrooms}</span>
                  </div>

                  <div className="flex gap-1 my-[12px]">
                    <span>
                      <AiFillCar className="text-neutral " />
                    </span>{" "}
                    <span>{item.Garage}</span>
                  </div>
                  <div className="flex gap-1 my-[12px]">
                    <span>
                      <MdOutlineSquareFoot className="text-neutral " />
                    </span>{" "}
                    <span>{item.Garage}</span>
                  </div>
                </div>
                <div>
                  <strong className="text-secondary">
                    {item.PropertyType}
                  </strong>
                </div>
              </div>
              <div className="text-neutral px-[24px] py-[15px] flex justify-between">
                <h2 className="flex items-center justify-center gap-1">
                  <span>
                    <MdPersonPin />
                  </span>{" "}
                  Hasan Rifat
                </h2>
                <p className="flex items-center justify-center gap-1">
                  {" "}
                  <span>
                    <GrAttachment />
                  </span>{" "}
                  {item.YearBuilt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <section className="py-[70px]">
      <div className="max-w-[1280px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="pb-[100px] mx-auto">
          <h2 className="font-normal text-center text-[35px] leading-[42px] text-[#000]">
            Discover Our Featured Listings
          </h2>
          <p className="mt-3 text-center text-[16px] leading-[25px] text-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
        {/* 6 properties start*/}
        {content}
        {/* 6 properties end*/}
      </div>
    </section>
  );
};
export default PropertiesContent;
