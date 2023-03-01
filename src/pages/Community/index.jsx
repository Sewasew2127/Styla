import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const CommunityPage = () => {
  function handleNavigate10() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-outfit items-center justify-start mx-[auto] w-[100%]">
        <div className="md:h-[436px] h-[539px] md:px-[20px] relative w-[100%]">
          <div className="absolute bottom-[0] h-[436px] inset-x-[0] mx-[auto] w-[100%]">
            <div className="h-[436px] m-[auto] w-[100%]">
              <Img
                src="images/img_background.png"
                className="h-[436px] m-[auto] object-cover rounded-[40px] w-[100%]"
                alt="BACKGROUND"
              />
              <div className="absolute bg-white_A700 bottom-[0] flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-start justify-end mx-[auto] pt-[26px] sm:px-[20px] px-[26px] w-[100%]">
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    ACCOUNT
                  </Text>
                </div>
                <div className="flex items-start justify-start md:ml-[0] ml-[28px] p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    CHOOSE YOUR AVATAR
                  </Text>
                </div>
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[155px] md:ml-[0] ml-[28px] outline outline-deep_orange_100 p-[10px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-deep_orange_100 w-[auto]">
                  COMMUNITY
                </Button>
                <div className="flex items-start justify-start md:ml-[0] ml-[16px] p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    REWARD
                  </Text>
                </div>
                <Button className="bg-teal_900 cursor-pointer font-medium leading-[normal] mb-[8px] min-w-[142px] md:ml-[0] ml-[92px] mr-[56px] px-[15px] py-[10px] rounded-[7px] shadow-bs text-[16px] text-center text-white_A700 w-[auto]">
                  3 SAVED ITEMS
                </Button>
              </div>
            </div>
            <Img
              src="images/img_picture.png"
              className="absolute bottom-[3%] h-[229px] left-[7%] rounded-[50%] w-[229px]"
              alt="picture"
            />
          </div>
          <header className="absolute flex md:hidden inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]">
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
        </div>
        <List
          className="flex-col md:gap-[40px] gap-[74px] grid items-center max-w-[1086px] mt-[142px] mx-[auto] md:px-[20px] w-[100%]"
          orientation="vertical"
        >
          <div className="flex flex-1 items-center justify-start outline outline-deep_orange_100 p-[2px] shadow-bs w-[100%]">
            <div className="flex flex-col gap-[20px] items-start justify-start mb-[16px] md:w-[100%] w-[97%]">
              <Text
                className="font-bold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                FASHIONISTA - Join a Community of Fashion enthusiast.{" "}
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:ml-[0] ml-[3px] w-[100%]">
                <Text
                  className="font-normal not-italic text-left text-teal_900"
                  as="h2"
                  variant="h2"
                >
                  Network with individuals who have a keen fashion interest.
                  <br />
                  Be aware of the latest trends in clothing and be among the
                  first <br />
                  among your peers to try a new style or create your own style.
                </Text>
                <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] md:mt-[0] my-[11px] px-[15px] py-[10px] rounded-[7px] shadow-bs sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[253px]">
                  JOIN COMMUNITY
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-start outline outline-deep_orange_100 p-[2px] shadow-bs w-[100%]">
            <div className="flex flex-col gap-[20px] items-start justify-start mb-[16px] md:w-[100%] w-[97%]">
              <Text
                className="font-bold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                FASHION DESIGNERS - Join a Community of Fashion Creators
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:ml-[0] ml-[3px] w-[100%]">
                <Text
                  className="font-normal not-italic text-left text-teal_900"
                  as="h2"
                  variant="h2"
                >
                  Be a contributor to the Fashion world.
                  <br />
                  Create your unique style and share with the world at large.
                  <br />
                  Network with individuals who have a fashion taste and
                  colloborate.
                </Text>
                <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] md:mt-[0] my-[11px] px-[15px] py-[10px] rounded-[7px] shadow-bs sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[253px]">
                  JOIN COMMUNITY
                </Button>
              </div>
            </div>
          </div>
        </List>
        <footer className="bg-teal_900 flex items-center justify-center mt-[128px] md:px-[20px] w-[100%]">
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
                    onClick={handleNavigate10}
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

export default CommunityPage;
