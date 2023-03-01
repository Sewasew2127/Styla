import React from "react";

import { Img, Text, Input, Button, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const FashionviewpagePage = () => {
  function handleNavigate18() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-outfit items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
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
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1217px] mt-[96px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[64px] justify-start md:mt-[0] mt-[13px] md:w-[100%] w-[30%]">
              <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                <div className="h-[498px] outline outline-[3px] outline-deep_orange_100 relative rounded-[10px] w-[100%]">
                  <div className="absolute h-[497px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-deep_orange_100 rounded-[10px] w-[100%]"></div>
                  <Img
                    src="images/img_anka1.png"
                    className="absolute h-[498px] inset-[0] justify-center m-[auto] object-cover rounded-[10px] w-[92%]"
                    alt="ankaOne"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <div className="md:h-[46px] h-[50px] relative w-[74%]">
                    <div className="absolute bottom-[0] h-[46px] left-[0] w-[90%]">
                      <Text
                        className="font-normal m-[auto] not-italic text-left text-teal_900"
                        as="h2"
                        variant="h2"
                      >
                        African Prints
                        <br /> wear
                      </Text>
                      <Text
                        className="absolute font-normal not-italic right-[11%] text-left text-teal_900 top-[4%] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        2.1k
                      </Text>
                    </div>
                    <Img
                      src="images/img_eye.svg"
                      className="absolute h-[31px] right-[32%] top-[0] w-[32px]"
                      alt="eye"
                    />
                    <Img
                      src="images/img_favorite.svg"
                      className="absolute h-[31px] right-[0] top-[0] w-[32px]"
                      alt="favorite"
                    />
                  </div>
                  <Text
                    className="font-normal mt-[8px] not-italic text-left text-teal_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    100
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="h-[35px] w-[35px]"
                    alt="file"
                  />
                </div>
              </div>
              <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] min-w-[189px] md:ml-[0] ml-[66px] mr-[110px] p-[12px] rounded-[10px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-deep_orange_100 w-[auto]">
                Test More Outfit
              </Button>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[16px] items-center justify-start sm:w-[100%] w-[auto]">
              <div
                className="bg-cover bg-no-repeat flex h-[621px] items-center justify-start outline outline-[2px] outline-deep_orange_100 rounded-[8px] shadow-bs w-[100%]"
                style={{
                  backgroundImage: "url('images/img_vitualittinfroom.png')",
                }}
              >
                <Img
                  src="images/img_screenshot84.png"
                  className="h-[621px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                  alt="ScreenshotEightyFour"
                />
              </div>
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Text
                  className="font-semibold mt-[2px] text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Virtual Fitting Room{" "}
                </Text>
                <Img
                  src="images/img_file.svg"
                  className="h-[35px] w-[35px]"
                  alt="file One"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1227px] mt-[71px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex md:flex-1 items-center justify-end p-[17px] rounded-[15px] shadow-bs md:w-[100%] w-[53%]">
              <div className="flex flex-col gap-[18px] items-start justify-start mt-[11px] md:w-[100%] w-[94%]">
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Choose Body Shape
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 grid-cols-4 justify-center md:ml-[0] ml-[2px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_image.png"
                        className="h-[173px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                        alt="image"
                      />
                      <div className="flex flex-row items-center justify-center md:w-[100%] w-[73%]">
                        <div className="bg-gray_200 flex h-[11px] items-center justify-end mb-[22px] mt-[14px] p-[2px] rounded-[5px] w-[11px]">
                          <div className="bg-gray_400 h-[6px] rounded-[50%] w-[6px]"></div>
                        </div>
                        <div className="flex items-start justify-start ml-[3px] p-[10px] w-[auto]">
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
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_image_173x129.png"
                        className="h-[173px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                        alt="image One"
                      />
                      <div className="flex flex-row items-center justify-start ml-[auto] md:w-[100%] w-[87%]">
                        <div className="bg-gray_200 flex h-[11px] items-center justify-end mb-[22px] mt-[14px] p-[2px] rounded-[5px] w-[11px]">
                          <div className="bg-gray_400 h-[6px] rounded-[50%] w-[6px]"></div>
                        </div>
                        <div className="flex items-start justify-start ml-[3px] p-[10px] w-[auto]">
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
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[7px] justify-start w-[100%]">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[173px] md:h-[auto] object-cover rounded-[10px] w-[90%]"
                        alt="image Two"
                      />
                      <div className="flex flex-row items-center justify-evenly ml-[auto] md:w-[100%] w-[94%]">
                        <div className="bg-gray_200 flex h-[11px] items-center justify-end mb-[22px] mt-[14px] p-[2px] rounded-[5px] w-[11px]">
                          <div className="bg-deep_orange_100 h-[6px] rounded-[50%] w-[6px]"></div>
                        </div>
                        <div className="flex items-start justify-start p-[10px] w-[auto]">
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
                  <div className="flex flex-1 items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[7px] justify-start w-[100%]">
                      <Img
                        src="images/img_image_2.png"
                        className="h-[173px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                        alt="image Three"
                      />
                      <div className="flex flex-row items-center justify-start md:ml-[0] ml-[18px] md:w-[100%] w-[64%]">
                        <div className="bg-gray_200 flex h-[11px] items-center justify-end mb-[22px] mt-[14px] p-[2px] rounded-[5px] w-[11px]">
                          <div className="bg-gray_400 h-[6px] rounded-[50%] w-[6px]"></div>
                        </div>
                        <div className="flex items-start justify-start ml-[3px] p-[10px] w-[auto]">
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
                </List>
              </div>
            </div>
            <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex md:flex-1 items-center justify-start md:ml-[0] ml-[32px] p-[22px] sm:px-[20px] rounded-[15px] shadow-bs md:w-[100%] w-[23%]">
              <div className="flex flex-col gap-[28px] items-start justify-start mb-[17px] md:w-[100%] w-[97%]">
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Skin Color
                </Text>
                <List
                  className="flex-col gap-[13px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="bg-orange_100 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-deep_orange_101 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-orange_101 h-[29px] rounded-[5px] w-[29%]"></div>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="bg-red_200 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-orange_200 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-deep_orange_200 h-[29px] rounded-[5px] w-[29%]"></div>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="bg-orange_201 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-red_201 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-gray_600 h-[29px] rounded-[5px] w-[29%]"></div>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="bg-lime_900 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-red_400 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-lime_901 h-[29px] rounded-[5px] w-[29%]"></div>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="bg-gray_601 h-[29px] rounded-[5px] w-[29%]"></div>
                    <div className="bg-gray_800 h-[29px] outline outline-[3px] outline-deep_orange_100 rounded-[5px] w-[29%]"></div>
                    <div className="bg-gray_900 h-[29px] rounded-[5px] w-[29%]"></div>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex md:flex-1 flex-col items-start justify-start mb-[55px] md:ml-[0] ml-[32px] p-[27px] sm:px-[20px] rounded-[15px] shadow-bs md:w-[100%] w-[19%]">
              <Text
                className="font-semibold md:ml-[0] ml-[9px] text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Style
              </Text>
              <Button className="cursor-pointer font-semibold leading-[normal] md:ml-[0] ml-[9px] mt-[14px] outline outline-[1px] outline-deep_orange_100 p-[10px] rounded-[5px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-teal_900 w-[87px]">
                Trendy
              </Button>
              <div className="flex h-[46px] md:h-[auto] items-start justify-start md:ml-[0] ml-[9px] mt-[10px] p-[10px] w-[102px]">
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Comfort
                </Text>
              </div>
              <div className="flex h-[46px] md:h-[auto] items-start justify-start mb-[7px] md:ml-[0] ml-[9px] mt-[10px] p-[10px] w-[87px]">
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Classic
                </Text>
              </div>
            </div>
          </div>
          <footer className="bg-teal_900 flex items-center justify-center mt-[126px] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[47px] ml-[300px] mr-[84px] mt-[55px] w-[74%]">
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
                      onClick={handleNavigate18}
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
                      Be the first to know the trendy outfits via our
                      newsletters!
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
      </div>
    </>
  );
};

export default FashionviewpagePage;
