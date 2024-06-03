import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HomeNews from "./HomeNews";

function Aksiyalar() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> Blog{" "}
            <MdOutlineKeyboardArrowRight /> Yeni aksiyalar
          </div>

          <div className="flex flex-wrap justify-center gap-y-5 lg:gap-y-0 lg:justify-between pb-20 newsPaga">
            <HomeNews/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aksiyalar;
