import React from "react";

import { Img, Text, Input, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";

const LandingPageThreePage = () => {
  function handleNavigate9() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-outfit items-center justify-start mx-[auto] w-[100%]">
        <header className="flex md:hidden items-center justify-center md:px-[20px] w-[100%]">
          <ul className="bg-white_A700 flex md:flex-col flex-row md:hidden items-center justify-center p-[26px] sm:px-[20px] shadow-bs w-[100%] common-row-list">
            <li className="mt-[40px] mb-[14px] sm:w-[100%] sm:my-[10px] w-[3%]">
              <div className="header-row ">
                <Img
                  src="images/img_menu.svg"
                  className="h-[37px]"
                  alt="menu"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </li>
            <li className="mt-[20px] ml-[69px] sm:w-[100%] sm:my-[10px] sm:hidden w-[11%]">
              <Img
                src="images/img_logogreen11.png"
                className="h-[71px] md:h-[auto] sm:hidden object-cover"
                alt="LogoGREENEleven"
              />
            </li>
            <li className="mt-[35px] mb-[8px] ml-[171px] sm:w-[100%] sm:my-[10px] sm:hidden w-[25%]">
              <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] sm:hidden items-start justify-start px-[20px] py-[10px] rounded-[10px]">
                <Img
                  src="images/img_trash.svg"
                  className="h-[24px] w-[24px]"
                  alt="trash"
                />
                <a
                  className="cursor-pointer font-semibold sm:text-[18px] md:text-[20px] text-[22px] text-left text-teal_900 w-[auto]"
                  href="javascript:"
                >
                  MY WARDROBE TRY IT!
                </a>
              </div>
            </li>
            <li className="mt-[35px] mb-[8px] ml-[23px] sm:w-[100%] sm:my-[10px] sm:hidden w-[19%]">
              <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] sm:hidden items-start justify-start px-[20px] py-[10px] rounded-[10px]">
                <Img
                  src="images/img_notification.svg"
                  className="h-[24px] w-[24px]"
                  alt="notification"
                />
                <a
                  className="cursor-pointer font-semibold sm:text-[18px] md:text-[20px] text-[22px] text-left text-teal_900 w-[auto]"
                  href="javascript:"
                >
                  NOTIFICATION
                </a>
              </div>
            </li>
            <li className="mt-[35px] mb-[8px] ml-[26px] mr-[57px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:hidden w-[14%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-semibold sm:hidden leading-[normal] p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-teal_900 text-teal_900 w-[100%]"
                wrapClassName="border-[1px] border-bluegray_800 border-solid flex gap-[35px] md:w-[100%] px-[20px] py-[10px] rounded-[10px] sm:hidden w-[auto]"
                name="Search"
                placeholder="SEARCH"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[35px] sm:hidden my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#114338"
                      className="cursor-pointer ml-[10px] sm:hidden my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
            </li>
          </ul>
        </header>
        <Img
          src="images/img_logogreen11.png"
          className="h-[234px] sm:h-[auto] mt-[252px] object-cover md:w-[100%] w-[34%]"
          alt="LogoGREENTwelve"
        />
        <Text
          className="font-bold mt-[52px] text-left text-teal_900 w-[auto]"
          as="h2"
          variant="h2"
        >
          No. 1 Fashion Recommender Website
        </Text>
        <Img
          src="images/img_pageloadingsign_deep_orange_100.svg"
          className="h-[23px] mt-[79px] w-[auto]"
          alt="Pageloadingsign"
        />
        <footer className="bg-teal_900 flex items-center justify-center mt-[155px] md:px-[20px] w-[100%]">
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
                    onClick={handleNavigate9}
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
      </div>
    </>
  );
};

export default LandingPageThreePage;
