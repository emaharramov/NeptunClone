import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";

function HomeNews() {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      <div>
        <img src="https://neptun.az/image/cache/catalog/Superteklif/banner/bannersayt1-370x225.jpg?v=9" />

        {location.pathname == "/aksiyalar" ? (
          <p className="px-[10px] text-[11px] bg-white font-semibold text-[#878787]">
            {new Date().getDate()}
          </p>
        ) : (
          ""
        )}

        <div className="flex justify-between items-center bg-white pr-2">
          <p className="px-[10px] py-[15px]  text-[12px] font-semibold">
            50 Azn 50 Bonus
          </p>
          <BsArrowRight />
        </div>
      </div>
      <div>
        <img src="https://neptun.az/image/cache/catalog/A.Narmin/second/nes-kicik-banner-370x225.jpg?v=9" />
        <div className="flex justify-between items-center bg-white pr-2">
          <p className="py-[15px] px-[10px] text-[12px] font-semibold">
            Neptun-da Dadlı Endirimlər!
          </p>
          <BsArrowRight />
        </div>
      </div>
      <div>
        <img src="https://neptun.az/image/cache/catalog/2.2024/heftesonu-banner-yeni-olcu-saro-cay-500-qr-n-tualet-bloku-30-31-mart(1)-370x225.jpg?v=9" />
        <div className="flex justify-between items-center bg-white pr-2">
          <p className="py-[15px] px-[10px] text-[12px] font-semibold line-clamp-1">
            Neptundan Sərfəli Həftəsonu Kampaniyası
          </p>
          <BsArrowRight />
        </div>
      </div>
    </>
  );
}

export default HomeNews;
