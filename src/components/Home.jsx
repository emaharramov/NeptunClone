import React from "react";
import HomeNews from "./HomeNews";
import SliderHomeSecond from "./SliderHomeSecond";
import MainSlide from "./MainSlide";
import ItemSlider from "./ItemSlider";
import DiscountedProducts from "./DiscountedProducts";
import BestSellers from "./BestSellers";
import AdsHomePage from "./AdsHomePage";

function Home() {
  return (
    <div className="bg-mainColor">
      <div className="container mx-auto lg:pl-[265px] pt-[15px] md:pr-[15px] flex flex-col">
        <div className="md:h-[655px]">
          <div className="bg-white">
            <MainSlide />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-4 news">
            <HomeNews />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap gap-2 ml-1">
          <div className="w-full md:w-[575px] mt-4 md:mt-0 overflow-hidden rounded-br-3xl">
            <SliderHomeSecond />
          </div>
          <div className="overflow-hidden w-full">
            <ItemSlider />
          </div>
        </div>
        <div>
          <DiscountedProducts/>
        </div>
        <div>
          <BestSellers />
        </div>
        <div>
          <AdsHomePage />
        </div>
      </div>
    </div>
  );
}

export default Home;
