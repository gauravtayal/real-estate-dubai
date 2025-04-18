import React from "react";
import InquiryForm from "../shared/InquiryForm";
import bg from "../../images/inquiryForm.jpg";

type RealEstateInquiryFormProps = {};

const RealEstateInquiryForm: React.FC<RealEstateInquiryFormProps> = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center left",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="py-[120px] relative"
    >
      <div className="bg-[#00335A] z-0 opacity-[0.85] absolute w-full h-full top-0 left-0 -z-1"></div>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="grid grid-cols-1 md:grid-cols-5 w-full z-10 max-w-[1280px] mx-auto items-center">
          {/* left side   */}
          <div className="col-span-3 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div>
                {/* item 1 */}
                <div className="p-[20px]">
                  <div className="mb-[16px]">
                    <h2 className="text-white text-[28px] leading-[33px] mb-[10px]">
                      Why Houzez Is The Perfect Choice?
                    </h2>
                    <div className="py-[15px]">
                      <span className="w-[30%] h-[1px] bg-white inline-block"></span>
                    </div>
                  </div>
                </div>
                {/* item 2 */}
                <div className="p-[20px]">
                  <div className="mb-[16px]">
                    <h1 className="text-white text-[40px] leading-[40px] mb-[10px]">
                      01.
                    </h1>
                    <h2 className="text-white text-[25px] leading-[35px] mb-[10px]">
                      Suitable For Agents And Agencies
                    </h2>
                    <p className="text-white text-[16px] leading-[27px] mb-[10px]">
                      Never miss a sale! It's never been easier to turn leads
                      into real customers
                    </p>
                    <div className="py-[15px]">
                      <span className="w-[30%] h-[1px] bg-white inline-block"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-[20px]">
                  <div className="mb-[16px]">
                    <h1 className="text-white text-[40px] leading-[40px] mb-[10px]">
                      02.
                    </h1>
                    <h2 className="text-white text-[25px] leading-[35px] mb-[10px]">
                      Design Custom Leads Capture Forms
                    </h2>
                    <p className="text-white text-[16px] leading-[27px] mb-[10px]">
                      Keep track of your leads without having to pay for an
                      external CRM
                    </p>
                    <div className="py-[15px]">
                      <span className="w-[30%] h-[1px] bg-white inline-block"></span>
                    </div>
                  </div>
                </div>
                <div className="p-[20px]">
                  <div className="mb-[16px]">
                    <h1 className="text-white text-[40px] leading-[40px] mb-[10px]">
                      03.
                    </h1>
                    <h2 className="text-white text-[25px] leading-[35px] mb-[10px]">
                      Highly Customizable Theme
                    </h2>
                    <p className="text-white text-[16px] leading-[27px] mb-[10px]">
                      Customize your website according to your expectations and
                      requirements
                    </p>
                    <div className="py-[15px]">
                      <span className="w-[30%] h-[1px] bg-white inline-block"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-2">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default RealEstateInquiryForm;
