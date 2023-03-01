import React from "react";

import { Img, Text, Input, Line, Button } from "components";

import { CloseSVG } from "../../assets/images";

export default function Footer(){

    function handleNavigate21() {
        window.location.href = "https://twitter.com/login/";
      }
    return(
        <footer className="bg-teal_900 flex items-center justify-center mt-[257px] md:px-[20px] w-[100%]">
        <div className="flex items-center justify-center mb-[47px] ml-[301px] mr-[84px] mt-[55px] w-[74%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[21%]">
              <div className="h-[102px] md:h-[75px] relative w-[100%]">
                <Img
                  src="images/img_logowhite1.png"
                  className="absolute h-[75px] left-[0] object-cover top-[0] w-[70%]"
                  alt="LogoWHITEOne"
                />
                <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[10px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    No.1 Fashion Recommender Website
                  </Text>
                </div>
              </div>
              <Line className="bg-deep_orange_100 h-[2px] mt-[12px] w-[96%]" />
              <div className="flex flex-row items-center justify-start mt-[6px] md:w-[100%] w-[37%]">
                <Img
                  src="images/img_carbonlogoinstagram.svg"
                  className="h-[16px] w-[16px]"
                  alt="carbonlogoinstagram"
                />
                <Img
                  src="images/img_clock.svg"
                  className="h-[16px] ml-[5px] w-[16px]"
                  alt="clock"
                />
                <Img
                  src="images/img_twitter.svg"
                  className="common-pointer h-[16px] ml-[5px] w-[16px]"
                  onClick={handleNavigate21}
                  alt="twitter"
                />
                <Img
                  src="images/img_mail.svg"
                  className="h-[16px] ml-[6px] w-[16px]"
                  alt="mail"
                />
              </div>
            </div>
            <div className="flex items-start justify-start md:ml-[0] ml-[70px] md:mt-[0] mt-[18px] p-[10px] w-[auto]">
              <Text
                className="font-medium text-left text-white_A700"
                variant="body2"
              >
                ABOUT
                <br />
                <br />
                Home
                <br />
                Search
                <br />
                Fashion View
                <br />
                Saved Items
                <br />
                Notification
                <br />
                Profile
              </Text>
            </div>
            <div className="flex items-start justify-start md:ml-[0] ml-[19px] p-[10px] w-[auto]">
              <Text
                className="font-medium text-left text-white_A700"
                variant="body2"
              >
                SUPPORT
                <br />
                <br />
                Support Request
                <br />
                Contact Us
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[47px] md:w-[100%] w-[44%]">
              <div className="flex items-start justify-start p-[10px] w-[auto]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Be the first to know the trendy outfits via our newsletters!
                </Text>
              </div>
              <div className="border-[1px] border-solid border-white_A700 flex flex-row gap-[200px] items-center justify-center px-[20px] py-[10px] rounded-[10px] sm:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Your email address
                </Text>
                <Button className="bg-deep_orange_100 cursor-pointer font-bold leading-[normal] min-w-[121px] p-[10px] rounded-[10px] text-[12px] text-center text-teal_900 w-[auto]">
                  SUBSCRIBE NOW!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}