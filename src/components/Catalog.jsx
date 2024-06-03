import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CatalogSlider from "./CatalogSlider";

function Catalog() {
  return (
    <>
    <div className="bg-mainColor pb-8">

    <div className="container mx-auto">
      <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
        Ana Səhifə <MdOutlineKeyboardArrowRight /> Yeni kataloqu yüklə
      </div>
      <div>
        <CatalogSlider />
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Catalog;
