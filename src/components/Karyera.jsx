import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import CvYerlesdir from "./CvYerlesdir";

function Karyera() {
  const [fags, setFags] = useState(Array(4).fill(false));

  const toggleFag = (index) => {
    const updatedFags = fags.map((fag, i) => (i === index ? !fag : false));
    setFags(updatedFags);
  };

  return (
    <div className="bg-[#f2f2f2]">
      <div className="container mx-auto py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
        Ana Səhifə <MdOutlineKeyboardArrowRight /> Karyera
      </div>
      <div className="px-[5px] container mx-auto">
        <p className="text-center text-[#4f4f4f] font-bold pb-[4vh] text-[23px]">
          İşə qəbul proseduru
        </p>
        {[1, 2, 3, 4].map((number, index) => (
          <div className="pb-[7px]" key={index}>
            <div className="p-[10px] flex justify-between items-center border-b-[1px] border-[#33333339]">
              <div className="text-[15.4px] leading-[40px] font-bold text-[#000]">
                {number}.{" "}
                {["Namizədin müraciəti", "Müraciətlərin təhlili", "Müsahibə", "İşə yerləşdirilmə"][number - 1]}
              </div>
              <div>
                <MdOutlineKeyboardArrowDown
                  onClick={() => toggleFag(index)}
                  className={`transition-all text-[20px] ${fags[index] ? "text-orange rotate-180" : ""}`}
                />
              </div>
            </div>
            <div className={`transition-all ${fags[index] ? "h-full visible opacity-1" : "h-0 invisible opacity-0"}`}>
              <div className="bg-[#ff8300] text-white text-[15.4px] p-[15px]">
                {[
                  "Namizədlər yerləşdirilən vakansiyalarla tanış olduqdan sonra İş üçün müraciət anketi tam şəkildə doldurularaq və yaxud CV-ləri hr@neptun.az e-mail ünvanına göndərilir.",
                  "Namizədin vakansiyaya qoyulan tələblərə cavab verib-vermədiyi təhlil edilir.",
                  "Tələblərə cavab verən namizəd müsahibə mərhələsinə dəvət edilir. Bu mərhələdə namizədlə bağlı bütün lazımi məlumat əldə edilir (bilik və bacarıqları, əlavə maraqları, ailə vəziyyəti və s.). Namizəd haqda rəy müsbət olduğu halda, namizəd yekun müsahibəsinə dəvət edilir. Yekun müsahibə zamanı namizədlə əmək haqqı və iş şərtləri müzakirə olunur.",
                  "Haqqında müsbət qərar verilmiş namizədlər Azərbaycan Respublikasının Əmək qanunvericiliyinə və Şirkətin daxili qaydalarına uyğun olaraq 1 ay sınaq müddəti müəyyən edilməklə işə qəbul edilir."
                ][number - 1]}
              </div>
            </div>
          </div>
        ))}
        <div className="py-[5vh]">
          <h3 className="text-center text-[24px] text-[#4f4f4f] font-bold mb-[14px]">
            CV-ni yerləşdirin
          </h3>
         <CvYerlesdir/>
        </div>
      </div>
    </div>
  );
}

export default Karyera;
