import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  MdOutlineBedroomParent,
  MdOutlineBathroom,
  MdOutlineSquareFoot,
  MdPersonPin,
} from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import { VscOpenPreview } from "react-icons/vsc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RxPlusCircled } from "react-icons/rx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

import Link from "next/link";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import { useGetPropertiesQuery } from "../../redux/featuers/properties/propertiesApi";

type FeaturedSliderProps = {};

const FeaturedSlider: React.FC<FeaturedSliderProps> = () => {
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
    price: string;
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
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          0: {
            width: 0,
            slidesPerView: 0.6,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1.57,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]} //
        className="mySwiper"
      >
        {data?.data?.map((item: property) => (
          <SwiperSlide key={item._id}>
            <Link
              className="w-full h-full block"
              href={`/properties/${item._id}`}
            >
              <div className="shadow-xl bg-white rounded-[.25rem]  ">
                <div className="relative w-full h-96">
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
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="pt-[350px] md:py-[150px]">
      <div className="max-w-[1300px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="pb-[100px] mx-auto">
          <h2 className="font-normal text-center text-[35px] leading-[42px] text-[#000]">
            Discover Our Featured Listings
          </h2>
          <p className="mt-3 text-center text-[16px] leading-[25px] text-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};
export default FeaturedSlider;
