import React from "react";

import { Text, Button, Img } from "components";

const LogoutscreenPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-outfit items-end justify-start mx-[auto] pl-[188px] sm:pl-[20px] md:pl-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end ml-[auto] w-[100%]">
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[360px] md:w-[100%] w-[30%]">
            <Text className="text-center text-teal_900" as="h1" variant="h1">
              Are you sure,
              <br /> you want to log out?
            </Text>
            <Text
              className="font-normal mt-[37px] not-italic text-center text-teal_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              we hate to see you go!
            </Text>
            <div className="flex flex-col gap-[28px] items-center justify-start mt-[113px] md:w-[100%] w-[86%]">
              <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] px-[15px] py-[10px] rounded-[7px] shadow-bs sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[318px]">
                Log out
              </Button>
              <Button className="border-[1px] border-deep_orange_100 border-solid cursor-pointer font-bold leading-[normal] px-[15px] py-[10px] rounded-[7px] shadow-bs sm:text-[18px] md:text-[20px] text-[22px] text-center text-teal_900 w-[318px]">
                Cancel
              </Button>
            </div>
          </div>
          <Img
            src="images/img_arrowright_deep_orange_100.svg"
            className="h-[35px] md:ml-[0] ml-[74px] md:mt-[0] mt-[36px] w-[35px]"
            alt="arrowright"
          />
          <div className="bg-teal_900 h-[1024px] md:ml-[0] ml-[38px] relative md:w-[100%] w-[59%]">
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

export default LogoutscreenPage;
