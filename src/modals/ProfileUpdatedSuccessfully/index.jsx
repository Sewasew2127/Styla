import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const ProfileUpdatedSuccessfullyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[41%]"
        overlayClassName="bg-gray_900_90 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start mb-[300px] mt-[62px] p-[17px] md:px-[20px] rounded-[10px] w-[100%]">
            <Img
              src="images/img_arrowright_deep_orange_100.svg"
              className="h-[35px] w-[35px]"
              alt="arrowright"
            />
            <div className="flex h-[78px] items-center justify-start mt-[8px] outline outline-[2px] outline-deep_orange_100 p-[11px] rounded-[50%] w-[78px]">
              <Img
                src="images/img_checkmark_deep_orange_100.svg"
                className="h-[55px] w-[55px]"
                alt="checkmark"
              />
            </div>
            <Text
              className="font-bold mt-[50px] text-left text-teal_900 w-[auto]"
              as="h2"
              variant="h2"
            >
              Profile Updated Successfully!
            </Text>
            <Button className="bg-teal_900 cursor-pointer font-medium leading-[normal] mb-[13px] mt-[19px] px-[15px] py-[10px] rounded-[7px] shadow-bs text-[16px] text-center text-white_A700 w-[263px]">
              Continue
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default ProfileUpdatedSuccessfullyModal;
