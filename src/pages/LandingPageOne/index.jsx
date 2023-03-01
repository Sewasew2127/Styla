import React from "react";

import { Img, Text, Input, Line, Button } from "components";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";


const LandingPageOnePage = () => {
 

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-outfit items-center justify-start mx-[auto] w-[100%]">
    <Header />
        <Img
          src="images/img_logogreen11.png"
          className="h-[234px] sm:h-[auto] mt-[252px] object-cover md:w-[100%] w-[34%]"
          alt="LogoGREENTwelve"
        />
        <Text
          className="font-bold mt-[52px] text-left text-teal_900 w-[auto]"
          as="h2"
          variant="h2"
        >
          No. 1 Fashion Recommender Website
        </Text>
      <Footer />
      </div>
    </>
  );
};

export default LandingPageOnePage;
