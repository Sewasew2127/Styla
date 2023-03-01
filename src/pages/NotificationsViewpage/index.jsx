import React from "react";

import { Img, Text, Input, Slider, List, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";

const NotificationsViewpagePage = () => {
  function handleNavigate14() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

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
          <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mb-[7px] mt-[24px] w-[100%]">
            <div className="flex md:flex-1 flex-col justify-start md:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[68px] items-start justify-start md:ml-[0] ml-[36px] md:w-[100%] w-[15%]">
                <Img
                  src="images/img_arrowleft_deep_orange_100.svg"
                  className="cursor-pointer h-[24px] w-[24px]"
                  onClick={() => sliderRef.current?.slidePrev?.()}
                  alt="arrowleft"
                />
                <div className="h-[24px] relative w-[49%]">
                  <div className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[80%]">
                    <Text
                      className="absolute font-normal not-italic right-[0] text-left text-teal_900 top-[0] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      4 of 20
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="absolute cursor-pointer h-[24px] inset-y-[0] left-[0] my-[auto] w-[24px]"
                      onClick={() => sliderRef.current?.slideNext?.()}
                      alt="arrowright"
                    />
                  </div>
                  <Img
                    src="images/img_arrowleft.svg"
                    className="absolute h-[24px] inset-y-[0] left-[0] my-[auto] w-[24px]"
                    alt="arrowleft One"
                  />
                </div>
              </div>
              <div className="border-b-[1px] border-deep_orange_102 border-solid flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[29px] p-[8px] rounded-[10px] w-[100%]">
                <Img
                  src="images/img_user.svg"
                  className="h-[24px] mb-[2px] md:ml-[0] ml-[25px] md:mt-[0] mt-[6px] w-[24px]"
                  alt="user"
                />
                <Text
                  className="md:ml-[0] ml-[27px] md:mt-[0] mt-[7px] text-left text-teal_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Community-Styla
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[14px] md:mt-[0] mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Sender
                </Text>
                <Img
                  src="images/img_search.svg"
                  className="h-[24px] mb-[8px] md:ml-[0] ml-[693px] w-[24px]"
                  alt="search One"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-[24px] mb-[8px] md:ml-[0] ml-[11px] w-[24px]"
                  alt="star"
                />
                <Img
                  src="images/img_trash_deep_orange_100.svg"
                  className="h-[24px] mb-[8px] md:ml-[0] ml-[10px] w-[24px]"
                  alt="trash One"
                />
                <Img
                  src="images/img_search_deep_orange_100.svg"
                  className="h-[24px] mb-[8px] md:ml-[0] ml-[11px] w-[24px]"
                  alt="search Two"
                />
                <Text
                  className="font-bold md:ml-[0] ml-[33px] md:mt-[0] mt-[6px] text-left text-teal_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Feb 12
                </Text>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="bg-bluegray_50 md:ml-[0] ml-[124px] mr-[290px] mt-[40px] rounded-[10px] w-[67%]"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-start justify-start mx-[10px]">
                      <Text
                        className="font-bold text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Fashionista Community
                      </Text>
                      <Text
                        className="font-normal mt-[19px] not-italic text-left text-teal_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        @Twinkle liked your comment;
                      </Text>
                      <List
                        className="bg-white_A700 flex-col gap-[13px] grid items-center md:ml-[0] ml-[13px] mt-[5px] p-[24px] sm:px-[20px] rounded-[10px] w-[99%]"
                        orientation="vertical"
                      >
                        <div className="flex items-center justify-start md:w-[100%] w-[68%]">
                          <div className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-bold text-left text-teal_900"
                              as="h4"
                              variant="h4"
                            >
                              @Tassle <br />- What do you think is important
                              factor in a choice of clothing?
                            </Text>
                            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[6px] mt-[3px] md:w-[100%] w-[36%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye"
                              />
                              <Text
                                className="font-normal ml-[3px] not-italic text-left text-teal_900 w-[auto]"
                                variant="body2"
                              >
                                200
                              </Text>
                              <Img
                                src="images/img_clock_deep_orange_100.svg"
                                className="h-[24px] ml-[10px] w-[24px]"
                                alt="clock"
                              />
                              <Text
                                className="font-normal ml-[3px] not-italic text-left text-teal_900 w-[auto]"
                                variant="body2"
                              >
                                48
                              </Text>
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px] ml-[12px] w-[24px]"
                                alt="favorite"
                              />
                              <Text
                                className="font-normal ml-[4px] not-italic text-left text-teal_900 w-[auto]"
                                variant="body2"
                              >
                                134
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start md:w-[100%] w-[94%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-teal_900"
                              as="h4"
                              variant="h4"
                            >
                              @emeraldlove <br />
                              “Color needs to be considered when choosing an
                              outfit. My favourite color at the moment <br />
                              is black. It hides all the flabbys and blends well
                              with different colors!”
                            </Text>
                            <div className="flex flex-row items-center justify-start md:w-[100%] w-[24%]">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[24px] w-[24px]"
                                alt="eye One"
                              />
                              <Text
                                className="font-normal ml-[3px] not-italic text-left text-teal_900 w-[auto]"
                                variant="body2"
                              >
                                15
                              </Text>
                              <Img
                                src="images/img_clock_deep_orange_100.svg"
                                className="h-[24px] ml-[22px] w-[24px]"
                                alt="clock One"
                              />
                              <Text
                                className="font-normal ml-[3px] not-italic text-left text-teal_900 w-[auto]"
                                variant="body2"
                              >
                                0
                              </Text>
                              <Img
                                src="images/img_favorite.svg"
                                className="h-[24px] ml-[18px] w-[24px]"
                                alt="favorite One"
                              />
                              <Text
                                className="font-normal ml-[4px] not-italic text-left text-teal_900 w-[auto]"
                                variant="body2"
                              >
                                2
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <div className="flex flex-row sm:gap-[40px] items-center justify-between ml-[auto] mt-[24px] md:w-[100%] w-[53%]">
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
            <div className="bg-gray_300 h-[150px] mb-[339px] md:mt-[0] mt-[27px] w-[1%]"></div>
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
                    alt="clock Two"
                  />
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer h-[16px] ml-[5px] w-[16px]"
                    onClick={handleNavigate14}
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

export default NotificationsViewpagePage;
