import React from "react";

import { Img, Text, Input, CheckBox, List, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";

const NotificationspagePage = () => {
  function handleNavigate20() {
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
        <div className="border-[1px] border-deep_orange_100 border-solid flex items-center justify-start max-w-[1276px] mt-[52px] mx-[auto] md:px-[20px] rounded-[10px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mb-[7px] mt-[13px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[12px] items-center justify-start md:w-[100%] w-[auto]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[98%]">
                <CheckBox
                  className="font-normal leading-[normal] not-italic text-[14px] text-left text-teal_900"
                  inputClassName="border-[1px] border-deep_orange_100 border-solid h-[17px] mr-[5px] w-[17px]"
                  label="Select all"
                  name="Selectall"
                ></CheckBox>
                <div className="h-[24px] md:ml-[0] ml-[12px] relative md:w-[100%] w-[8%]">
                  <div className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[83%]">
                    <Text
                      className="absolute font-normal not-italic right-[0] text-left text-teal_900 top-[0] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1-9 of 20
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                  <Img
                    src="images/img_arrowleft.svg"
                    className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] w-[24px]"
                    alt="arrowleft"
                  />
                </div>
                <div className="flex items-center justify-end md:ml-[0] ml-[343px] p-[9px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Notification
                  </Text>
                </div>
                <Img
                  src="images/img_search.svg"
                  className="h-[24px] md:ml-[0] ml-[406px] w-[24px]"
                  alt="search One"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-[24px] md:ml-[0] ml-[11px] w-[24px]"
                  alt="star"
                />
                <Img
                  src="images/img_trash_deep_orange_100.svg"
                  className="h-[24px] md:ml-[0] ml-[10px] w-[24px]"
                  alt="trash One"
                />
                <Img
                  src="images/img_search_deep_orange_100.svg"
                  className="h-[24px] md:ml-[0] ml-[11px] w-[24px]"
                  alt="search Two"
                />
              </div>
              <div className="flex flex-col gap-[17px] items-end justify-start w-[100%]">
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-bluegray_50 border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star One"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Support-Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[62px] md:mt-[0] mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      New login attempt
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[13px] md:mt-[0] mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - We just noticed a new login attempt in a new device
                      Windows PC Celeron; Location; Ab...
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[57px] md:mt-[0] mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      4:15pm
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Two"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[137px] md:mt-[0] mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Summer is coming!
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[8px] md:mt-[0] mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - Check out amazing fashion trends suitable for summer.
                      Click link to view-....{" "}
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[150px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Feb 24
                    </Text>
                  </div>
                  <div className="bg-bluegray_50 border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Three"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Bubble-Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[71px] md:mt-[0] mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Valentine and Love inspired outfit suitable for that
                      special dinner party.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[9px] md:mt-[0] mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - Love is in the air! Happy Valentin....
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[52px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Feb 14
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Four"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Community-Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[34px] md:mt-[0] mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Fashionista Community
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[10px] md:mt-[0] mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - @Twinkle liked your comment “Color needs to be
                      considered when choosing an ou.....
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[49px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Feb 12
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Five"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[137px] md:mt-[0] mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      It’s snowing Pants Season.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[11px] md:mt-[0] mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - Beautiful Pants Patterns waiting to be tested by you
                      avatar.....
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[189px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Feb 03
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Six"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[137px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Paris Fashion Week Fall/Winter 2023 Ended
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[28px] md:mt-[0] mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - Have a quick look at designer brands modeled on the
                      run.....
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[55px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Feb 01
                    </Text>
                  </div>
                  <div className="bg-bluegray_50 border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Seven"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[137px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Gucci Fashion Week 2023{" "}
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[9px] md:mt-[0] mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - The sensory impact of the #GucciFW23 collection is
                      amplified with bold tones .....
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[62px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Jan 28
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Eight"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[137px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Paris Fashion Week Fall/Winter 2023 Schedule.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[3px] md:mt-[0] mt-[5px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - Womenswear Fall/Winter 2023/2024 showroom session .....
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[55px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Jan 08
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-deep_orange_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] p-[9px] rounded-[10px] w-[100%]">
                    <div className="border-[1px] border-gray_400 border-solid h-[17px] md:ml-[0] ml-[25px] md:mt-[0] mt-[2px] w-[17px]"></div>
                    <Img
                      src="images/img_star_gray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[28px] md:mt-[0] my-[2px] w-[24px]"
                      alt="star Nine"
                    />
                    <Text
                      className="md:ml-[0] ml-[21px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Styla
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[137px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Paris Fashion Week Fall/Winter 2023 Schedule.
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[3px] md:mt-[0] mt-[5px] not-italic text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      - Womenswear Fall/Winter 2023/2024 showroom session .....
                    </Text>
                    <Text
                      className="font-bold md:ml-[0] ml-[55px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Jan 01
                    </Text>
                  </div>
                </List>
                <div className="flex flex-row sm:gap-[40px] items-center justify-between ml-[auto] md:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-left text-teal_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Terms Support Privacy
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-teal_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Last account activity: 1 hour ago.
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray_300 h-[150px] mb-[339px] md:mt-[0] mt-[38px] w-[1%]"></div>
          </div>
        </div>
        <footer className="bg-teal_900 flex items-center justify-center mt-[19px] md:px-[20px] w-[100%]">
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
                    onClick={handleNavigate20}
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

export default NotificationspagePage;
