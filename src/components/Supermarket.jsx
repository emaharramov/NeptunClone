import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Markets from "./ui/Markets";

function Supermarket() {
    const [showAll,setshowAll] = useState(true)

    const handleShow = () => {
        setshowAll(() => !showAll)
    }
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> Supermarketlər
          </div>
          <div>
            <div className="grid grid-cols-2 gap-[1px] mb-[1px] text-center text-white">
              <div onClick={handleShow} className={`${showAll ? 'bg-orange' : 'bg-[#4c5866]'} py-[10px] text-[13px] cursor-pointer`}>Azərbaycan</div>
              <div onClick={handleShow} className={`${showAll ? 'bg-[#4c5866]' : 'bg-orange'}  py-[10px] text-[13px] cursor-pointer`}>Bakı</div>
            </div>
            <iframe
              src="https://www.google.com/maps/d/u/1/embed?mid=10E-2JlEOdsN7qEbPWQWa9XS4DENhOB5O&amp;z=6"
              width="100%"
              height="480"
            ></iframe>
          </div>
          <div className="flex justify-between flex-wrap gap-2 py-3">
            <Markets/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supermarket;
