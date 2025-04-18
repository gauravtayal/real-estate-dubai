import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsPerson, BsTag } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

type BlogPageProps = {};
import bg from "../../images/Properties/035.jpg";
import img1 from "../../images/Properties/006.jpg";
import img2 from "../../images/Properties/008.jpg";
import img3 from "../../images/Properties/012.jpg";
import img4 from "../../images/Properties/030.jpg";
import img5 from "../../images/Properties/035.jpg";
import img6 from "../../images/Properties/036.jpg";
import img7 from "../../images/Properties/040.jpg";
import img8 from "../../images/Properties/045.jpg";
import SectionLayout from "../shared/SectionLayout";

const BlogPage: React.FC<BlogPageProps> = () => {
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

  const archives = (
    <>
      <nav className="list-none ">
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-black hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> March 2016</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-black hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> January 2016</span>
          </Link>
        </li>
      </nav>
    </>
  );
  const categories = (
    <>
      <nav className="list-none ">
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-black hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span>Business</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-black hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> Real Estate</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-black hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> Construction</span>
          </Link>
        </li>
      </nav>
    </>
  );
  const meta = (
    <>
      <nav className="list-none ">
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-black hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> March 2016</span>
          </Link>
        </li>
        <li className="mt-[8px] ">
          <Link
            href={"/"}
            className="flex gap-2 font-semibold items-center text-[14px] leading-[25px] text-black hover:text-[#00aeff] "
          >
            <AiOutlineRight /> <span> January 2016</span>
          </Link>
        </li>
      </nav>
    </>
  );

  return (
    <section>
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
        <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="z-10 w-full">
            <div className="">
              <h2 className="font-normal text-[35px] leading-[42px] text-white z-10 text-center w-full mt-8">
                Blog
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="mt-[40px]">
          <div className="grid grid-cols-3  gap-8 relative">
            <div className="col-span-2">
              {data.map((item) => (
                <div className=" bg-white mb-5" key={item.id}>
                  <div className="rounded-[.25rem] ">
                    <div className="relative rounded-[.25rem] p-2">
                      <Image
                        className=" w-full h-full rounded-lg"
                        src={item.img}
                        alt={"slider img"}
                      />
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
                          <span className="text-[#00aeff]">
                            {item.category}
                          </span>
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
            <div className="col-span-1 h-full relative">
              <div className=" sticky left-0 top-[12%] w-full">
                <div className="rounded-[4px]  mb-8 p-7 bg-white ">
                  <h2 className="text-[18px] leading-[25px] text-secondary mb-6">
                    Archives
                  </h2>
                  {archives}
                </div>
                <div className="rounded-[4px]  mb-8 p-7 bg-white ">
                  <h2 className="text-[18px] leading-[25px] text-secondary mb-6">
                    Meta
                  </h2>
                  {meta}
                </div>
                <div className="rounded-[4px]  mb-8 p-7 bg-white ">
                  <h2 className="text-[18px] leading-[25px] text-secondary mb-6">
                    Categories
                  </h2>
                  {categories}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogPage;
