import React from "react";

import { Img, Text, Input, Button, List, SelectBox, Line } from "components";
import { CloseSVG } from "../../assets/images";

const SearchpagePage = () => {
  function handleNavigate17() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate23() {
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
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end max-w-[957px] mt-[64px] mx-[auto] outline outline-[2px] outline-deep_orange_100 p-[7px] md:px-[20px] rounded-[10px] w-[100%]">
          <Img
            src="images/img_location.svg"
            className="h-[24px] w-[24px]"
            alt="location"
          />
          <Text
            className="font-normal md:ml-[0] ml-[40px] not-italic text-bluegray_400 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            {" "}
            Search Styla e.g Black Pencil Heels
          </Text>
          <Button className="bg-teal_900 cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[482px] px-[15px] py-[10px] rounded-[7px] shadow-bs text-[16px] text-center text-white_A700 w-[132px]">
            SEARCH
          </Button>
        </div>
        <List
          className="flex-col md:gap-[40px] gap-[82px] grid items-center max-w-[1241px] mt-[96px] mx-[auto] md:px-[20px] w-[100%]"
          orientation="vertical"
        >
          <div className="flex flex-1 items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[33px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[97%]">
                <Text
                  className="font-bold text-bluegray_700 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  {" "}
                  Last Search - FASHION HAND BAGS
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[17px] md:mt-[0] mt-[3px] not-italic text-bluegray_600 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  - 2 days ago
                </Text>
                <SelectBox
                  className="font-normal leading-[normal] md:ml-[0] ml-[726px] not-italic pb-[3px] text-[16px] text-bluegray_700 text-left md:w-[100%] w-[9%]"
                  placeholderClassName="text-bluegray_700"
                  name="GroupFortyFour"
                  placeholder="See more"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] mr-[0] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[50px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_lastsearch1.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearchOne"
                  />
                  <Img
                    src="images/img_lastsearrch2.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearrchTwo"
                  />
                  <Img
                    src="images/img_lastsearch3.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearchThree"
                  />
                  <Img
                    src="images/img_lastsearch4.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearchFour"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-row items-start justify-start md:w-[100%] w-[23%]">
                    <Text
                      className="font-medium mt-[3px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Red Fashion Bag
                    </Text>
                    <Img
                      src="images/img_eye.svg"
                      className="h-[23px] ml-[23px] w-[24px]"
                      alt="eye"
                    />
                    <Text
                      className="font-medium ml-[5px] mt-[4px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      5k
                    </Text>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[23px] ml-[12px] w-[24px]"
                      alt="favorite"
                    />
                    <Text
                      className="font-medium ml-[2px] mt-[4px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      2.5k
                    </Text>
                    <Img
                      src="images/img_file_deep_orange_100.svg"
                      className="h-[24px] ml-[15px] w-[24px]"
                      alt="file"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-row items-start justify-center pr-[2px] md:w-[100%] w-[23%]">
                    <Text
                      className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Black Ameli Bag
                    </Text>
                    <Img
                      src="images/img_eye.svg"
                      className="h-[24px] ml-[21px] mt-[2px] w-[24px]"
                      alt="eye One"
                    />
                    <Text
                      className="font-medium ml-[5px] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3k
                    </Text>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[24px] ml-[12px] mt-[2px] w-[24px]"
                      alt="favorite One"
                    />
                    <Text
                      className="font-medium ml-[2px] mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1.5k
                    </Text>
                    <Img
                      src="images/img_file_deep_orange_100.svg"
                      className="h-[24px] mb-[2px] ml-[17px] w-[24px]"
                      alt="file One"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-row items-start justify-start pr-[4px] md:w-[100%] w-[23%]">
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-teal_900"
                      as="h5"
                      variant="h5"
                    >
                      Multi Colored <br />
                      Pattern bag
                    </Text>
                    <Img
                      src="images/img_eye.svg"
                      className="h-[24px] ml-[37px] w-[24px]"
                      alt="eye Two"
                    />
                    <Text
                      className="font-medium ml-[5px] mt-[3px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      2.1k
                    </Text>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[24px] ml-[9px] w-[24px]"
                      alt="favorite Two"
                    />
                    <Text
                      className="font-medium ml-[2px] mt-[3px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1000
                    </Text>
                    <Img
                      src="images/img_file_deep_orange_100.svg"
                      className="h-[24px] ml-[6px] w-[24px]"
                      alt="file Two"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-row items-start justify-between md:w-[100%] w-[23%]">
                    <Text
                      className="font-medium mt-[5px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Woven Orange Bag
                    </Text>
                    <Img
                      src="images/img_eye.svg"
                      className="h-[24px] w-[24px]"
                      alt="eye Three"
                    />
                    <Text
                      className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      2.1k
                    </Text>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[24px] w-[24px]"
                      alt="favorite Three"
                    />
                    <Text
                      className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1000
                    </Text>
                    <Img
                      src="images/img_file_deep_orange_100.svg"
                      className="h-[24px] w-[24px]"
                      alt="file Three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[19px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
                <Text
                  className="font-bold md:mt-[0] mt-[3px] text-bluegray_700 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  {" "}
                  Last Search - Trendy Office shoes
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[39px] md:mt-[0] mt-[5px] not-italic text-bluegray_600 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  - 1 week ago
                </Text>
                <SelectBox
                  className="font-normal leading-[normal] md:ml-[0] ml-[726px] not-italic pb-[3px] text-[16px] text-bluegray_700 text-left md:w-[100%] w-[9%]"
                  placeholderClassName="text-bluegray_700"
                  name="GroupFortyFive"
                  placeholder="See more"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] mr-[0] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[50px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_lastsearch1_276x270.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearchOne One"
                  />
                  <Img
                    src="images/img_lastsearrch2_276x269.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearrchTwo One"
                  />
                  <Img
                    src="images/img_lastsearch3_276x270.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearchThree One"
                  />
                  <Img
                    src="images/img_lastsearch4_276x270.png"
                    className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                    alt="lastsearchFour One"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-row items-center justify-end md:w-[100%] w-[23%]">
                    <div className="h-[51px] md:h-[53px] mt-[2px] relative w-[58%]">
                      <Text
                        className="absolute font-normal h-[100%] inset-y-[0] left-[0] my-[auto] not-italic text-left text-teal_900"
                        as="h5"
                        variant="h5"
                      >
                        Multi Colored Pattern 6-
                        <br />
                        inches Pencil Cover <br />
                        Heels
                      </Text>
                      <Img
                        src="images/img_eye.svg"
                        className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                        alt="eye One"
                      />
                    </div>
                    <Text
                      className="font-medium ml-[5px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      2.1k
                    </Text>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[24px] ml-[4px] w-[24px]"
                      alt="favorite One"
                    />
                    <Text
                      className="font-medium ml-[2px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1000
                    </Text>
                    <Img
                      src="images/img_file_deep_orange_100.svg"
                      className="h-[24px] ml-[5px] w-[24px]"
                      alt="file One"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-row items-end justify-center pr-[3px] pt-[3px] md:w-[100%] w-[23%]">
                    <div className="h-[36px] relative w-[58%]">
                      <Text
                        className="font-normal m-[auto] not-italic text-left text-teal_900"
                        as="h5"
                        variant="h5"
                      >
                        Glitter Gradient 4-inches <br />
                        Pencil Cover Heels
                      </Text>
                      <Img
                        src="images/img_eye.svg"
                        className="absolute bottom-[0] h-[21px] right-[3%] w-[auto]"
                        alt="eye One One"
                      />
                    </div>
                    <Text
                      className="font-medium mt-[18px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1.1k
                    </Text>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[21px] ml-[6px] mt-[15px] w-[auto]"
                      alt="favorite One One"
                    />
                    <Text
                      className="font-medium ml-[4px] mt-[18px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      700
                    </Text>
                    <Img
                      src="images/img_file_deep_orange_100.svg"
                      className="h-[23px] mt-[13px] mx-[7px] w-[24px]"
                      alt="file One One"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-row items-center justify-center pr-[3px] pt-[3px] md:w-[100%] w-[23%]">
                    <div className="flex relative w-[67%]">
                      <div className="flex h-[51px] md:h-[54px] justify-end my-[auto] w-[90%]">
                        <Text
                          className="font-normal mt-[auto] mx-[auto] not-italic text-left text-teal_900"
                          as="h5"
                          variant="h5"
                        >
                          Red Sandal heel- Feathers <br />& precious stone{" "}
                          <br />
                          details
                        </Text>
                        <Img
                          src="images/img_eye.svg"
                          className="absolute bottom-[24%] h-[24px] right-[7%] w-[24px]"
                          alt="eye Two One"
                        />
                      </div>
                      <Text
                        className="font-medium mb-[14px] ml-[-6px] mt-[auto] text-left text-teal_900 w-[auto] z-[1]"
                        as="h5"
                        variant="h5"
                      >
                        3.3k
                      </Text>
                    </div>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[24px] ml-[7px] w-[24px]"
                      alt="favorite Two One"
                    />
                    <Text
                      className="font-medium ml-[4px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1.2k
                    </Text>
                    <Img
                      src="images/img_file.svg"
                      className="h-[24px] ml-[7px] mr-[3px] w-[24px]"
                      alt="file Two One"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-row items-end justify-center pr-[3px] pt-[3px] md:w-[100%] w-[23%]">
                    <div className="h-[36px] relative w-[60%]">
                      <Text
                        className="font-normal m-[auto] not-italic text-left text-teal_900"
                        as="h5"
                        variant="h5"
                      >
                        Winter Fashion Nude Laced
                        <br />2 inches Boot Heels
                      </Text>
                      <Img
                        src="images/img_eye.svg"
                        className="absolute bottom-[0] h-[22px] right-[6%] w-[auto]"
                        alt="eye Three One"
                      />
                    </div>
                    <Text
                      className="font-medium mt-[17px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3.3k
                    </Text>
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[22px] ml-[6px] mt-[14px] w-[auto]"
                      alt="favorite Three One"
                    />
                    <Text
                      className="font-medium ml-[4px] mt-[17px] text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1.2k
                    </Text>
                    <Img
                      src="images/img_file.svg"
                      className="h-[24px] ml-[8px] mr-[3px] mt-[12px] w-[24px]"
                      alt="file Three One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
        <div className="flex items-center justify-start max-w-[1229px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
            <Text
              className="font-normal md:ml-[0] ml-[4px] not-italic text-bluegray_700 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Popular on Styla
            </Text>
            <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_1.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    WINTER INSPO
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_2.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    SPORTY LOOK
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_3.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    SUMMER FEEL
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_4.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    VACAY LOOKS
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_8.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    MONOCHROME
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_7.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    OFFICIAL FIT
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_6.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    EYEWEARS
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat bg-teal_900 flex flex-1 h-[128px] items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[40px] sm:px-[20px] rounded-[10px] shadow-bs w-[100%]"
                style={{ backgroundImage: "url('images/img_5.png')" }}
              >
                <div className="flex items-start justify-start p-[10px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    JEAN FASHION
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-teal_900 h-[260px] sm:h-[343px] md:h-[564px] mt-[83px] md:px-[20px] relative w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] h-[100%] items-start justify-start ml-[auto] mr-[84px] my-[auto] w-[74%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[21%]">
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
                  onClick={handleNavigate23}
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
            <div className="flex items-start justify-start md:ml-[0] ml-[19px] md:mt-[0] mt-[20px] p-[10px] w-[auto]">
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
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[47px] md:w-[100%] w-[44%]">
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
                <div className="bg-deep_orange_100 flex items-start justify-start p-[10px] rounded-[10px] w-[auto]">
                  <Text
                    className="font-bold text-left text-teal_900 w-[auto]"
                    variant="body2"
                  >
                    SUBSCRIBE NOW!
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-teal_900 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[47px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end mr-[37px] mt-[8px] md:w-[100%] w-[79%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[21%]">
                <div className="h-[102px] md:h-[75px] relative w-[100%]">
                  <Img
                    src="images/img_logowhite1.png"
                    className="absolute h-[75px] left-[0] object-cover top-[0] w-[70%]"
                    alt="LogoWHITEOne One"
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
                    alt="carbonlogoinstagram One"
                  />
                  <Img
                    src="images/img_clock.svg"
                    className="h-[16px] ml-[5px] w-[16px]"
                    alt="clock One"
                  />
                  <Img
                    src="images/img_twitter.svg"
                    className="h-[16px] ml-[5px] w-[16px]"
                    alt="twitter One"
                  />
                  <Img
                    src="images/img_mail.svg"
                    className="h-[16px] ml-[6px] w-[16px]"
                    alt="mail One"
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
              <div className="flex items-start justify-start md:ml-[0] ml-[19px] md:mt-[0] mt-[20px] p-[10px] w-[auto]">
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
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[47px] md:w-[100%] w-[44%]">
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
        </div>
      </div>
    </>
  );
};

export default SearchpagePage;
