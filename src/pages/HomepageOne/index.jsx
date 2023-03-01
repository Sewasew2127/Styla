import React from "react";

import { Img, Text, Input, Button, Line, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";

const HomepageOnePage = () => {
  function handleNavigate22() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-outfit items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col justify-end w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[26px] sm:px-[20px] shadow-bs w-[100%]">
              <div className="header-row mt-[40px] mb-[14px]">
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
              <Img
                src="images/img_logogreen11.png"
                className="md:flex-1 h-[71px] sm:h-[auto] sm:hidden md:ml-[0] ml-[53px] md:mt-[0] mt-[20px] object-cover md:w-[100%] w-[13%]"
                alt="LogoGREENEleven"
              />
              <div className="flex sm:hidden md:ml-[0] ml-[115px] mr-[22px] relative md:w-[100%] w-[63%]">
                <div className="flex my-[auto] sm:w-[100%] w-[78%]">
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-center justify-start my-[auto] px-[20px] py-[10px] rounded-[10px] w-[auto]">
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
                  <div className="border-[1px] border-bluegray_800 border-solid flex flex-row gap-[35px] items-center justify-start ml-[-19px] my-[auto] px-[20px] py-[10px] rounded-[10px] w-[auto] z-[1]">
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
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-semibold leading-[normal] ml-[-18px] p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-teal_900 text-teal_900 w-[100%] z-[1]"
                  wrapClassName="border-[1px] border-bluegray_800 border-solid flex gap-[35px] inset-y-[0] ml-[undefinedpx] my-[auto] px-[20px] py-[10px] right-[0] rounded-[10px] w-[auto] z-[1]"
                  name="Search"
                  placeholder="SEARCH"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[35px] right-[5%] ml-[undefinedpx] z-[1] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#114338"
                        className="cursor-pointer ml-[undefinedpx] left-[1%] z-[1] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
            </div>
          </header>
          <Button className="border-b-[3px] border-deep_orange_100 border-solid cursor-pointer font-bold leading-[normal] min-w-[319px] md:ml-[0] ml-[173px] mr-[755px] mt-[28px] p-[8px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-teal_900 w-[auto]">
            Trends Recommended For You
          </Button>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end md:ml-[0] ml-[173px] mr-[82px] mt-[35px] md:px-[20px] md:w-[100%] w-[80%]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
              <div className="bg-white_A700 border-[3px] border-deep_orange_100 border-solid flex items-center justify-start p-[18px] rounded-[10px] shadow-bs md:w-[100%] w-[98%]">
                <div className="bg-white_A700 flex items-center justify-start pb-[10px] md:w-[100%] w-[79%]">
                  <Img
                    src="images/img_screenshot41.png"
                    className="h-[267px] md:h-[auto] object-cover w-[100%]"
                    alt="ScreenshotFortyOne"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Text
                  className="font-normal mt-[4px] not-italic text-left text-teal_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Comfy Silky Top{" "}
                </Text>
                <Img
                  src="images/img_eye.svg"
                  className="h-[24px] w-[24px]"
                  alt="eye"
                />
                <Text
                  className="font-normal mt-[3px] not-italic text-left text-teal_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  1.7k
                </Text>
                <Img
                  src="images/img_favorite.svg"
                  className="h-[24px] w-[24px]"
                  alt="favorite"
                />
                <Text
                  className="font-normal mt-[3px] not-italic text-left text-teal_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  500
                </Text>
                <Img
                  src="images/img_file.svg"
                  className="h-[24px] w-[24px]"
                  alt="file"
                />
              </div>
            </div>
            <div className="flex relative md:w-[100%] w-[75%]">
              <div className="flex my-[auto] sm:w-[100%] w-[66%]">
                <div className="flex items-center justify-start my-[auto] w-[53%]">
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                    <div className="h-[321px] outline outline-[3px] outline-deep_orange_100 relative rounded-[10px] shadow-bs w-[100%]">
                      <div className="h-[318px] m-[auto] outline outline-[3px] outline-deep_orange_100 rounded-[10px] shadow-bs w-[100%]"></div>
                      <Img
                        src="images/img_frame51.png"
                        className="absolute h-[321px] inset-[0] justify-center m-[auto] object-cover rounded-[10px] w-[100%]"
                        alt="FrameFiftyOne"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Plazo Pants
                      </Text>
                      <Img
                        src="images/img_eye.svg"
                        className="h-[24px] w-[25px]"
                        alt="eye One"
                      />
                      <Text
                        className="font-normal not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        1.7k
                      </Text>
                      <Img
                        src="images/img_favorite_deep_orange_100.svg"
                        className="h-[24px] w-[25px]"
                        alt="favorite One"
                      />
                      <Text
                        className="font-normal not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        500
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[24px] w-[24px]"
                        alt="file One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start ml-[-12px] my-[auto] w-[51%] z-[1]">
                  <div className="flex flex-col gap-[9px] items-start justify-center w-[auto]">
                    <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                      <div className="flex items-center justify-start outline outline-[2px] outline-deep_orange_100 px-[6px] rounded-[10px] shadow-bs w-[100%]">
                        <Img
                          src="images/img_goldandwhite1.png"
                          className="h-[317px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="goldandwhiteOne"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Text
                        className="font-normal mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Goldy Set
                      </Text>
                      <div className="flex ml-[30px] relative w-[20%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] my-[auto] w-[24px]"
                          alt="eye Two"
                        />
                        <Text
                          className="font-normal ml-[-1px] my-[auto] not-italic text-left text-teal_900 w-[auto] z-[1]"
                          as="h5"
                          variant="h5"
                        >
                          1.2k
                        </Text>
                      </div>
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[24px] ml-[14px] mt-[3px] w-[24px]"
                        alt="favorite Two"
                      />
                      <Text
                        className="font-normal ml-[3px] mt-[5px] not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        300
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[24px] mb-[3px] ml-[14px] w-[24px]"
                        alt="file Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start ml-[-13px] my-[auto] w-[37%] z-[1]">
                <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start outline outline-[3px] outline-deep_orange_100 pt-[9px] px-[9px] rounded-[10px] w-[100%]">
                    <Img
                      src="images/img_greenandgold1.png"
                      className="h-[309px] md:h-[auto] object-cover rounded-[10px] w-[78%]"
                      alt="greenandgoldOne"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start w-[100%]">
                    <Text
                      className="font-normal mt-[7px] not-italic text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Wrap Dress
                    </Text>
                    <Img
                      src="images/img_eye.svg"
                      className="h-[24px] ml-[26px] mt-[3px] w-[auto]"
                      alt="eye Three"
                    />
                    <Text
                      className="font-normal ml-[3px] mt-[6px] not-italic text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1.8k
                    </Text>
                    <Img
                      src="images/img_favorite_deep_orange_100.svg"
                      className="h-[24px] ml-[22px] mt-[3px] w-[auto]"
                      alt="favorite Three"
                    />
                    <Text
                      className="font-normal ml-[3px] mt-[6px] not-italic text-left text-teal_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      800
                    </Text>
                    <Img
                      src="images/img_file.svg"
                      className="h-[24px] mb-[3px] ml-[13px] w-[24px]"
                      alt="file Three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end md:ml-[0] ml-[171px] mr-[92px] mt-[28px] md:px-[20px] md:w-[100%] w-[79%]">
            <div className="flex items-center justify-start md:w-[100%] w-[25%]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <div className="flex items-center justify-start outline outline-[3px] outline-deep_orange_100 sm:px-[20px] px-[30px] rounded-[10px] shadow-bs md:w-[100%] w-[98%]">
                  <div className="flex flex-row items-start justify-start md:w-[100%] w-[99%]">
                    <div className="h-[310px] relative w-[99%]">
                      <div className="h-[310px] m-[auto] w-[100%]">
                        <div className="h-[310px] m-[auto] w-[100%]">
                          <div className="h-[310px] m-[auto] w-[100%]">
                            <div className="h-[310px] m-[auto] w-[100%]">
                              <div className="h-[310px] m-[auto] w-[100%]">
                                <div className="h-[310px] m-[auto] w-[100%]">
                                  <div className="absolute h-[310px] inset-[0] justify-center m-[auto] w-[100%]">
                                    <div className="h-[310px] m-[auto] w-[100%]">
                                      <div className="h-[310px] m-[auto] w-[100%]">
                                        <div className="h-[310px] m-[auto] w-[100%]">
                                          <div className="h-[310px] m-[auto] w-[100%]">
                                            <div className="h-[310px] m-[auto] w-[100%]">
                                              <Img
                                                src="images/img_screenshot6.png"
                                                className="h-[310px] m-[auto] object-cover w-[100%]"
                                                alt="ScreenshotSix"
                                              />
                                              <Img
                                                src="images/img_vector3.svg"
                                                className="absolute bottom-[41%] h-[1px] right-[7%] w-[auto]"
                                                alt="VectorThree"
                                              />
                                            </div>
                                            <Img
                                              src="images/img_lightbulb.svg"
                                              className="absolute bottom-[37%] h-[34px] right-[8%] w-[auto]"
                                              alt="lightbulb"
                                            />
                                          </div>
                                          <Line className="absolute bg-white_A700 bottom-[40%] h-[18px] right-[13%] w-[4px]" />
                                        </div>
                                        <Img
                                          src="images/img_vector6.svg"
                                          className="absolute bottom-[39%] h-[5px] right-[14%] w-[6px]"
                                          alt="VectorSix"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_vector7.svg"
                                        className="absolute bottom-[39%] h-[1px] right-[18%] w-[1px]"
                                        alt="VectorSeven"
                                      />
                                      <div className="absolute bottom-[40%] flex flex-row gap-[16px] items-start justify-between right-[5%] w-[13%]">
                                        <Img
                                          src="images/img_vector8.svg"
                                          className="h-[2px] w-[2px]"
                                          alt="VectorEight"
                                        />
                                        <Img
                                          src="images/img_vector9.svg"
                                          className="h-[10px] w-[auto]"
                                          alt="VectorNine"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_vector10.svg"
                                      className="absolute bottom-[38%] h-[12px] right-[2%] w-[auto]"
                                      alt="VectorTen"
                                    />
                                  </div>
                                  <Line className="absolute bg-white_A700 bottom-[43%] h-[18px] right-[0] w-[1px]" />
                                  <Line className="absolute bg-white_A700 bottom-[41%] h-[28px] right-[0] w-[4px]" />
                                </div>
                                <div className="absolute flex flex-row h-[max-content] inset-y-[0] items-start justify-center my-[auto] right-[0] w-[2%]">
                                  <Img
                                    src="images/img_vector13.svg"
                                    className="h-[3px] w-[auto]"
                                    alt="VectorThirteen"
                                  />
                                  <Img
                                    src="images/img_vector14.svg"
                                    className="h-[4px] w-[auto]"
                                    alt="VectorFourteen"
                                  />
                                </div>
                              </div>
                              <Img
                                src="images/img_vector15.svg"
                                className="absolute bottom-[36%] h-[14px] right-[0] w-[auto]"
                                alt="VectorFifteen"
                              />
                            </div>
                            <div className="absolute bottom-[34%] flex flex-col items-start justify-start right-[0] w-[2%]">
                              <Line className="bg-white_A700 h-[15px] w-[2px]" />
                              <Img
                                src="images/img_vector17.svg"
                                className="h-[8px] w-[auto]"
                                alt="VectorSeventeen"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-row items-end justify-center right-[0] w-[2%]">
                            <div className="flex flex-col items-center justify-start mb-[21px] mt-[121px] w-[34%]">
                              <Img
                                src="images/img_vector27.svg"
                                className="h-[6px] w-[auto]"
                                alt="VectorTwentySeven"
                              />
                              <Img
                                src="images/img_vector26.svg"
                                className="h-[4px] w-[auto]"
                                alt="VectorTwentySix"
                              />
                            </div>
                            <Img
                              src="images/img_vector24.svg"
                              className="h-[5px] mb-[11px] mt-[138px] w-[auto]"
                              alt="VectorTwentyFour"
                            />
                            <Img
                              src="images/img_vector25.svg"
                              className="h-[2px] mb-[17px] mt-[134px] w-[1px]"
                              alt="VectorTwentyFive"
                            />
                            <div className="flex flex-col items-start justify-start w-[34%]">
                              <Img
                                src="images/img_vector20.svg"
                                className="h-[7px] w-[auto]"
                                alt="VectorTwenty"
                              />
                              <Img
                                src="images/img_vector19.svg"
                                className="h-[10px] w-[auto]"
                                alt="VectorNineteen"
                              />
                              <Img
                                src="images/img_vector18.svg"
                                className="h-[9px] mt-[26px] w-[auto]"
                                alt="VectorEighteen"
                              />
                              <Img
                                src="images/img_vector23.svg"
                                className="h-[2px] mt-[88px] w-[1px]"
                                alt="VectorTwentyThree"
                              />
                              <Img
                                src="images/img_vector22.svg"
                                className="h-[2px] w-[1px]"
                                alt="VectorTwentyTwo"
                              />
                              <Img
                                src="images/img_vector21.svg"
                                className="h-[3px] w-[auto]"
                                alt="VectorTwentyOne"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_vector28.svg"
                          className="absolute bottom-[11%] h-[12px] right-[1%] w-[auto]"
                          alt="VectorTwentyEight"
                        />
                      </div>
                      <div className="absolute bottom-[4%] flex flex-col items-start justify-start right-[0] w-[3%]">
                        <Img
                          src="images/img_vector29.svg"
                          className="h-[6px] md:ml-[0] ml-[2px] w-[auto]"
                          alt="VectorTwentyNine"
                        />
                        <Img
                          src="images/img_vector30.svg"
                          className="h-[2px] md:ml-[0] ml-[4px] mt-[3px] w-[1px]"
                          alt="VectorThirty"
                        />
                        <Line className="bg-white_A700 h-[15px] w-[5px]" />
                        <Img
                          src="images/img_vector33.svg"
                          className="h-[8px] md:ml-[0] ml-[4px] w-[auto]"
                          alt="VectorThirtyThree"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_vector3.svg"
                      className="h-[1px] mt-[266px] w-[auto]"
                      alt="VectorThirtyOne"
                    />
                    <Img
                      src="images/img_vector3.svg"
                      className="h-[2px] mt-[298px] w-[3px]"
                      alt="VectorThirtyFour"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-normal mt-[2px] not-italic text-left text-teal_900"
                    as="h6"
                    variant="h6"
                  >
                    Flowery Formal
                    <br /> wear
                  </Text>
                  <Img
                    src="images/img_eye.svg"
                    className="h-[21px] w-[21px]"
                    alt="eye Four"
                  />
                  <Text
                    className="font-medium mt-[2px] text-left text-teal_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    2.1k
                  </Text>
                  <Img
                    src="images/img_favorite.svg"
                    className="h-[21px] w-[21px]"
                    alt="favorite Four"
                  />
                  <Text
                    className="font-medium mt-[2px] text-left text-teal_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    100
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="h-[24px] w-[24px]"
                    alt="file Four"
                  />
                </div>
              </div>
            </div>
            <div className="h-[360px] md:ml-[0] ml-[5px] relative md:w-[100%] w-[75%]">
              <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                    <div className="flex items-center justify-start outline outline-[2px] outline-deep_orange_100 rounded-[9px] w-[100%]">
                      <Img
                        src="images/img_whiteandblue1.png"
                        className="h-[304px] md:h-[auto] object-cover rounded-[9px] w-[100%]"
                        alt="whiteandblueOne"
                      />
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-left text-teal_900"
                          as="h6"
                          variant="h6"
                        >
                          Blue pep & White <br />
                          Pants
                        </Text>
                        <Img
                          src="images/img_eye.svg"
                          className="h-[21px] ml-[22px] w-[21px]"
                          alt="eye Five"
                        />
                        <Text
                          className="font-medium ml-[4px] mt-[2px] text-left text-teal_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          2.1k
                        </Text>
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[21px] ml-[3px] w-[21px]"
                          alt="favorite Five"
                        />
                        <Text
                          className="font-medium mt-[2px] text-left text-teal_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          1000
                        </Text>
                        <Img
                          src="images/img_file.svg"
                          className="h-[24px] ml-[9px] w-[24px]"
                          alt="file Five"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] h-[360px] md:h-[auto] items-start justify-start w-[auto]">
                    <div className="flex items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[28px] sm:px-[20px] rounded-[11px] w-[100%]">
                      <Img
                        src="images/img_brownb1.png"
                        className="h-[252px] md:h-[auto] object-cover rounded-[11px] w-[93%]"
                        alt="BrownBOne"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Text
                        className="font-normal mt-[5px] not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Peplum Top
                      </Text>
                      <Img
                        src="images/img_eye.svg"
                        className="h-[24px] w-[25px]"
                        alt="eye Six"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        1.7k
                      </Text>
                      <Img
                        src="images/img_favorite_deep_orange_100.svg"
                        className="h-[24px] w-[25px]"
                        alt="favorite Six"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-left text-teal_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        500
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[24px] w-[24px]"
                        alt="file Six"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[14px] h-[100%] inset-[0] items-center justify-center m-[auto] pb-[4px] pr-[4px] w-[36%]">
                <div className="flex items-center justify-start md:w-[100%] w-[98%]">
                  <div className="h-[309px] outline outline-[1px] outline-deep_orange_100 relative rounded-[10px] shadow-bs w-[100%]">
                    <div className="h-[308px] m-[auto] outline outline-[1px] outline-deep_orange_100 rounded-[10px] shadow-bs w-[99%]"></div>
                    <Img
                      src="images/img_real1.png"
                      className="absolute h-[309px] inset-[0] justify-center m-[auto] object-cover rounded-[10px] w-[100%]"
                      alt="realOne"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-teal_900"
                    as="h6"
                    variant="h6"
                  >
                    Black high waist
                    <br />
                    Pants
                  </Text>
                  <Img
                    src="images/img_eye.svg"
                    className="h-[21px] w-[21px]"
                    alt="eye Seven"
                  />
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    2.1k
                  </Text>
                  <Img
                    src="images/img_favorite.svg"
                    className="h-[21px] w-[21px]"
                    alt="favorite Seven"
                  />
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    1000
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="h-[24px] w-[24px]"
                    alt="file Seven"
                  />
                </div>
              </div>
            </div>
          </div>
          <SelectBox
            className="font-normal leading-[normal] md:ml-[0] ml-[1046px] mr-[102px] mt-[39px] not-italic text-[16px] text-bluegray_700 text-left sm:w-[100%] w-[8%]"
            placeholderClassName="text-bluegray_700"
            name="FrameThirteen"
            placeholder="See more"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                className="h-[24px] w-[24px]"
                alt="arrow_down"
              />
            }
          ></SelectBox>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end md:ml-[0] ml-[171px] mr-[95px] mt-[18px] md:px-[20px] md:w-[100%] w-[79%]">
            <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
              <div className="flex items-center justify-start outline outline-[3px] outline-deep_orange_100 px-[15px] rounded-[10px] w-[100%]">
                <Img
                  src="images/img_anka1.png"
                  className="h-[341px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
                  alt="ankaOne"
                />
              </div>
              <div className="flex flex-row items-start justify-start w-[100%]">
                <Text
                  className="font-normal mt-[3px] not-italic text-left text-teal_900"
                  as="h6"
                  variant="h6"
                >
                  African Prints
                  <br /> wear
                </Text>
                <Img
                  src="images/img_eye.svg"
                  className="h-[21px] ml-[24px] w-[22px]"
                  alt="eye Eight"
                />
                <Text
                  className="font-medium ml-[3px] mt-[3px] text-left text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  2.1k
                </Text>
                <Img
                  src="images/img_favorite.svg"
                  className="h-[21px] ml-[11px] w-[22px]"
                  alt="favorite Eight"
                />
                <Text
                  className="font-medium ml-[3px] mt-[3px] text-left text-teal_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  100
                </Text>
                <Img
                  src="images/img_file.svg"
                  className="h-[24px] ml-[14px] w-[24px]"
                  alt="file Eight"
                />
              </div>
            </div>
            <div className="h-[387px] relative md:w-[100%] w-[75%]">
              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <div className="flex items-center justify-start outline outline-[3px] outline-deep_orange_100 p-[3px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_violtcombi1.png"
                        className="h-[328px] md:h-[auto] mb-[3px] object-cover rounded-[10px] w-[84%]"
                        alt="violtcombiOne"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Text
                        className="font-normal mt-[2px] not-italic text-left text-teal_900"
                        as="h6"
                        variant="h6"
                      >
                        Summer office
                        <br />
                        set
                      </Text>
                      <Img
                        src="images/img_eye.svg"
                        className="h-[21px] ml-[26px] w-[21px]"
                        alt="eye Nine"
                      />
                      <Text
                        className="font-medium ml-[2px] mt-[2px] text-left text-teal_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        2.1k
                      </Text>
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[21px] ml-[11px] w-[21px]"
                        alt="favorite Nine"
                      />
                      <Text
                        className="font-medium ml-[3px] mt-[2px] text-left text-teal_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[24px] ml-[15px] w-[24px]"
                        alt="file Nine"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[15px] items-center justify-start sm:w-[100%] w-[36%]">
                    <div className="flex items-center justify-start outline outline-[2px] outline-deep_orange_100 rounded-[9px] w-[100%]">
                      <Img
                        src="images/img_screenshot22.png"
                        className="h-[332px] md:h-[auto] object-cover rounded-[9px] w-[100%]"
                        alt="ScreenshotTwentyTwo"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-teal_900 w-[auto]"
                        variant="body1"
                      >
                        Silk multi wear
                      </Text>
                      <Img
                        src="images/img_eye.svg"
                        className="h-[21px] ml-[27px] w-[21px]"
                        alt="eye Ten"
                      />
                      <Text
                        className="font-medium ml-[3px] text-left text-teal_900 w-[auto]"
                        variant="body1"
                      >
                        2.1k
                      </Text>
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[21px] ml-[16px] w-[21px]"
                        alt="favorite Ten"
                      />
                      <Text
                        className="font-medium ml-[3px] text-left text-teal_900 w-[auto]"
                        variant="body1"
                      >
                        100
                      </Text>
                      <Img
                        src="images/img_file.svg"
                        className="h-[23px] ml-[24px] w-[23px]"
                        alt="file Ten"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[11px] h-[max-content] inset-[0] items-center justify-start m-[auto] w-[auto]">
                <div className="flex items-center justify-end outline outline-[3px] outline-deep_orange_100 p-[5px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_blazerssuit1.png"
                    className="h-[322px] md:h-[auto] mt-[2px] object-cover rounded-[7px] w-[50%]"
                    alt="blazerssuitOne"
                  />
                </div>
                <div className="flex flex-row items-start justify-start md:w-[100%] w-[99%]">
                  <Text
                    className="font-normal mt-[4px] not-italic text-left text-teal_900"
                    as="h6"
                    variant="h6"
                  >
                    Blazers fitted <br />
                    set
                  </Text>
                  <Img
                    src="images/img_eye.svg"
                    className="h-[21px] ml-[25px] mt-[2px] w-[21px]"
                    alt="eye Eleven"
                  />
                  <Text
                    className="font-medium ml-[3px] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    2.1k
                  </Text>
                  <Img
                    src="images/img_favorite.svg"
                    className="h-[21px] ml-[10px] mt-[2px] w-[21px]"
                    alt="favorite Eleven"
                  />
                  <Text
                    className="font-medium ml-[3px] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    100
                  </Text>
                  <Img
                    src="images/img_file.svg"
                    className="h-[24px] ml-[11px] w-[24px]"
                    alt="file Eleven"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button className="border-b-[3px] border-deep_orange_100 border-solid cursor-pointer font-normal leading-[normal] min-w-[86px] md:ml-[0] ml-[162px] mr-[998px] mt-[91px] not-italic p-[8px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-teal_900 w-[auto]">
            Brands
          </Button>
          <List
            className="flex-col md:gap-[40px] gap-[61px] grid md:ml-[0] ml-[164px] mr-[80px] mt-[22px] md:px-[20px] w-[81%]"
            orientation="vertical"
          >
            <div className="flex relative w-[100%]">
              <div className="flex my-[auto] md:w-[100%] w-[77%]">
                <div className="flex my-[auto] sm:w-[100%] w-[69%]">
                  <div className="h-[117px] my-[auto] outline outline-[2px] outline-deep_orange_100 rounded-[9px] shadow-bs1 w-[51%]">
                    <Img
                      src="images/img_screenshot31.png"
                      className="h-[117px] m-[auto] object-cover w-[100%]"
                      alt="ScreenshotThirtyOne"
                    />
                    <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[9.21px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        GUCCI
                      </Text>
                    </div>
                  </div>
                  <div className="h-[117px] ml-[-9.89px] my-[auto] outline outline-[2px] outline-deep_orange_100 rounded-[9px] shadow-bs1 w-[52%] z-[1]">
                    <Img
                      src="images/img_screenshot36.png"
                      className="h-[117px] m-[auto] object-cover rounded-[9px] w-[100%]"
                      alt="ScreenshotThirtySix"
                    />
                    <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[9.21px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        ZARA
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat bg-teal_900 h-[117px] ml-[-26.82px] my-[auto] outline outline-[2px] outline-deep_orange_100 rounded-[9px] shadow-bs1 w-[35%] z-[1]"
                  style={{ backgroundImage: "url('images/img_3.png')" }}
                >
                  <Img
                    src="images/img_chanelstpancr.png"
                    className="h-[117px] m-[auto] object-cover rounded-[9px] w-[100%]"
                    alt="chanelstpancr"
                  />
                  <div className="absolute flex h-[max-content] inset-[0] items-center justify-end m-[auto] p-[9.21px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      CHANEL
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[117px] ml-[-26.89px] my-[auto] outline outline-[2px] outline-deep_orange_100 rounded-[9px] shadow-bs1 w-[27%] z-[1]">
                <Img
                  src="images/img_screenshot37.png"
                  className="h-[117px] m-[auto] object-cover rounded-[9px] w-[100%]"
                  alt="ScreenshotThirtySeven"
                />
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-end m-[auto] p-[9.21px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    VERSACE
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[117px] relative w-[100%]">
              <div className="absolute h-[117px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[75%]">
                <div className="absolute h-[117px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[68%]">
                  <div className="absolute bg-teal_900 h-[117px] inset-y-[0] my-[auto] outline outline-[2px] outline-deep_orange_100 right-[0] rounded-[9px] shadow-bs1 w-[53%]">
                    <Img
                      src="images/img_l2.png"
                      className="h-[117px] m-[auto] object-cover rounded-[9px] w-[100%]"
                      alt="L2"
                    />
                    <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-end left-[11%] my-[auto] p-[9.21px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        LOUIS VUITTON
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-teal_900 h-[117px] inset-y-[0] left-[0] my-[auto] outline outline-[2px] outline-deep_orange_100 rounded-[9px] shadow-bs1 w-[53%]">
                    <Img
                      src="images/img_fendi1.png"
                      className="h-[117px] m-[auto] object-cover rounded-[9px] w-[100%]"
                      alt="fendiOne"
                    />
                    <div className="absolute flex h-[max-content] inset-[0] items-center justify-end m-[auto] p-[9.21px] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        FENDI
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-teal_900_99 flex h-[100%] inset-y-[0] items-center justify-end left-[0] my-[auto] p-[35px] sm:px-[20px] rounded-[9px] w-[36%]">
                  <div className="flex items-start justify-start p-[9.21px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      GIVENCHY
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute h-[117px] inset-y-[0] left-[0] my-[auto] outline outline-[2px] outline-deep_orange_100 rounded-[9px] shadow-bs1 w-[27%]">
                <Img
                  src="images/img_screenshot40.png"
                  className="h-[117px] m-[auto] object-cover rounded-[9px] w-[100%]"
                  alt="ScreenshotForty"
                />
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-end m-[auto] p-[9.21px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    DIOR
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <Button className="border-b-[3px] border-deep_orange_100 border-solid cursor-pointer font-normal leading-[normal] min-w-[102px] md:ml-[0] ml-[166px] mr-[979px] mt-[117px] not-italic p-[8px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-teal_900 w-[auto]">
            Glossary
          </Button>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[67px] items-start justify-start md:ml-[0] ml-[178px] mr-[auto] mt-[29px] md:px-[20px] md:w-[100%] w-[67%]">
            <div className="flex flex-col justify-start md:w-[100%] w-[82%]">
              <List
                className="flex-col gap-[42px] grid items-start md:ml-[0] ml-[12px] sm:w-[100%] w-[auto]"
                orientation="vertical"
              >
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    A
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    B
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    C
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    D
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    E
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    F
                  </Text>
                  <div className="h-[21px] outline outline-deep_orange_100 relative shadow-bs w-[4%]">
                    <div className="h-[20px] m-[auto] outline outline-deep_orange_100 shadow-bs w-[100%]"></div>
                    <Text
                      className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-left text-teal_900 w-[max-content]"
                      as="h4"
                      variant="h4"
                    >
                      G
                    </Text>
                  </div>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    H
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    I
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    J
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    K
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    L
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    M
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    N
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    O
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    P
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Q
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    R
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    S
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    T
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    U
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    V
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    W
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    X
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Y
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Z
                  </Text>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[80px] w-[100%]">
                <Text
                  className="sm:mt-[0] mt-[3px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  A
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[56px] sm:mt-[0] mt-[23px] text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Alexander McQueen{" "}
                </Text>
                <Text
                  className="sm:ml-[0] ml-[91px] sm:mt-[0] mt-[3px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  B
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-[0] mt-[25px] text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Boss Hugo Boss
                </Text>
                <Text
                  className="mb-[3px] sm:ml-[0] ml-[119px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  C
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[86px] md:w-[100%] w-[61%]">
                <Text
                  className="font-medium text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Alexander Wang{" "}
                </Text>
                <Text
                  className="font-medium text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Balenciaga
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start md:mt-[0] mt-[182px] md:w-[100%] w-[auto]">
              <Text
                className="font-medium text-left text-teal_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Chanel
              </Text>
              <Text
                className="font-medium text-left text-teal_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Calvin Klein
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start md:ml-[0] ml-[166px] mr-[auto] mt-[3px] md:px-[20px] md:w-[100%] w-[69%]">
            <div className="flex flex-col gap-[165px] md:gap-[40px] justify-start md:mt-[0] mt-[174px] md:w-[100%] w-[6%]">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                <Text
                  className="md:ml-[0] ml-[4px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  D
                </Text>
                <Text
                  className="md:ml-[0] ml-[4px] mt-[200px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  G
                </Text>
                <Text
                  className="md:ml-[0] ml-[4px] mt-[200px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  J
                </Text>
                <Text
                  className="md:ml-[0] ml-[4px] mt-[199px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  M
                </Text>
                <Text
                  className="mt-[200px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  P
                </Text>
                <Text
                  className="mt-[155px] text-left text-teal_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  S
                </Text>
              </div>
              <Text
                className="text-left text-teal_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                V
              </Text>
            </div>
            <div className="flex flex-col gap-[115px] md:gap-[40px] items-center justify-start md:w-[100%] w-[90%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[99%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[95%]">
                  <div className="h-[21px] md:mt-[0] mt-[4px] outline outline-deep_orange_100 relative md:w-[100%] w-[9%]">
                    <div className="absolute h-[20px] inset-x-[0] mx-[auto] outline outline-deep_orange_100 top-[0] w-[100%]"></div>
                    <Text
                      className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-left text-teal_900 w-[max-content]"
                      as="h4"
                      variant="h4"
                    >
                      Arizona
                    </Text>
                  </div>
                  <div className="md:h-[20px] h-[21px] md:ml-[0] ml-[267px] md:mt-[0] mt-[4px] outline outline-deep_orange_100 relative md:w-[100%] w-[9%]">
                    <div className="absolute h-[20px] inset-x-[0] mx-[auto] outline outline-deep_orange_100 top-[0] w-[97%]"></div>
                    <Text
                      className="absolute bottom-[0] font-medium inset-x-[0] mx-[auto] text-left text-teal_900 w-[max-content]"
                      as="h4"
                      variant="h4"
                    >
                      Burberry
                    </Text>
                  </div>
                  <div className="h-[21px] md:h-[25px] mb-[4px] md:ml-[0] ml-[261px] outline outline-deep_orange_100 relative md:w-[100%] w-[9%]">
                    <div className="absolute h-[20px] inset-[0] justify-center m-[auto] outline outline-deep_orange_100 w-[100%]"></div>
                    <Text
                      className="absolute font-medium h-[100%] inset-y-[0] left-[5%] my-[auto] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Chloe
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[4px] w-[100%]">
                  <Text
                    className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Armani
                  </Text>
                  <Text
                    className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Balmain
                  </Text>
                  <Text
                    className="font-medium mb-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Christian Dior
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[4px] md:w-[100%] w-[93%]">
                  <Text
                    className="font-medium md:mt-[0] my-[2px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Anne Cole
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[257px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Bvlgari
                  </Text>
                  <Text
                    className="font-medium mb-[5px] md:ml-[0] ml-[273px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Coast
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[7px] md:w-[100%] w-[52%]">
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Azura
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Bamboo
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start mt-[55px] md:w-[100%] w-[95%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start md:mt-[0] mt-[25px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Dkny
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      D&G{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[0] ml-[200px] md:w-[100%] w-[49%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Text
                        className="mt-[4px] text-left text-teal_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        E
                      </Text>
                      <Text
                        className="font-medium ml-[68px] mt-[24px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Essentiel
                      </Text>
                      <Text
                        className="mb-[4px] ml-[165px] text-left text-teal_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        F
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[93px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Eleventy
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start mb-[5px] md:ml-[0] ml-[72px] md:mt-[0] mt-[20px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Fantasia
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Fendi{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] w-[91%]">
                  <Text
                    className="font-medium md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Davina
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[278px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    E grey
                  </Text>
                  <Text
                    className="font-medium mb-[5px] md:ml-[0] ml-[279px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Fila
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] w-[91%]">
                  <Text
                    className="font-medium md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Dorina
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[280px] md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    E.L.K
                  </Text>
                  <Text
                    className="font-medium mb-[4px] md:ml-[0] ml-[285px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Fab
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[10px] md:w-[100%] w-[50%]">
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    D-jones
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Everly
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[7px] md:w-[100%] w-[51%]">
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Drome
                  </Text>
                  <Text
                    className="font-medium text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    E-spirit
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start mt-[53px] md:w-[100%] w-[94%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start md:mt-[0] mt-[25px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Givenchy
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Gucci{" "}
                    </Text>
                  </div>
                  <Text
                    className="mb-[20px] md:ml-[0] ml-[170px] md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    H
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[63px] md:w-[100%] w-[35%]">
                    <div className="flex flex-row items-end justify-between w-[100%]">
                      <Text
                        className="font-medium mb-[3px] mt-[26px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Hugo Boss
                      </Text>
                      <Text
                        className="text-left text-teal_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        I
                      </Text>
                    </div>
                    <Text
                      className="font-medium mt-[3px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Hermes
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] h-[51px] items-start justify-start mb-[4px] md:ml-[0] ml-[84px] md:mt-[0] mt-[20px] w-[51px]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Indress
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Ibana{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[4px] md:w-[100%] w-[98%]">
                  <Text
                    className="font-medium mt-[5px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Giorgio{" "}
                  </Text>
                  <Text
                    className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Halita
                  </Text>
                  <Text
                    className="font-medium mb-[5px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Ice breaker
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] w-[94%]">
                  <Text
                    className="font-medium md:mt-[0] my-[2px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Ghost
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[286px] md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Hilfiger
                  </Text>
                  <Text
                    className="font-medium mb-[5px] md:ml-[0] ml-[271px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Incotex
                  </Text>
                </div>
                <Text
                  className="font-medium mt-[7px] text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  GnD
                </Text>
                <Text
                  className="font-medium mt-[8px] text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Glam
                </Text>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[55px] md:w-[100%] w-[95%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      JAMES SMITH
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Jack Wills{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start md:ml-[0] ml-[135px] md:w-[100%] w-[49%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Text
                        className="mt-[4px] text-left text-teal_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        K
                      </Text>
                      <Text
                        className="font-medium ml-[64px] mt-[24px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Kenneth Cole
                      </Text>
                      <Text
                        className="mb-[4px] ml-[133px] text-left text-teal_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        L
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[93px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Katy Perry
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[73px] md:mt-[0] mt-[20px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Lacoste
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      La diva{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] w-[94%]">
                  <Text
                    className="font-medium md:mt-[0] my-[2px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Jambu
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[281px] md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    K-swiss
                  </Text>
                  <Text
                    className="font-medium mb-[4px] md:ml-[0] ml-[270px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Lanvin
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[6px] md:w-[100%] w-[93%]">
                  <Text
                    className="font-medium md:mt-[0] my-[2px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Jonny&#39;s
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[277px] md:mt-[0] mt-[3px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Kasper
                  </Text>
                  <Text
                    className="font-medium mb-[3px] md:ml-[0] ml-[273px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Lagos
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[3px] md:w-[100%] w-[93%]">
                  <Text
                    className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Jovani
                  </Text>
                  <Text
                    className="font-medium mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Kwiat
                  </Text>
                  <Text
                    className="font-medium mb-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Laurèl
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start mt-[85px] md:w-[100%] w-[97%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start md:mt-[0] mt-[26px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Marc jacobs
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Madeworn{" "}
                    </Text>
                  </div>
                  <Text
                    className="mb-[20px] md:ml-[0] ml-[151px] md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    N
                  </Text>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[63px] md:w-[100%] w-[55%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium sm:mt-[0] mt-[24px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        New Look
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[158px] text-left text-teal_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        O
                      </Text>
                      <Text
                        className="font-medium sm:ml-[0] ml-[63px] sm:mt-[0] mt-[20px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Off-White
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[99%]">
                      <Text
                        className="font-medium mt-[2px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Nike
                      </Text>
                      <Text
                        className="font-medium mb-[2px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Old Navy{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[5px] md:w-[100%] w-[93%]">
                  <Text
                    className="font-medium md:mt-[0] mt-[5px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Mango
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[280px] md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Noir
                  </Text>
                  <Text
                    className="font-medium mb-[5px] md:ml-[0] ml-[292px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Oamc
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] w-[93%]">
                  <Text
                    className="font-medium md:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Marios
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[281px] md:mt-[0] my-[2px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Neul
                  </Text>
                  <Text
                    className="font-medium mb-[4px] md:ml-[0] ml-[292px] text-left text-teal_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Oasis
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                <div className="flex flex-col gap-[110px] md:gap-[40px] items-center justify-start md:w-[100%] w-[79%]">
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[99%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start w-[100%]">
                      <div className="flex sm:flex-1 flex-col gap-[9px] items-start justify-start sm:mt-[0] mt-[24px] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-left text-teal_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Parka London
                        </Text>
                        <Text
                          className="font-medium text-left text-teal_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Prada{" "}
                        </Text>
                      </div>
                      <Text
                        className="mb-[19px] sm:ml-[0] ml-[138px] sm:mt-[0] mt-[4px] text-left text-teal_900 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Q
                      </Text>
                      <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[60px] sm:w-[100%] w-[44%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-medium mt-[24px] text-left text-teal_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Queen Bee
                          </Text>
                          <Text
                            className="text-left text-teal_900 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            R
                          </Text>
                        </div>
                        <Text
                          className="font-medium mt-[3px] text-left text-teal_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Quiksilver{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[8px] md:w-[100%] w-[62%]">
                      <Text
                        className="font-medium text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Pearl
                      </Text>
                      <Text
                        className="font-medium text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Quiz
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between mt-[100px] w-[100%]">
                      <div className="flex sm:flex-1 flex-col gap-[8px] items-center justify-start sm:mt-[0] mt-[24px] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-left text-teal_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Santoni
                        </Text>
                        <Text
                          className="font-medium text-left text-teal_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Sabrina{" "}
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col justify-start sm:w-[100%] w-[60%]">
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <Text
                            className="mt-[3px] text-left text-teal_900 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            T
                          </Text>
                          <Text
                            className="font-medium ml-[67px] mt-[25px] text-left text-teal_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            True religion
                          </Text>
                          <Text
                            className="mb-[3px] ml-[140px] text-left text-teal_900 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            U
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] ml-[93px] text-left text-teal_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Tuscany
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[7px] md:w-[100%] w-[62%]">
                      <Text
                        className="font-medium text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Styla
                      </Text>
                      <Text
                        className="font-medium text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Tusk
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[99%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start sm:mt-[0] mt-[24px] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Valentino
                      </Text>
                      <Text
                        className="font-medium text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Velvet{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col justify-start sm:w-[100%] w-[60%]">
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Text
                          className="mt-[4px] text-left text-teal_900 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          W
                        </Text>
                        <Text
                          className="font-medium ml-[52px] mt-[24px] text-left text-teal_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          WeWood
                        </Text>
                        <Text
                          className="mb-[4px] ml-[162px] text-left text-teal_900 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          X
                        </Text>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[93px] text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Wolky
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[165px] md:gap-[40px] justify-start md:w-[100%] w-[14%]">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Ralph Lauren
                    </Text>
                    <Text
                      className="font-medium mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Rob-ert{" "}
                    </Text>
                    <Text
                      className="font-medium mt-[156px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Unique
                    </Text>
                    <Text
                      className="font-medium mt-[7px] text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Unravel
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      XSCAPE
                    </Text>
                    <Text
                      className="font-medium text-left text-teal_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Xoxo
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[252px] mr-[298px] mt-[3px] md:px-[20px] md:w-[100%] w-[56%]">
            <Text
              className="font-medium mt-[5px] text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Valery
            </Text>
            <Text
              className="font-medium my-[2px] text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Wilma
            </Text>
            <Text
              className="font-medium mb-[5px] text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Xacus
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[168px] mr-[auto] mt-[145px] md:px-[20px] md:w-[100%] w-[37%]">
            <Text
              className="text-left text-teal_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Y
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[58px] md:mt-[0] mt-[21px] text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Yvonne Léon
            </Text>
            <Text
              className="md:ml-[0] ml-[146px] text-left text-teal_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              Z
            </Text>
            <Text
              className="font-medium md:ml-[0] ml-[68px] md:mt-[0] mt-[21px] text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Zella
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[254px] mr-[auto] md:px-[20px] md:w-[100%] w-[30%]">
            <Text
              className="font-medium text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Y-3{" "}
            </Text>
            <Text
              className="font-medium text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Zara
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[254px] mr-[auto] mt-[10px] md:px-[20px] md:w-[100%] w-[30%]">
            <Text
              className="font-medium text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Yaura
            </Text>
            <Text
              className="font-medium text-left text-teal_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Zack
            </Text>
          </div>
          <div className="bg-teal_900 flex items-end justify-end mt-[419px] overflow-auto sm:pl-[20px] md:pl-[40px] pl-[47px] py-[47px] w-[100%]">
            <div className="mt-[8px] overflow-x-auto w-[88%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:px-[20px] md:w-[100%] w-[21%]">
                  <div className="h-[102px] md:h-[75px] relative w-[100%]">
                    <Img
                      src="images/img_logowhite1.png"
                      className="absolute h-[75px] left-[0] object-cover top-[0] w-[70%]"
                      alt="LogoWHITEOne"
                    />
                    <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] p-[10px] w-[auto]">
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
                      onClick={handleNavigate22}
                      alt="twitter"
                    />
                    <Img
                      src="images/img_mail.svg"
                      className="h-[16px] ml-[6px] w-[16px]"
                      alt="mail"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-start md:ml-[0] ml-[70px] md:mt-[0] mt-[18px] p-[10px] md:px-[20px] w-[auto]">
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
                <div className="flex items-start justify-start md:ml-[0] ml-[19px] md:mt-[0] mt-[20px] p-[10px] md:px-[20px] w-[auto]">
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
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[47px] md:px-[20px] md:w-[100%] w-[44%]">
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
                    <div className="h-[35px] relative w-[29%]">
                      <div className="bg-deep_orange_100 h-[35px] m-[auto] p-[10px] rounded-[10px] w-[100%]"></div>
                      <Text
                        className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] text-left text-teal_900 w-[max-content]"
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
      </div>
    </>
  );
};

export default HomepageOnePage;
