import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const CHOOSEYOURAVATARSUCCESSPage = () => {
  function handleNavigate8() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 font-outfit h-[1745px] mx-[auto] relative w-[100%]">
        <div className="absolute h-[436px] inset-x-[0] mx-[auto] md:px-[20px] top-[6%] w-[100%]">
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
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[263px] md:ml-[0] ml-[28px] outline outline-deep_orange_100 p-[10px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-deep_orange_100 w-[auto]">
                CHOOSE YOUR AVATAR
              </Button>
              <div className="flex items-start justify-start md:ml-[0] ml-[28px] p-[10px] w-[auto]">
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  COMMUNITY
                </Text>
              </div>
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
        <header className="absolute flex md:hidden inset-x-[0] items-center justify-center mx-[auto] md:px-[20px] top-[0] w-[100%]">
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
        <div className="absolute bottom-[22%] flex md:flex-col flex-row gap-[43px] inset-x-[0] items-center justify-start max-w-[1280px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex md:flex-1 items-center justify-start p-[31px] sm:px-[20px] rounded-[15px] shadow-bs md:w-[100%] w-[34%]">
            <div className="flex flex-col gap-[33px] items-start justify-start mb-[34px] md:w-[100%] w-[96%]">
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Choose Body Shape
              </Text>
              <div className="gap-[31px] grid grid-cols-2 justify-center min-h-[auto] md:ml-[0] ml-[5px] w-[99%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[9px] justify-start w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="h-[215px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                      alt="image"
                    />
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[61%]">
                      <div className="bg-gray_200 flex h-[14px] items-center justify-start my-[17px] p-[3px] rounded-[50%] w-[14px]">
                        <div className="bg-deep_orange_100 h-[7px] rounded-[3px] w-[7px]"></div>
                      </div>
                      <div className="flex items-start justify-start ml-[4px] p-[10px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-teal_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Apple
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[9px] justify-start w-[100%]">
                    <Img
                      src="images/img_image_173x129.png"
                      className="h-[215px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                      alt="image One"
                    />
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[73%]">
                      <div className="bg-gray_200 flex h-[14px] items-center justify-start my-[17px] p-[3px] rounded-[50%] w-[14px]">
                        <div className="bg-gray_400 h-[7px] rounded-[3px] w-[7px]"></div>
                      </div>
                      <div className="flex items-start justify-start ml-[4px] p-[10px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-teal_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Banana
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
                    <Img
                      src="images/img_image_1.png"
                      className="h-[215px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                      alt="image Two"
                    />
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[86%]">
                      <div className="bg-gray_200 flex h-[14px] items-center justify-start my-[17px] p-[3px] rounded-[50%] w-[14px]">
                        <div className="bg-gray_400 h-[7px] rounded-[3px] w-[7px]"></div>
                      </div>
                      <div className="flex items-start justify-start ml-[4px] p-[10px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-teal_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Hourglass
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[9px] justify-start w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="h-[215px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                      alt="image Three"
                    />
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[23px] md:w-[100%] w-[54%]">
                      <div className="bg-gray_200 flex h-[14px] items-center justify-start my-[17px] p-[3px] rounded-[50%] w-[14px]">
                        <div className="bg-gray_400 h-[7px] rounded-[3px] w-[7px]"></div>
                      </div>
                      <div className="flex items-start justify-start ml-[4px] p-[10px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-teal_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Pear
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[38px] items-start justify-start md:w-[100%] w-[63%]">
            <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between w-[100%]">
              <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex md:flex-1 items-center justify-start p-[23px] sm:px-[20px] rounded-[15px] shadow-bs md:w-[100%] w-[30%]">
                <div className="flex flex-col gap-[39px] items-start justify-start mb-[43px] mt-[11px] w-[100%]">
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Skin Color
                  </Text>
                  <List
                    className="flex-col gap-[19px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                      <div className="bg-orange_100 border-[3px] border-deep_orange_100 border-solid h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-deep_orange_101 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-orange_101 h-[42px] rounded-[5px] w-[29%]"></div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                      <div className="bg-red_200 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-orange_200 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-deep_orange_200 h-[42px] rounded-[5px] w-[29%]"></div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                      <div className="bg-orange_201 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-red_201 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-gray_600 h-[42px] rounded-[5px] w-[29%]"></div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                      <div className="bg-lime_900 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-red_400 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-lime_901 h-[42px] rounded-[5px] w-[29%]"></div>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                      <div className="bg-gray_601 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-gray_800 h-[42px] rounded-[5px] w-[29%]"></div>
                      <div className="bg-gray_900 h-[42px] rounded-[5px] w-[29%]"></div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[65%]">
                <Img
                  src="images/img_rectangle4.png"
                  className="h-[454px] md:h-[auto] object-cover rounded-[15px] w-[100%]"
                  alt="RectangleFour"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[84%]">
              <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex flex-col items-start justify-start p-[28px] sm:px-[20px] rounded-[15px] shadow-bs sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold md:ml-[0] ml-[9px] text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Style
                </Text>
                <Button className="cursor-pointer font-semibold leading-[normal] min-w-[90px] md:ml-[0] ml-[9px] mt-[15px] outline outline-[1px] outline-deep_orange_100 p-[10px] rounded-[5px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-teal_900 w-[auto]">
                  Trendy
                </Button>
                <div className="flex items-start justify-start md:ml-[0] ml-[9px] mt-[11px] p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Comfort
                  </Text>
                </div>
                <div className="flex items-start justify-start mb-[7px] md:ml-[0] ml-[9px] mt-[11px] p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Classic
                  </Text>
                </div>
              </div>
              <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] mb-[186px] sm:mt-[0] mt-[26px] px-[15px] py-[10px] rounded-[7px] shadow-bs sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[253px]">
                UPDATE AVATAR
              </Button>
            </div>
          </div>
        </div>
        <footer className="absolute bg-teal_900 bottom-[0] flex inset-x-[0] items-center justify-center mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex items-center justify-center w-[74%]">
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
                    onClick={handleNavigate8}
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
        <div className="absolute bg-gray_900_90 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[398px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mb-[372px] mt-[274px] p-[20px] md:px-[20px] rounded-[10px] md:w-[100%] w-[92%]">
            <Img
              src="images/img_arrowright_deep_orange_100.svg"
              className="h-[35px] w-[35px]"
              alt="arrowright"
            />
            <div className="flex h-[78px] items-center justify-start mt-[5px] outline outline-[2px] outline-deep_orange_100 p-[11px] rounded-[50%] w-[78px]">
              <Img
                src="images/img_checkmark_deep_orange_100.svg"
                className="h-[55px] w-[55px]"
                alt="checkmark"
              />
            </div>
            <Text
              className="font-bold mt-[46px] text-left text-teal_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Avatar Updated Successfully!
            </Text>
            <Button className="bg-teal_900 cursor-pointer font-medium leading-[normal] mb-[10px] mt-[23px] px-[15px] py-[10px] rounded-[7px] shadow-bs text-[16px] text-center text-white_A700 w-[263px]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CHOOSEYOURAVATARSUCCESSPage;
