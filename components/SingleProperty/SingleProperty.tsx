import Image from "next/dist/client/image";
import React from "react";
import {
  MdOutlineBathroom,
  MdOutlineBedroomParent,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { CiMap } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addProperty } from "../../redux/featuers/properties/propertiesSlice";

type SinglePropertyProps = {
  property: [
    {
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
      price: string;
      PropertySize: string;
      PropertyType: string;
      PropertyStatus: string;
    }
  ];
};

const SingleProperty: React.FC<SinglePropertyProps> = ({ property }) => {
  const dispatch = useDispatch();

  const {
    _id,
    feature,
    img,
    title,
    description,
    address,
    City,
    State,
    ZipPostalCode,
    Area,
    County,
    Apartment,
    Bedrooms,
    Bathrooms,
    Garage,
    YearBuilt,
    squareFt,
    GarageSize,
    price,
    PropertySize,
    PropertyType,
    PropertyStatus,
  } = property[0];

  return (
    <section className="py-16">
      <div className="max-w-[1170px] px-4 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div>
          <div className="">
            <div className="rounded-lg  overflow-hidden relative">
              <Image
                className="object-cover object-center h-80"
                src={img}
                alt={title}
                width={1200}
                height={300}
              />
              <div className="bg-[#000] rounded-t-lg  opacity-20 absolute w-full h-full bottom-0 left-0 -z-1"></div>
              <div className="absolute left-0 top-0 p-[15px] w-full h-full">
                <div className="flex justify-between flex-col w-full h-full">
                  <div>
                    <div className="flex gap-5 ">
                      <span className="bg-[#77c720] text-white rounded-[2px] py-[3px] px-[5px] text-[10px] leading-[15px] font-semibold">
                        FEATUERD
                      </span>
                      <span className="bg-black opacity-[0.6] rounded-[2px] py-[3px] px-[5px] text-white text-[10px] leading-[15px] font-semibold uppercase">
                        {feature}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* overview */}
            <div className="bg-white p-20 mt-20">
              <div className="flex justify-between">
                <p>overview</p>
                <p className="text-secondary">
                  <strong>Property ID:</strong> <span>{_id.slice(0, 10)}</span>
                </p>
              </div>
              <hr className="my-5" />
              <div className="flex justify-between">
                <div>
                  <strong>{PropertyType}</strong>
                  <p>Property Type</p>
                </div>
                <div>
                  <p className="flex gap-2 items-center">
                    <MdOutlineBedroomParent />
                    <strong>{Bedrooms}</strong>
                  </p>
                  <p>Bedrooms</p>
                </div>
                <div>
                  <p className="flex gap-2 items-center">
                    <MdOutlineBathroom />
                    <strong>{Bathrooms}</strong>
                  </p>
                  <p>Bathrooms</p>
                </div>
                <div>
                  <p className="flex gap-2 items-center">
                    <GiHomeGarage />
                    <strong>{Garage}</strong>
                  </p>
                  <p>Garage</p>
                </div>
                <div>
                  <p className="flex gap-2 items-center">
                    <BsFillFilterSquareFill />
                    <strong>{GarageSize}</strong>
                  </p>
                  <p>Sq Ft</p>
                </div>
                <div>
                  <p className="flex gap-2 items-center">
                    <SlCalender />
                    <strong>{YearBuilt}</strong>
                  </p>
                  <p>Year Built</p>
                </div>
              </div>
            </div>
            {/* description */}
            <div className="p-10 bg-white mt-10 rounded">
              <p>Description</p>
              <hr className="my-5" />
              <p>{description}</p>
            </div>
            {/* location */}
            <div className="p-10 bg-white mt-10 rounded">
              <div className="flex justify-between items-center mb-8">
                <p>Address</p>
              </div>
              <hr className="my-5" />
              <div className="flex justify-between gap-4">
                <div className="w-2/4">
                  <div className="flex justify-between border-b border-[#dce0e0] p-4">
                    <strong> Address</strong>
                    <p>{address}</p>
                  </div>
                  <div className="flex justify-between border-b border-[#dce0e0] p-4">
                    <strong>city</strong>
                    <p>{City}</p>
                  </div>
                  <div className="flex justify-between border-b border-[#dce0e0] p-4">
                    <strong>State/Country</strong>
                    <p>{State}</p>
                  </div>
                </div>
                <div className="w-2/4">
                  <div className="flex justify-between border-b border-[#dce0e0] p-4">
                    <strong> Zip/Postal Code</strong>
                    <p>{ZipPostalCode}</p>
                  </div>
                  <div className="flex justify-between border-b border-[#dce0e0] p-4">
                    <strong>Area</strong>
                    <p>{Area}</p>
                  </div>
                  <div className="flex justify-between border-b border-[#dce0e0] p-4">
                    <strong>Country</strong>
                    <p>{County}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* details */}
            <div className="bg-white p-20 mt-10 rounded">
              <div className="flex justify-between">
                <p>Details</p>
                <p>{YearBuilt}</p>
              </div>
              <hr className="my-5" />
              <div className=" bg-[#e5f7ff] p-[30px] border-[#00aeff] border-[1px] rounded">
                <div className="flex justify-between gap-4">
                  <div className="w-2/4">
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong> Property ID:</strong>
                      <p>{_id.slice(0, 10)}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Price</strong>
                      <p>$ {price}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Property Size</strong>
                      <p>{PropertySize}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Bedrooms</strong>
                      <p>{Bedrooms}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Bathrooms</strong>
                      <p>{Bathrooms}</p>
                    </div>
                  </div>
                  <div className="w-2/4">
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Garage</strong>
                      <p>{Garage}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Garage Size</strong>
                      <p>{GarageSize}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Year Built</strong>
                      <p>{YearBuilt}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Property Type</strong>
                      <p>{PropertyType}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#dce0e0] p-4">
                      <strong>Property Status</strong>
                      <p>{PropertyStatus}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(addProperty(property[0]))}
                  className="bg-primary text-white gap-2 flex items-center px-7 py-3  rounded-lg mx-auto mt-4"
                >
                  {PropertyStatus === "For Rent"
                    ? "Book a property"
                    : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProperty;
