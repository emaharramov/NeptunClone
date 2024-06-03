import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Partners() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto pb-9">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> Tərəfdaşlar
            
          </div>
          
         <div className="px-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="p-5">
            <img src="https://neptun.az/image/cache/webp/catalog/T%C9%99r%C9%99fda%C5%9Flar/znngin-vn-fnrqli-menyumuzla-1-550x374.webp?v=9" />
            <p className="text-[12px] text-itemPcolor my-[10px]">Özsüt Restoran & Kafe şəbəkələri</p>
            <p className="text-[11px] text-[#000] mb-2">10% endirim bonusu</p>
          </div>
          <div className="p-5">
            <img src="https://neptun.az/image/cache/webp/catalog/sekil/soliton%20logo%20copy-550x375.webp?v=9" />
            <p className="text-[12px] text-itemPcolor my-[10px]">Soliton Mağazalar Şəbəkəsi</p>
            <p className="text-[11px] text-[#000] mb-2">Kondisioner alışında xüsusi təklif</p>
          </div>
          <div className="p-5">
            <img src="https://neptun.az/image/cache/webp/catalog/sekil/189_taksi_driver%20copy-550x375.webp?v=9" />
            <p className="text-[12px] text-itemPcolor my-[10px]">189 TAXI xidməti</p>
            <p className="text-[11px] text-[#000] mb-2">10% endirim bonusu</p>
          </div>
          <div className="p-5">
            <img src="https://neptun.az/image/cache/webp/catalog/med21-1141x796.webp?v=9" />
            <p className="text-[12px] text-itemPcolor my-[10px]">MedEra Hopital</p>
            <p className="text-[11px] text-[#000] mb-2">10% endirim bonusu</p>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
