import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Img, Text, Input, Line, Button } from "components";

import { CloseSVG } from "../../assets/images";

export default function Header(){
    const [inputvalue, setInputvalue] = React.useState("");
    return(
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
    );
}