import React, { useState } from "react";

type LoginFormProps = {};

import Input from "../../components/shared/Input";
import Label from "../../components/shared/Label";
import b from "../../images/Properties/035.jpg";
import Image from "next/image";
import Link from "next/link";
import { useUserLoginMutation } from "../../redux/featuers/user/userApi";

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useLogin, { isError, isLoading, data: loginUser, error, isSuccess }] =
    useUserLoginMutation();

  const fromHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    useLogin({ email, password });
  };

  return (
    <section>
      <div
        className="relative py-[50px]"
        style={{
          backgroundImage: `url(${b.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-75 bg-secondary absolute w-full h-full top-0 left-0 -z-1 "></div>
        <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center my-[150px]">
          <div className="z-10 w-full">
            <div className="flex w-[50%] items-center mx-auto rounded-lg  bg-white p-10 z-10 ">
              <div className="w-full">
                <div className="pb-[20px]">
                  <h2 className="font-normal text-[35px] leading-[42px] text-black z-10 text-center w-full ">
                    Sign In
                  </h2>
                </div>
                <form onSubmit={fromHandler} className="w-full">
                  <div className="my-3">
                    <Label label={"Email"} className={"mb-3"} />
                    <Input
                      fn={setEmail}
                      type={"email"}
                      name={"email"}
                      placeholder={"Email"}
                      className={"w-full"}
                    />
                  </div>
                  <div className="my-5">
                    <Label label={"password"} className={"mb-3"} />
                    <Input
                      fn={setPassword}
                      type={"password"}
                      name={"password"}
                      placeholder={"password"}
                      className={"w-full"}
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      disabled={isLoading}
                      type={"submit"}
                      className="mt-[15px] bg-blue-600 text-white font-semibold text-sm leading-snug uppercase rounded shadow-md hover:text-black border-0 hover:bg-[#fbc21c] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-[20%] py-[10px]"
                    >
                      Sign In
                    </button>

                    <button className="mt-[15px] bg-[#fbc21c] text-black font-semibold text-sm leading-snug uppercase rounded shadow-md hover:text-white hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  border-0 w-[20%] py-[10px]">
                      <Link href="/register">Register</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
