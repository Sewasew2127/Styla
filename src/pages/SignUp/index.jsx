import React from "react";

import { Button, Img, Text, Line, Input } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white_A700 flex font-outfit items-end justify-start mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[95px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] gap-[97px] items-start justify-end ml-[auto] w-[100%]">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[41px] md:w-[100%] w-[39%]">
            <Button
              className="border-b-[1px] border-deep_orange_100 border-solid flex items-center justify-center md:ml-[0] ml-[10px] p-[10px] sm:ml-[0] text-center"
              rightIcon={
                <Img
                  src="images/img_arrowright.svg"
                  className="ml-[12px] text-center"
                  alt="arrow_right"
                />
              }
            >
              <div className="bg-transparent cursor-pointer font-bold leading-[normal] sm:text-[18px] md:text-[20px] text-[22px] text-left text-teal_900">
                Continue as guest
              </div>
            </Button>
            <div className="h-[108px] md:h-[167px] mt-[97px] relative w-[70%]">
              <div className="absolute flex inset-x-[0] items-center justify-end mx-[auto] p-[10px] top-[0] w-[auto]">
                <Text
                  className="text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Create an account
                </Text>
              </div>
              <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[10px] w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Start your fashion journey with us!
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[10px] mt-[40px] md:w-[100%] w-[99%]">
              <Button
                className="flex items-center justify-center md:px-[40px] outline outline-[1px] outline-deep_orange_100 px-[150px] py-[12px] rounded-[7px] sm:px-[20px] text-center w-[506px]"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    src="images/img_google.svg"
                    className="mr-[15px] text-center"
                    alt="google"
                  />
                }
              >
                <div className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] sm:text-[18px] md:text-[20px] text-[22px] text-left text-teal_900">
                  Sign up with Google
                </div>
              </Button>
              <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-between mt-[52px] w-[100%]">
                <Line className="bg-deep_orange_100 h-[1px] sm:mt-[0] my-[13px] w-[44%]" />
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  or
                </Text>
                <Line className="bg-deep_orange_100 h-[1px] sm:mt-[0] my-[13px] w-[44%]" />
              </div>
              <Input
                className="font-normal leading-[normal] not-italic pl-[23px] pr-[35px] sm:px-[20px] py-[9px] sm:text-[18px] md:text-[20px] text-[22px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                wrapClassName="mt-[56px] outline outline-deep_orange_100 w-[100%]"
                type="text"
                name="Name"
                placeholder="Name"
              ></Input>
              <Input
                className="font-normal leading-[normal] not-italic pl-[22px] pr-[35px] sm:px-[20px] py-[9px] sm:text-[18px] md:text-[20px] text-[22px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                wrapClassName="mt-[41px] outline outline-deep_orange_100 w-[100%]"
                type="email"
                name="Email"
                placeholder="Email"
              ></Input>
              <Input
                className="font-normal leading-[normal] not-italic pl-[23px] pr-[35px] sm:px-[20px] py-[9px] sm:text-[18px] md:text-[20px] text-[22px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                wrapClassName="mt-[41px] outline outline-deep_orange_100 w-[100%]"
                type="password"
                name="Password"
                placeholder="Password"
              ></Input>
              <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] mt-[56px] sm:px-[20px] px-[220px] md:px-[40px] py-[15px] rounded-[7px] shadow-bs sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[501px]">
                Create account
              </Button>
              <div className="flex flex-row gap-[8px] items-center justify-start md:ml-[0] ml-[106px] mt-[22px] md:w-[100%] w-[47%]">
                <Text
                  className="font-normal not-italic text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Already have an account?{" "}
                </Text>
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Log In
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-teal_900 h-[1024px] relative md:w-[100%] w-[55%]">
            <Img
              src="images/img_frame13928.png"
              className="h-[1024px] m-[auto] object-cover w-[100%]"
              alt="Frame13928"
            />
            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[51%]">
              <Img
                src="images/img_logowhite1.png"
                className="h-[175px] sm:h-[auto] object-cover md:w-[100%] w-[97%]"
                alt="LogoWHITETwo"
              />
              <Text
                className="font-bold text-left text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                No. 1 Fashion Recommender Website
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
