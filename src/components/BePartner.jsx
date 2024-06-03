import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ContactForm from "./ui/ContactForm";

function BePartner() {

  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> Partnyorluq
          </div>
          <div className="flex flex-wrap">
            <img
              className="w-[580px] h-[50vh] lg:h-full mr-[8%] rounded-[17px] mb-[2em] transition-[all .2s ease-linear] bepartner"
              src="https://neptun.az/image/catalog/pertners/pertnersneptun.jpg"
            />
            <div className="md:mt-[3em] w-[95%] lg:w-[33%] text-justify">
              <h3 className="mb-4 text-[23px]">Bizimlə partnyorluq</h3>
              <p className="text-[11px] mb-3">
                Biz hər zaman müştərilərimizə təqdim olunan xidmətlərin çeşidi və keyfiyyətini yüksəldə biləcək,
                inkişafımızda yardımçı ola biləcək tərəfdaşlıq münasibətlərini qurmaqda maraqlıyıq.
              </p>
              <p className="text-[11px] mb-3">
                Şəbəkəmizin sürətlə genişlənməsini nəzərə alaraq bu əməkdaşlıqların böyük imkanlar yarada
                biləcəyindən əminik.
              </p>
              <p className="text-[11px] mb-3">
                Neptun Mağazalar Şəbəkəsinə uyğun olan tərəfdaşlıq təklifləriniz olarsa müraciət edə bilərsiniz.
                Təklifləriniz dəyərləndiriləcək və sizinlə əlaqə saxlanılacaqdır.
              </p>
            </div>
          </div>
          <section className="py-[2em] md:py-[4em]">
            <ContactForm/>
          </section>
        </div>
      </div>
    </>
  );
}

export default BePartner;
