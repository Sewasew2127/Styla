import React from "react";

import { Text, Button, Img, Line, Input } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignInPagePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white_A700 flex font-outfit items-end justify-start mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[95px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] gap-[97px] items-center justify-end ml-[auto] w-[100%]">
          <div className="flex md:flex-1 flex-col gap-[40px] justify-start md:w-[100%] w-[39%]">
            <div className="h-[108px] md:h-[70px] relative sm:w-[100%] w-[83%]">
              <div className="absolute flex items-center justify-end left-[0] p-[10px] top-[0] w-[auto]">
                <Text
                  className="text-center text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Welcome Back
                </Text>
              </div>
              <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[10px] w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Welcome Back, Please enter your details.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[10px] md:w-[100%] w-[99%]">
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
                  Log in with Google
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
                wrapClassName="mt-[64px] outline outline-deep_orange_100 w-[100%]"
                type="email"
                name="Email"
                placeholder="Email or Username"
              ></Input>
              <div className="md:h-[128px] h-[87px] mt-[52px] relative w-[100%]">
                <div className="md:h-[76px] h-[87px] m-[auto] w-[100%]">
                  <Text
                    className="absolute bottom-[0] font-semibold right-[0] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Fogot password
                  </Text>
                  <div className="absolute flex flex-col gap-[18px] inset-x-[0] justify-start mx-[auto] outline outline-deep_orange_100 top-[0] w-[100%]">
                    <div className="flex items-start justify-end outline outline-deep_orange_100 p-[9px] w-[100%]">
                      <Text
                        className="font-normal md:ml-[0] ml-[12px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Password
                      </Text>
                    </div>
                    </div>
                    <div className="absolute flex flex-col gap-[18px] inset-x-[0]  mx-[auto] outline outline-deep_orange_100 top-[0] w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] ml-[44px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Remember for 30 days
                    </Text>
                    <div className="absolute border-[1px] border-gray_400 border-solid bottom-[3%] h-[17px] left-[4%] w-[17px]"></div>
                  </div>
                </div>
                
              </div>
              <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] mt-[86px] sm:px-[20px] px-[220px] md:px-[40px] py-[15px] rounded-[7px] shadow-bs sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[501px]">
                Log In
              </Button>
              <div className="flex flex-row gap-[10px] items-start justify-center mt-[20px] md:w-[100%] w-[58%]">
                <Text
                  className="font-normal not-italic text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Don’t have an account?{" "}
                </Text>
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Sign up for free
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

export default SignInPagePage;
