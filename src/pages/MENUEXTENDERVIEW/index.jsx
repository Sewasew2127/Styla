import React from "react";

import {
  Img,
  Text,
  Input,
  Button,
  List,
  SelectBox,
  Line,
  CheckBox,
} from "components";
import { CloseSVG } from "../../assets/images";

const MENUEXTENDERVIEWPage = () => {
  function handleNavigate() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate2() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate6() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-start mx-[auto] pl-[194px] sm:pl-[20px] md:pl-[40px] py-[194px] w-[100%]">
        <div className="bg-white_A700 flex h-[2021px] md:h-[4600px] justify-end mb-[2579px] md:ml-[0] ml-[1640px] md:px-[20px] relative md:w-[100%] w-[19%]">
          <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-start justify-end mx-[auto] p-[26px] sm:px-[20px] shadow-bs top-[0] w-[100%]">
            <Img
              src="images/img_menu.svg"
              className="h-[37px] md:mt-[0] mt-[40px] w-[37px]"
              alt="menu"
            />
            <Img
              src="images/img_logogreen11.png"
              className="md:flex-1 h-[71px] sm:h-[auto] md:ml-[0] ml-[69px] md:mt-[0] mt-[20px] object-cover md:w-[100%] w-[11%]"
              alt="LogoGREENEleven"
            />
            <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[171px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
              <Img
                src="images/img_trash.svg"
                className="h-[24px] w-[24px]"
                alt="trash"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                MY WARDROBE TRY IT!
              </Text>
            </div>
            <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[23px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
              <Img
                src="images/img_notification.svg"
                className="h-[24px] w-[24px]"
                alt="notification"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                NOTIFICATION
              </Text>
            </div>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-semibold leading-[normal] p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-teal_900 text-teal_900 w-[100%]"
              wrapClassName="border-[1px] border-bluegray_800 border-solid flex gap-[35px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[26px] mr-[57px] mt-[35px] px-[20px] py-[10px] rounded-[10px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[auto]"
              name="Search"
              placeholder="SEARCH"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer mr-[35px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#114338"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
          </div>
          <div className="absolute flex flex-col md:gap-[40px] gap-[96px] inset-x-[0] items-center justify-start mx-[auto] top-[10%] w-[87%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end outline outline-[2px] outline-deep_orange_100 p-[7px] rounded-[10px] md:w-[100%] w-[78%]">
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
            <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <List
                className="flex-col md:gap-[40px] gap-[82px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start mr-[8px] my-[0] w-[100%]">
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
                        name="GroupSixtyOne"
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
                <div className="flex flex-1 items-center justify-start my-[0] w-[100%]">
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
                        name="GroupSixtyTwo"
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
              <div className="flex items-center justify-start w-[100%]">
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
            </div>
          </div>
          <div className="bg-teal_900 h-[260px] md:h-[481px] mt-[auto] mx-[auto] w-[100%]">
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
                    onClick={handleNavigate7}
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
                    <Button className="bg-deep_orange_100 cursor-pointer font-bold leading-[normal] min-w-[121px] p-[10px] rounded-[10px] text-[12px] sm:text-[1px] text-center text-teal_900 w-[auto]">
                      SUBSCRIBE NOW!
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-teal_900_7e flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[2px] w-[100%]">
            <div className="bg-white_A700 flex flex-col items-start justify-start mb-[720px] mt-[141px] p-[30px] sm:px-[20px] md:w-[100%] w-[30%]">
              <Img
                src="images/img_logogreen11.png"
                className="h-[55px] md:h-[auto] md:ml-[0] ml-[54px] object-cover sm:w-[100%] w-[32%]"
                alt="LogoGREENTwelve"
              />
              <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[89px] mt-[25px] md:w-[100%] w-[37%]">
                <Img
                  src="images/img_picture_134x134.png"
                  className="h-[134px] md:h-[auto] rounded-[50%] w-[134px]"
                  alt="picture"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[80%]">
                  <div className="flex h-[23px] md:h-[auto] items-center justify-center px-[10px] py-[2px] w-[106px]">
                    <Text
                      className="text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Lisa Greg
                    </Text>
                  </div>
                  <div className="flex h-[21px] md:h-[auto] items-center justify-center mt-[2px] px-[10px] py-[2px] w-[100px]">
                    <Text
                      className="font-semibold text-gray_400 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Fashionista
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="font-bold md:ml-[0] ml-[54px] mt-[28px] text-gray_400 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Main Menu
              </Text>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[15px] p-[10px] w-[auto]">
                <Img
                  src="images/img_home.svg"
                  className="h-[24px] w-[24px]"
                  alt="home"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_location.svg"
                  className="h-[24px] w-[24px]"
                  alt="location One"
                />
                <Text
                  className="font-semibold text-deep_orange_100 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Search
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_eye_deep_orange_100.svg"
                  className="h-[24px] w-[24px]"
                  alt="eye Two"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Fashion View
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_file_deep_orange_100.svg"
                  className="h-[24px] w-[24px]"
                  alt="file Two"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Saved Items
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_notification.svg"
                  className="h-[24px] w-[24px]"
                  alt="notification Two"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Notification
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_user_deep_orange_100.svg"
                  className="h-[24px] w-[24px]"
                  alt="user"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Profile
                </Text>
              </div>
              <Line className="bg-gray_301 h-[2px] md:ml-[0] ml-[54px] mt-[50px] w-[71%]" />
              <Text
                className="font-bold md:ml-[0] ml-[54px] mt-[14px] text-gray_400 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Extras
              </Text>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[15px] p-[10px] w-[auto]">
                <Img
                  src="images/img_settings.svg"
                  className="h-[24px] w-[24px]"
                  alt="settings"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Settings
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_trash_deep_orange_100_24x24.svg"
                  className="h-[24px] w-[24px]"
                  alt="trash One"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Contact Us
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start mb-[93px] md:ml-[0] ml-[54px] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_outlinelogout.svg"
                  className="h-[24px] w-[24px]"
                  alt="outlinelogout"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Log Out
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 h-[1156px] md:h-[4600px] mb-[3444px] md:ml-[0] ml-[174px] md:px-[20px] relative md:w-[100%] w-[19%]">
          <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
            <div className="flex flex-col justify-start w-[100%]">
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-end p-[26px] sm:px-[20px] shadow-bs w-[100%]">
                <Img
                  src="images/img_menu.svg"
                  className="h-[37px] md:mt-[0] mt-[40px] w-[37px]"
                  alt="menu One"
                />
                <Img
                  src="images/img_logogreen11.png"
                  className="md:flex-1 h-[71px] sm:h-[auto] md:ml-[0] ml-[69px] md:mt-[0] mt-[20px] object-cover md:w-[100%] w-[11%]"
                  alt="LogoGREENEleven One"
                />
                <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[171px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[24px] w-[24px]"
                    alt="trash Two"
                  />
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    MY WARDROBE TRY IT!
                  </Text>
                </div>
                <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[23px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                  <Img
                    src="images/img_notification.svg"
                    className="h-[24px] w-[24px]"
                    alt="notification Four"
                  />
                  <Text
                    className="font-semibold text-left text-teal_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    NOTIFICATION
                  </Text>
                </div>
                <Input
                  value={inputvalue1}
                  onChange={(e) => setInputvalue1(e?.target?.value)}
                  className="flex-1 font-semibold leading-[normal] p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-teal_900 text-teal_900 w-[100%]"
                  wrapClassName="border-[1px] border-bluegray_800 border-solid flex gap-[35px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[26px] mr-[57px] mt-[35px] px-[20px] py-[10px] rounded-[10px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[auto]"
                  name="Search Three"
                  placeholder="SEARCH"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[35px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue1?.length > 0 ? (
                      <CloseSVG
                        color="#114338"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue1("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
              <Button className="cursor-pointer font-semibold leading-[normal] min-w-[141px] md:ml-[0] ml-[650px] mt-[52px] outline outline-deep_orange_100 p-[10px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-teal_900 w-[auto]">
                Saved Items
              </Button>
              <Img
                src="images/img_lastsearch5.png"
                className="h-[276px] md:h-[auto] md:ml-[0] ml-[257px] mt-[91px] object-cover rounded-[10px] sm:w-[100%] w-[19%]"
                alt="lastsearchFive"
              />
              <Text
                className="font-normal md:ml-[0] ml-[654px] mt-[192px] not-italic text-gray_400 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                No new items found
              </Text>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] justify-start mx-[auto] top-[24%] w-[84%]">
            <div className="flex flex-row gap-[9px] items-center justify-end ml-[auto] md:w-[100%] w-[11%]">
              <Text
                className="font-normal not-italic text-left text-teal_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Add New Items
              </Text>
              <Img
                src="images/img_plus.svg"
                className="h-[24px] w-[24px]"
                alt="plus"
              />
            </div>
            <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[52px] mt-[31px] md:w-[100%] w-[57%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_lastsearch5_276x270.png"
                  className="sm:flex-1 h-[276px] md:h-[auto] object-cover rounded-[10px] sm:w-[100%] w-[auto]"
                  alt="lastsearchFive One"
                />
                <div className="flex sm:flex-1 items-center justify-start outline outline-[2px] outline-deep_orange_100 p-[5px] rounded-[9px] sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_whiteandblue1.png"
                    className="h-[264px] md:h-[auto] mb-[3px] object-cover rounded-[9px] w-[91%]"
                    alt="whiteandblueOne"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 items-center justify-end pl-[10px] pt-[10px] md:w-[100%] w-[50%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <CheckBox
                      className="font-bold leading-[normal] text-[18px] text-left text-teal_900"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="New Collection"
                      name="NewCollection"
                    ></CheckBox>
                    <div className="flex flex-row gap-[29px] items-center justify-start md:w-[100%] w-[36%]">
                      <Text
                        className="font-normal not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        2 Items
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        1 week
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 items-center justify-end md:w-[100%] w-[40%]">
                  <div className="flex flex-col items-start justify-start mt-[9px] md:w-[100%] w-[96%]">
                    <CheckBox
                      className="font-bold leading-[normal] text-[18px] text-left text-teal_900"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Untitled 1"
                      name="UntitledOne"
                    ></CheckBox>
                    <div className="flex flex-row gap-[38px] items-start justify-start md:w-[100%] w-[45%]">
                      <Text
                        className="font-normal not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        1 Item
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        2 days
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-red_100 h-[1px] mt-[44px] w-[100%]" />
          </div>
          <Button className="absolute bg-gray_400 bottom-[28%] cursor-pointer font-medium leading-[normal] min-w-[96px] px-[15px] py-[10px] right-[7%] rounded-[7px] shadow-bs text-[16px] text-center text-gray_602 w-[auto]">
            Organize
          </Button>
          <div className="absolute bg-teal_900 bottom-[0] flex inset-x-[0] items-end justify-end mx-[auto] p-[47px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end mr-[37px] mt-[8px] md:w-[100%] w-[79%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[21%]">
                <div className="h-[102px] md:h-[75px] relative w-[100%]">
                  <Img
                    src="images/img_logowhite1.png"
                    className="absolute h-[75px] left-[0] object-cover top-[0] w-[70%]"
                    alt="LogoWHITEOne Two"
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
                    alt="carbonlogoinstagram Two"
                  />
                  <Img
                    src="images/img_clock.svg"
                    className="h-[16px] ml-[5px] w-[16px]"
                    alt="clock Two"
                  />
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer h-[16px] ml-[5px] w-[16px]"
                    onClick={handleNavigate}
                    alt="twitter Two"
                  />
                  <Img
                    src="images/img_mail.svg"
                    className="h-[16px] ml-[6px] w-[16px]"
                    alt="mail Two"
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
                  <Button className="bg-deep_orange_100 cursor-pointer font-bold leading-[normal] min-w-[121px] p-[10px] rounded-[10px] text-[12px] sm:text-[1px] text-center text-teal_900 w-[auto]">
                    SUBSCRIBE NOW!
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-teal_900_7e flex h-[100%] inset-[0] items-start justify-center m-[auto] pr-[137px] sm:pr-[20px] md:pr-[40px] pt-[137px] w-[100%]">
            <div className="bg-white_A700 flex flex-col items-start justify-end pt-[30px] sm:px-[20px] px-[30px] md:w-[100%] w-[33%]">
              <Img
                src="images/img_logogreen11.png"
                className="h-[55px] md:h-[auto] md:ml-[0] ml-[54px] object-cover sm:w-[100%] w-[32%]"
                alt="LogoGREENTwelve One"
              />
              <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[89px] mt-[25px] md:w-[100%] w-[37%]">
                <Img
                  src="images/img_picture_134x134.png"
                  className="h-[134px] md:h-[auto] rounded-[50%] w-[134px]"
                  alt="picture One"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[80%]">
                  <div className="flex h-[23px] md:h-[auto] items-center justify-center px-[10px] py-[2px] w-[106px]">
                    <Text
                      className="text-left text-teal_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Lisa Greg
                    </Text>
                  </div>
                  <div className="flex h-[21px] md:h-[auto] items-center justify-center mt-[2px] px-[10px] py-[2px] w-[100px]">
                    <Text
                      className="font-semibold text-gray_400 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Fashionista
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="font-bold md:ml-[0] ml-[54px] mt-[28px] text-gray_400 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Main Menu
              </Text>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[15px] p-[10px] w-[auto]">
                <Img
                  src="images/img_home.svg"
                  className="h-[24px] w-[24px]"
                  alt="home Two"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_location.svg"
                  className="h-[24px] w-[24px]"
                  alt="location Two"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Search
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_eye_deep_orange_100.svg"
                  className="h-[24px] w-[24px]"
                  alt="eye Three"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Fashion View
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_file_deep_orange_100.svg"
                  className="h-[24px] w-[24px]"
                  alt="file Three"
                />
                <Text
                  className="font-semibold text-deep_orange_100 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Saved Items
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_notification.svg"
                  className="h-[24px] w-[24px]"
                  alt="notification Six"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Notification
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_user_deep_orange_100.svg"
                  className="h-[24px] w-[24px]"
                  alt="user One"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Profile
                </Text>
              </div>
              <Line className="bg-gray_301 h-[2px] md:ml-[0] ml-[54px] mt-[50px] w-[71%]" />
              <Text
                className="font-bold md:ml-[0] ml-[54px] mt-[14px] text-gray_400 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Extras
              </Text>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[15px] p-[10px] w-[auto]">
                <Img
                  src="images/img_settings.svg"
                  className="h-[24px] w-[24px]"
                  alt="settings Two"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Settings
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_trash_deep_orange_100_24x24.svg"
                  className="h-[24px] w-[24px]"
                  alt="trash Three"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Contact Us
                </Text>
              </div>
              <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[54px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
                <Img
                  src="images/img_outlinelogout.svg"
                  className="h-[24px] w-[24px]"
                  alt="outlinelogout One"
                />
                <Text
                  className="font-semibold text-left text-teal_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Log Out
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 h-[1024px] md:h-[4600px] mb-[3576px] md:ml-[0] ml-[174px] md:px-[20px] relative md:w-[100%] w-[19%]">
          <div className="h-[1024px] m-[auto] w-[100%]">
            <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[621px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-end p-[26px] sm:px-[20px] shadow-bs w-[100%]">
                  <Img
                    src="images/img_menu.svg"
                    className="h-[37px] md:mt-[0] mt-[40px] w-[37px]"
                    alt="menu Two"
                  />
                  <Img
                    src="images/img_logogreen11.png"
                    className="md:flex-1 h-[71px] sm:h-[auto] md:ml-[0] ml-[69px] md:mt-[0] mt-[20px] object-cover md:w-[100%] w-[11%]"
                    alt="LogoGREENEleven Two"
                  />
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[171px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                    <Img
                      src="images/img_trash.svg"
                      className="h-[24px] w-[24px]"
                      alt="trash Four"
                    />
                    <Text
                      className="font-semibold text-left text-teal_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      MY WARDROBE TRY IT!
                    </Text>
                  </div>
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[23px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                    <Img
                      src="images/img_notification.svg"
                      className="h-[24px] w-[24px]"
                      alt="notification Eight"
                    />
                    <Text
                      className="font-semibold text-left text-teal_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      NOTIFICATION
                    </Text>
                  </div>
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[26px] mr-[57px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                    <Img
                      src="images/img_search.svg"
                      className="h-[24px] w-[24px]"
                      alt="search Five"
                    />
                    <Text
                      className="font-semibold text-left text-teal_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      SEARCH
                    </Text>
                  </div>
                </div>
                <div className="bg-teal_900 flex items-end justify-end p-[47px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end mr-[37px] mt-[8px] md:w-[100%] w-[79%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[21%]">
                      <div className="h-[102px] md:h-[75px] relative w-[100%]">
                        <Img
                          src="images/img_logowhite1.png"
                          className="absolute h-[75px] left-[0] object-cover top-[0] w-[70%]"
                          alt="LogoWHITEOne Three"
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
                          alt="carbonlogoinstagram Three"
                        />
                        <Img
                          src="images/img_clock.svg"
                          className="h-[16px] ml-[5px] w-[16px]"
                          alt="clock Three"
                        />
                        <Img
                          src="images/img_twitter.svg"
                          className="common-pointer h-[16px] ml-[5px] w-[16px]"
                          onClick={handleNavigate1}
                          alt="twitter Three"
                        />
                        <Img
                          src="images/img_mail.svg"
                          className="h-[16px] ml-[6px] w-[16px]"
                          alt="mail Three"
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
                </div>
              </div>
            </div>
            <div className="absolute border-[1px] border-deep_orange_100 border-solid flex inset-x-[0] items-center justify-start mx-[auto] rounded-[10px] top-[19%] w-[89%]">
              <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mb-[7px] mt-[13px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[12px] items-center justify-start md:w-[100%] w-[auto]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[98%]">
                    <CheckBox
                      className="font-normal leading-[normal] not-italic text-[14px] sm:text-[1px] text-left text-teal_900"
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
                      alt="search Seven"
                    />
                    <Img
                      src="images/img_star.svg"
                      className="h-[24px] md:ml-[0] ml-[11px] w-[24px]"
                      alt="star"
                    />
                    <Img
                      src="images/img_trash_deep_orange_100.svg"
                      className="h-[24px] md:ml-[0] ml-[10px] w-[24px]"
                      alt="trash Five"
                    />
                    <Img
                      src="images/img_search_deep_orange_100.svg"
                      className="h-[24px] md:ml-[0] ml-[11px] w-[24px]"
                      alt="search Eight"
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
                          - Check out amazing fashion trends suitable for
                          summer. Click link to view-....{" "}
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
                          - Womenswear Fall/Winter 2023/2024 showroom session
                          .....
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
                          - Womenswear Fall/Winter 2023/2024 showroom session
                          .....
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
            <div className="absolute bg-teal_900_7e h-[1024px] inset-[0] justify-center m-[auto] w-[100%]"></div>
          </div>
          <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-start justify-end left-[0] pt-[30px] sm:px-[20px] px-[30px] w-[30%]">
            <Img
              src="images/img_logogreen11.png"
              className="h-[55px] md:h-[auto] md:ml-[0] ml-[52px] object-cover sm:w-[100%] w-[32%]"
              alt="LogoGREENTwelve Two"
            />
            <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[87px] mt-[25px] md:w-[100%] w-[38%]">
              <Img
                src="images/img_picture_134x134.png"
                className="h-[134px] md:h-[auto] rounded-[50%] w-[134px]"
                alt="picture Two"
              />
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[80%]">
                <div className="flex h-[23px] md:h-[auto] items-center justify-center px-[10px] py-[2px] w-[106px]">
                  <Text
                    className="text-left text-teal_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Lisa Greg
                  </Text>
                </div>
                <div className="flex h-[21px] md:h-[auto] items-center justify-center mt-[2px] px-[10px] py-[2px] w-[100px]">
                  <Text
                    className="font-semibold text-gray_400 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Fashionista
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-bold md:ml-[0] ml-[52px] mt-[28px] text-gray_400 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Main Menu
            </Text>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mr-[auto] mt-[15px] p-[10px] w-[auto]">
              <Img
                src="images/img_home.svg"
                className="h-[24px] w-[24px]"
                alt="home Four"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Home
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_location.svg"
                className="h-[24px] w-[24px]"
                alt="location Three"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Search
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_eye_deep_orange_100.svg"
                className="h-[24px] w-[24px]"
                alt="eye Four"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Fashion View
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_file_deep_orange_100.svg"
                className="h-[24px] w-[24px]"
                alt="file Four"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Saved Items
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_notification.svg"
                className="h-[24px] w-[24px]"
                alt="notification Eleven"
              />
              <Text
                className="font-semibold text-deep_orange_100 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Notification
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mr-[auto] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_user_deep_orange_100.svg"
                className="h-[24px] w-[24px]"
                alt="user Two"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Profile
              </Text>
            </div>
            <Line className="bg-gray_301 h-[2px] md:ml-[0] ml-[52px] mt-[50px] w-[71%]" />
            <Text
              className="font-bold md:ml-[0] ml-[52px] mt-[14px] text-gray_400 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Extras
            </Text>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mr-[auto] mt-[15px] p-[10px] w-[auto]">
              <Img
                src="images/img_settings.svg"
                className="h-[20px] w-[24px]"
                alt="settings Four"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Settings
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 h-[1515px] sm:h-[4600px] md:h-[4914px] mb-[3085px] md:ml-[0] ml-[244px] md:px-[20px] relative md:w-[100%] w-[19%]">
          <div className="h-[1515px] md:h-[1829px] m-[auto] w-[100%]">
            <div className="flex flex-col gap-[48px] h-[100%] items-center justify-start m-[auto] w-[100%]">
              <div className="md:h-[436px] h-[539px] relative w-[100%]">
                <div className="absolute bottom-[0] h-[436px] inset-x-[0] mx-[auto] w-[100%]">
                  <div className="h-[436px] m-[auto] w-[100%]">
                    <Img
                      src="images/img_background_436x1440.png"
                      className="h-[436px] m-[auto] object-cover rounded-[40px] w-[100%]"
                      alt="BACKGROUND"
                    />
                    <div className="absolute bg-white_A700 bottom-[0] flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-start justify-end mx-[auto] pt-[26px] sm:px-[20px] px-[26px] w-[100%]">
                      <div className="flex items-start justify-start outline outline-deep_orange_100 p-[10px] w-[auto]">
                        <Text
                          className="font-semibold text-deep_orange_100 text-left w-[auto]"
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
                      <div className="bg-teal_900 flex items-center justify-center mb-[8px] md:ml-[0] ml-[92px] mr-[56px] px-[15px] py-[10px] rounded-[7px] shadow-bs w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          3 SAVED ITEMS
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_picture.png"
                    className="absolute bottom-[3%] h-[229px] left-[7%] rounded-[50%] w-[229px]"
                    alt="picture Three"
                  />
                  <div className="absolute bg-teal_900 flex items-center justify-center px-[15px] py-[10px] right-[6%] rounded-[7px] shadow-bs top-[18%] w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      CHANGE HEADER PHOTO
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-start justify-end mx-[auto] p-[26px] sm:px-[20px] shadow-bs top-[0] w-[100%]">
                  <Img
                    src="images/img_menu.svg"
                    className="h-[37px] md:mt-[0] mt-[40px] w-[37px]"
                    alt="menu Three"
                  />
                  <Img
                    src="images/img_logogreen11.png"
                    className="md:flex-1 h-[71px] sm:h-[auto] md:ml-[0] ml-[69px] md:mt-[0] mt-[20px] object-cover md:w-[100%] w-[11%]"
                    alt="LogoGREENEleven Three"
                  />
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[171px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                    <Img
                      src="images/img_trash.svg"
                      className="h-[24px] w-[24px]"
                      alt="trash Six"
                    />
                    <Text
                      className="font-semibold text-left text-teal_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      MY WARDROBE TRY IT!
                    </Text>
                  </div>
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[23px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                    <Img
                      src="images/img_notification.svg"
                      className="h-[24px] w-[24px]"
                      alt="notification Thirteen"
                    />
                    <Text
                      className="font-semibold text-left text-teal_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      NOTIFICATION
                    </Text>
                  </div>
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[26px] mr-[57px] md:mt-[0] mt-[35px] px-[20px] py-[10px] rounded-[10px] w-[auto]">
                    <Img
                      src="images/img_search.svg"
                      className="h-[24px] w-[24px]"
                      alt="search Ten"
                    />
                    <Text
                      className="font-semibold text-left text-teal_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      SEARCH
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[25px] items-center justify-start md:w-[100%] w-[89%]">
                  <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex flex-col gap-[39px] justify-start p-[29px] sm:px-[20px] rounded-[15px] shadow-bs md:w-[100%] w-[58%]">
                    <Text
                      className="font-semibold md:ml-[0] ml-[22px] text-left text-teal_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Personal Details
                    </Text>
                    <div className="flex flex-col gap-[34px] items-center justify-start mb-[33px] md:ml-[0] ml-[12px] mr-[17px] md:w-[100%] w-[96%]">
                      <List
                        className="flex-col gap-[34px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 sm:flex-col flex-row sm:gap-[59px] items-center justify-between my-[0] w-[100%]">
                          <div className="flex items-start justify-start p-[10px] w-[auto]">
                            <Text
                              className="font-semibold text-left text-teal_900 w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              Name
                            </Text>
                          </div>
                          <div className="bg-white_A700 flex sm:flex-1 flex-row items-start justify-between p-[10px] rounded-[10px] shadow-bs sm:w-[100%] w-[79%]">
                            <Text
                              className="ml-[20px] mt-[4px] text-left text-teal_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              LISA GREG{" "}
                            </Text>
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[24px] mb-[4px] mr-[20px] w-[24px]"
                              alt="checkmark"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-between my-[0] w-[100%]">
                          <div className="flex items-start justify-start p-[10px] w-[auto]">
                            <Text
                              className="font-semibold text-left text-teal_900 w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              Username
                            </Text>
                          </div>
                          <div className="bg-white_A700 flex md:flex-1 flex-row items-start justify-between p-[10px] rounded-[10px] shadow-bs md:w-[100%] w-[79%]">
                            <Text
                              className="ml-[20px] text-left text-teal_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              emeraldlove
                            </Text>
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[24px] mb-[4px] mr-[20px] w-[24px]"
                              alt="checkmark One"
                            />
                          </div>
                        </div>
                      </List>
                      <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                        <div className="flex items-start justify-start p-[10px] w-[auto]">
                          <Text
                            className="font-semibold text-left text-teal_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Password
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-row items-start justify-between p-[7px] rounded-[10px] shadow-bs md:w-[100%] w-[79%]">
                          <Text
                            className="ml-[22px] text-left text-teal_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ***********
                          </Text>
                          <List
                            className="sm:flex-col flex-row gap-[18px] grid grid-cols-2 mb-[6px] mr-[22px] mt-[2px] w-[auto]"
                            orientation="horizontal"
                          >
                            <div className="flex h-[24px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_eye_gray_400.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye Five"
                              />
                            </div>
                            <div className="flex h-[24px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_checkmark.svg"
                                className="h-[24px] w-[24px]"
                                alt="checkmark Two"
                              />
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[55px] items-center justify-between w-[100%]">
                        <div className="flex items-start justify-start p-[10px] w-[auto]">
                          <Text
                            className="font-semibold text-left text-teal_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Status
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex sm:flex-1 flex-row items-start justify-between p-[10px] rounded-[10px] shadow-bs sm:w-[100%] w-[79%]">
                          <Text
                            className="ml-[20px] text-left text-teal_900 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Fashionnista
                          </Text>
                          <div className="flex h-[24px] items-center justify-start mb-[4px] mr-[20px] w-[24px]">
                            <Img
                              src="images/img_checkmark.svg"
                              className="h-[24px] w-[24px]"
                              alt="checkmark Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-deep_orange_100 border-solid flex flex-col gap-[25px] items-center justify-start p-[24px] sm:px-[20px] rounded-[15px] shadow-bs md:w-[100%] w-[41%]">
                    <Img
                      src="images/img_picture_294x294.png"
                      className="h-[294px] md:h-[auto] rounded-[50%] w-[294px]"
                      alt="picture Four"
                    />
                    <div className="flex items-center justify-start mb-[39px] md:w-[100%] w-[70%]">
                      <div className="bg-white_A700 flex flex-row items-start justify-between p-[9px] rounded-[10px] shadow-bs w-[100%]">
                        <Text
                          className="ml-[20px] mt-[6px] text-left text-teal_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Upload Photo
                        </Text>
                        <Img
                          src="images/img_plus.svg"
                          className="h-[24px] mr-[20px] mt-[4px] w-[24px]"
                          alt="plus One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-teal_900 flex h-[62px] md:h-[auto] items-center justify-center mt-[48px] px-[15px] py-[10px] rounded-[7px] shadow-bs w-[253px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    UPDATE PROFILE
                  </Text>
                </div>
                <div className="bg-teal_900 flex items-end justify-end mt-[104px] p-[47px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end mr-[37px] mt-[8px] md:w-[100%] w-[79%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[21%]">
                      <div className="h-[102px] md:h-[75px] relative w-[100%]">
                        <Img
                          src="images/img_logowhite1.png"
                          className="absolute h-[75px] left-[0] object-cover top-[0] w-[70%]"
                          alt="LogoWHITEOne Four"
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
                          alt="carbonlogoinstagram Four"
                        />
                        <Img
                          src="images/img_clock.svg"
                          className="h-[16px] ml-[5px] w-[16px]"
                          alt="clock Four"
                        />
                        <Img
                          src="images/img_twitter.svg"
                          className="common-pointer h-[16px] ml-[5px] w-[16px]"
                          onClick={handleNavigate2}
                          alt="twitter Four"
                        />
                        <Img
                          src="images/img_mail.svg"
                          className="h-[16px] ml-[6px] w-[16px]"
                          alt="mail Four"
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
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle12.png"
              className="absolute h-[1515px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
              alt="RectangleTwelve"
            />
          </div>
          <div className="absolute bg-white_A700 flex flex-col items-start justify-start left-[0] p-[30px] sm:px-[20px] top-[9%] w-[30%]">
            <Img
              src="images/img_logogreen11.png"
              className="h-[55px] md:h-[auto] md:ml-[0] ml-[52px] object-cover sm:w-[100%] w-[32%]"
              alt="LogoGREENTwelve Three"
            />
            <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[87px] mt-[25px] md:w-[100%] w-[38%]">
              <Img
                src="images/img_picture_134x134.png"
                className="h-[134px] md:h-[auto] rounded-[50%] w-[134px]"
                alt="picture Five"
              />
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[80%]">
                <div className="flex h-[23px] md:h-[auto] items-center justify-center px-[10px] py-[2px] w-[106px]">
                  <Text
                    className="text-left text-teal_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Lisa Greg
                  </Text>
                </div>
                <div className="flex h-[21px] md:h-[auto] items-center justify-center mt-[2px] px-[10px] py-[2px] w-[100px]">
                  <Text
                    className="font-semibold text-gray_400 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Fashionista
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-bold md:ml-[0] ml-[52px] mt-[28px] text-gray_400 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Main Menu
            </Text>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[15px] p-[10px] w-[auto]">
              <Img
                src="images/img_home.svg"
                className="h-[24px] w-[24px]"
                alt="home Six"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Home
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_location.svg"
                className="h-[24px] w-[24px]"
                alt="location Four"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Search
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_eye_deep_orange_100.svg"
                className="h-[24px] w-[24px]"
                alt="eye Six"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Fashion View
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_file_deep_orange_100.svg"
                className="h-[24px] w-[24px]"
                alt="file Five"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Saved Items
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_notification.svg"
                className="h-[24px] w-[24px]"
                alt="notification Fifteen"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Notification
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_user_deep_orange_100.svg"
                className="h-[24px] w-[24px]"
                alt="user Three"
              />
              <Text
                className="font-semibold text-deep_orange_100 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Profile
              </Text>
            </div>
            <Line className="bg-gray_301 h-[2px] md:ml-[0] ml-[52px] mt-[50px] w-[71%]" />
            <Text
              className="font-bold md:ml-[0] ml-[52px] mt-[14px] text-gray_400 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Extras
            </Text>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[15px] p-[10px] w-[auto]">
              <Img
                src="images/img_settings.svg"
                className="h-[24px] w-[24px]"
                alt="settings Six"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Settings
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start md:ml-[0] ml-[52px] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_trash_deep_orange_100_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="trash Seven"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Contact Us
              </Text>
            </div>
            <div className="flex flex-row gap-[35px] items-start justify-start mb-[93px] md:ml-[0] ml-[52px] mt-[16px] p-[10px] w-[auto]">
              <Img
                src="images/img_outlinelogout.svg"
                className="h-[24px] w-[24px]"
                alt="outlinelogout Two"
              />
              <Text
                className="font-semibold text-left text-teal_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                Log Out
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MENUEXTENDERVIEWPage;
