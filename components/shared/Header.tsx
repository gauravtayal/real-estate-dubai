import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuRightAlt, CgProfile } from "react-icons/cg";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [isTrue, setTrue] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement>(null);
  const route = useRouter();
  useEffect(() => {
    const headerHandler = () => {
      if (window.scrollY >= 120) {
        return setTrue(true);
      } else {
        return setTrue(false);
      }
    };

    const handler = (e: any) => {
      if (modal && modal.current && !modal.current.contains(e.target)) {
        return setOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);

    window.addEventListener("scroll", headerHandler);
    return () => {
      window.removeEventListener("scroll", headerHandler);
      window.removeEventListener("mousedown", handler);
    };
  }, [isTrue, open]);

  useEffect(() => {
    if (route.pathname !== "/") {
      return setTrue(true);
    }
  }, []);

  interface navigateInterface {
    id: number;
    text: string;
    path: string;
  }

  const navigate: Array<navigateInterface> = [
    {
      id: 2,
      text: "Properties",
      path: "/properties",
    },
    {
      id: 3,
      text: "About",
      path: "/about",
    },
    {
      id: 4,
      text: "Inquiry Form",
      path: "/inquiry-form",
    },
    {
      id: 5,
      text: "Contact",
      path: "/contact",
    },
    {
      id: 6,
      text: "Blog",
      path: "/blog",
    },
  ];

  const navigation: JSX.Element = (
    <div>
      <nav className="list-none flex items-center gap-2">
        {navigate.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`  hover:text-primary font-semibold p-4 ${
              route.pathname === "/" && isTrue ? "text-black" : " text-white"
            }
            ${route.pathname !== "/" && "text-secondary"}
            `}
          >
            <li>{item.text}</li>
          </Link>
        ))}

        <Link
          className={`  hover:text-primary p-4 font-semibold ${
            route.pathname === "/" && isTrue ? "text-black" : " text-white"
          }
            ${route.pathname !== "/" && "text-secondary"}
          `}
          href="tel:+8801768227738"
        >
          <li>
            <span>+8801768227738</span>{" "}
          </li>
        </Link>

        <Link
          href="/person"
          className={`  hover:text-primary font-semibold  p-4 ${
            route.pathname === "/" && isTrue ? "text-black" : " text-white"
          }
          ${route.pathname !== "/" && "text-secondary"}
          `}
        >
          <li>
            <CgProfile className="w-[38px] text-[20px]" />
          </li>
        </Link>

        <button
          className={` border-[1px] border-white py-2 
            px-[15px] text-[15px] font-medium leading-[20px] rounded-[5px] ${
              route.pathname === "/" && isTrue
                ? "text-white bg-secondary"
                : "text-black bg-white"
            }
            
            ${route.pathname !== "/" && "bg-secondary !text-white"}`}
        >
          <li>
            <Link className=" p-4" href={"/"}>
              Create a Listing
            </Link>
          </li>
        </button>
      </nav>
    </div>
  );
  const navigateMobile: JSX.Element = (
    <div className="relative p-8 w-full">
      {open && (
        <nav
          ref={modal}
          className="list-none absolute left-0 top-[-6px] w-full bg-white p-5 gap-4 flex flex-col"
        >
          {navigate.map((item) => (
            <Link key={item.id} href={item.path}>
              <li className="hover:text-primary font-semibold text-black">
                {item.text}
              </li>
            </Link>
          ))}

          <Link
            className={`hover:text-primary font-semibold text-black`}
            href="tel:+8801768227738"
          >
            <li>
              <span>+8801768227738</span>
            </li>
          </Link>

          <Link
            href="/person"
            className={` p-4  hover:text-primary font-semibold text-black`}
          >
            <li>
              <CgProfile className="text-[20px] w-[36px]  -mx-5 " />
            </li>
          </Link>

          <button
            className={` mx-5 p-4 border-[1px] border-white py-2 
        px-[15px] text-[15px] font-medium leading-[20px] rounded-[5px] text-white bg-black`}
          >
            <li>
              <Link href="/">Create a Listing</Link>
            </li>
          </button>

          <button
            className="absolute right-[20px] top-[20px] "
            onClick={() => setOpen(false)}
          >
            <AiFillCloseCircle className="text-[27px] text-black z-20" />
          </button>
        </nav>
      )}
      {!open && (
        <button
          className="absolute right-[20px] top-[14px] "
          onClick={() => setOpen(!open)}
        >
          <CgMenuRightAlt
            className={`text-[27px]  z-20 ${
              isTrue ? "text-black" : "text-white"
            }`}
          />
        </button>
      )}
    </div>
  );

  return (
    <header
      className={`z-50 absolute top-0 left-0 w-full shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  text-secondary  ${
        route.pathname === "/" &&
        isTrue &&
        "bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] sticky left-0 top-0 transition ease-in-out text-secondary delay-150"
      } 
      
      ${
        route.pathname !== "/" &&
        "sticky top-0 left-0 w-full shadow-[0px_4px_80px_rgba(0,0,0,0.1)] text-secondary bg-white"
      }`}
    >
      <div className="max-w-[1210px] p-4 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div className=" flex items-center justify-between w-full">
          <div className="w-[13rem] md:w-[9rem]">
            <Link className="text-primary w-full block " href="/">
              <p
                className={`w-full mx-5 p-4 hover:text-primary font-semibold ${
                  route.pathname === "/" && isTrue
                    ? "text-black"
                    : " text-white"
                }
                
                ${route.pathname !== "/" && "text-secondary"}`}
              >
                Hasan Rifat
              </p>
            </Link>
          </div>
          <div className="w-full hidden lg:block">
            <div className="w-full flex items-center justify-end">
              {navigation}
            </div>
          </div>
          <div className="w-full lg:hidden block">
            <div className="w-full flex items-center justify-end">
              {navigateMobile}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
