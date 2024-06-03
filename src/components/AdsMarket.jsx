import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function AdsMarket() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto pb-9">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> Neptun Supermarketlərdə
            Reklam
          </div>
          <p className="text-[14px] leading-[1.43] mb-2 text-[#2D2D2D]">
            Bildiyiniz kimi hal-hazırda reklam istehsalçı ilə istehlakçı
            arasında körpü rolunu oynayır.Bu mənada hər hansı bir qida ,
            qeyri-qida və ya digər bir istehsal məhsulunun geniş kütləyə
            çatdırılmasında reklam çox böyük önəm kəsb edir.Artıq 15 ilə yaxın
            fəaliyyətdə olan və geniş reklam imkanalarına malik olan Neptun
            Supemarketlər Şəbəkəsi sizə bu istiqamətdə əməkdaşlıq təklif edir.{" "}
          </p>
          <p className="text-[14px] text-[#2D2D2D] mb-2">
            {" "}
            Əlavə sullar üçün 055 260 35 14 nömrəsi ilə əlqə saxlaya bilərsiniz.
          </p>
          <IoCloudDownloadOutline className="text-[42px]" />
          <img className="w-[160px]" src="https://neptun.az/image/cache/webp/no_image-258x194.webp?v=9" />
        </div>
      </div>
    </>
  );
}

export default AdsMarket;
