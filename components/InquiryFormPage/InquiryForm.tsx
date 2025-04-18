import React from "react";
import InquiryForm from "../shared/InquiryForm";
import bg from "../../images/Properties/035.jpg";
type InquiryFormProps = {};

const InquiryForms: React.FC<InquiryFormProps> = () => {
  return (
    <>
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
                  Inquiry From
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto my-14">
          <InquiryForm />
        </div>
      </section>
    </>
  );
};
export default InquiryForms;
