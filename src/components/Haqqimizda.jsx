import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

function Haqqimizda() {
  const [pathname, setPathname] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <>
      <div className="bg-[#f2f2f2]">
      <div className="container mx-auto">
      <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
        Ana Səhifə <MdOutlineKeyboardArrowRight /> Haqqımızda
      </div>
      <div className="text-[18px] my-2">Haqqımızda</div>
      <article className="text-[11px] leading-[1.43]">
        Neptun Supermarketlər Şəbəkəsi 2003-cü ildə Azərbaycanda qida sektoru
        sahəsində fəaliyyətə başlayıb. <br /> <br /> 28 May metrostansiyası yaxınlığında
        fəaliyyətə başlayan birinci supermarketin uğurlu inkişafı, 2008-ci ildə
        növbəti-20 Yanvar ərazisində yerləşən supermarketin açılışına təkan
        verdi. Daha sonra Bakı şəhərinin digər yaşayış zonasında, Həzi Aslanov
        metrostansiyası iki istiqamətində yeni supermarketlər açılaraq
        supermarketlər şəbəkəsi yaradıldı. <br /><br /> Neptun Supermarketləri zənciri
        yaradılması ilə paralel olaraq 2004-cü ildə 3500 m2-ə yaxın ərazidə
        anbar və ofis yeri tikilərək Azərbaycanda ilk dəfə olaraq supermarketlər
        vahid mərkəzi sistemlə idarə olunmağa başlandı. Bu vahid mərkəzi anbar
        sistemi ilə 100-ə yaxın supermarket idarə etmək olar. Supermarketlər
        şəbəkəsi müasirliyi, məhsulların rahat yerləşdirilməsi ilə fərqlənir.
        Hər bir alıcı Neptun supermarketlərindən yüksək keyfiyyətli məhsul-meyvə
        və tərəvəz, ət və süd məhsulları, un məmulatları, spirtli və spirtsiz
        içkilər əldə edə bilər. Neptun Supermarketlər Şəbəkəsi həm yerli həmdə
        xarici məhsulların satışını həyata keçirir. Burada keyfiyyəti, ekoloji
        təmiz tərkibi, saxlanma müddəti və s. ilə seçilən Almaniya və digər
        Avropa məhsulları yer almışdır. 10 mindən çox qida məhsulları,
        delikateslər, həmçinin elit spirtli içkiləridən ibarət olan “Neptun”
        assortimentləri geniş seçimə üstünlük verənlər və keyfiyyətdən əmin
        olmaq istəyənlər üçün nəzərdə tutulub. Ticarət sahəsinin mütəxəssisləri
        daima keyfiyyətli məhsulların axtarışındadır və bir çox bu cür məhsullar
        Neptun supermarketlərində eksklüziv şəraitdə yerləşdirilib. <br /><br /> Yüksək
        keyfiyyətli məhsul müxtəlifliyi ilə seçilən Neptun Supermarketlər
        şəbəkəsi hər zaman müştəriləri üçün sağlam, müasir və ekonomik xidmət
        göstərməyə çalışır. Supermarketlər şəbəkəsində müxtəlif növ qida
        məhsulları, məişət-təsərrüfat malları, kiçik ev elektronikası kimi
        məhsullar əldə etmək mümkündür. Bundan əlavə supermarketlərdə mövcud
        olan “Uşaq aləmi” bölmələrində balacaların qayğısına qalmaq üçün
        keyfiyyətli uşaq qidası, paltarlar, oyuncaqlar və məktəb ləvazimatları
        əldə etmək olar.Əsas prinsipi sağlam qidaya üstünlük olan Neptun
        Supermarketlər şəbəkəsi optimal şəraitdə saxlanılan məhsullarla artıq 20
        ildən çoxdur ki, geniş alıcı kütləsinin inamını qazanıb..
      </article>
      <img className="py-4" src="https://neptun.az/image/cache/webp/catalog/bannerler/neptun-haqqimizda-1380x450.webp?v=9" />
    </div>
      </div>
    </>
  
  );
}

export default Haqqimizda;
