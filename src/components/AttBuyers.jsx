import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function BePartner() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> Alıcıların nəzərinə
          </div>
          <div className="pb-12">
            <img
              className="w-full rounded-[15px] attBuyersImg"
              src="https://neptun.az/image/cache/webp/catalog/bannerler/thumb-900x262.webp?v=9"
            />
          </div>
          <div className="pb-10">
            <ul className="klassikBonus attBuyersP">
              <li>
                Neptun supermarketlərində alış-veriş edərkən istədiyiniz hər
                hansı məhsulu tapmaqda çətinlik çəksəniz, müştəri xidmətləri
                bölməsinə yaxınlaşaraq əməkdaşlarımızdan yardım istəyə
                bilərsiniz.
              </li>
              <li>
                Neptun supermarketlərində aldığınız istənilən məhsulu 15 gün
                ərzində geri qaytara bilərsiniz. Bunun üçün alış-veriş qəbzinin
                təqdim olunması mütləqdir. Əks halda geri qaytarmaq mümkün
                olmayacaqdır.
              </li>
              <li>
                Neptun supermarketlərində sizi narahat edən hər bir məsələylə
                bağlı şikayətlərinizi yazılı şəkildə bildirə bilərsiniz, əlaqə
                nömrənizi qeyd etdiyiniz təqdirdə sizinlə əlaqə saxlanılacaq.
              </li>
              <li>
                Supermarket personalından kimsə sizə qarşı nəzakətsiz davr
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BePartner;
