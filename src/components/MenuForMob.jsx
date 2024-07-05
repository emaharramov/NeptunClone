import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function MenuForMob({ showMenuForMob, setshowMenuForMob }) {
  const [haqqimizdaOpen, setHaqqimizdaOpen] = useState(false);
  const [aksiyalar, setAksiyalarOpen] = useState(false);
  const [superMarket, setsuperMarket] = useState(false);
  const [karyera, setKaryera] = useState(false);

  const toggleHaqqimizda = () => {
    setHaqqimizdaOpen(!haqqimizdaOpen);
  };
  const toggleAksiyalar = () => {
    setAksiyalarOpen(!aksiyalar);
  };
  const toggleMarket = () => {
    setsuperMarket(!superMarket);
  };
  const karyer = () => {
    setKaryera(!karyera);
  };

  return (
    <>
      <div className="w-full flex justify-end items-center cursor-pointer">
        <IoClose
          onClick={() => {
            setshowMenuForMob(false);
          }}
          className="mb-[10px]"
        />
      </div>
      <ul className="flex flex-col h-full menu menuForWeb">
        <li>
          <Link to="/" className="yazi">
            Ana səhifə
          </Link>
        </li>
        <li
          className={`relative border-b-2 duration-300 ${
            haqqimizdaOpen ? "border-[#ef7b00]" : "border-[#ddd]"
          }`}
         >
          <div
            className={`flex justify-between items-center w-full cursor-pointer`}
            onClick={toggleHaqqimizda}
           >
            <Link to="/haqqimizda" className="flex items-center yazi">
              Haqqımızda
            </Link>

            <div
              className={`p-[1px] ${
                haqqimizdaOpen ? "bg-[#5C5C5C]" : "bg-[#ff8300]"
              }`}
            >
              {haqqimizdaOpen ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>
          </div>
        </li>
        <div
          className={`overflow-hidden transition-max-height duration-500 ${
            haqqimizdaOpen ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <div>
            <Link
              to="/siyasetimiz"
              className="subMenu py-[10px]  text-[#5a5a5a] inline-block"
            >
              Siyasətimiz
            </Link>
          </div>
          <div>
            <Link
              to="/yenilikler"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Yeniliklər
            </Link>
          </div>
        </div>
        <li
          className={`relative border-b-2 duration-300 ${
            aksiyalar ? "border-[#ef7b00]" : "border-[#ddd]"
          }`}
        >
          <div
            className={`flex justify-between items-center w-full cursor-pointer`}
            onClick={toggleAksiyalar}
          >
            <Link to="/aksiyalar" className="flex items-center yazi">
              Aksiyalar
            </Link>

            <div
              className={`p-[1px] ${
                aksiyalar ? "bg-[#5C5C5C]" : "bg-[#ff8300]"
              }`}
            >
              {aksiyalar ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>
          </div>
        </li>
        <div
          className={`overflow-hidden transition-max-height duration-500 ${
            aksiyalar ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <div>
            <Link
              to="/aksiyalar"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Kampaniyalar
            </Link>
          </div>
          <div>
            <Link
              to="/neptunbonuskart"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Neptun Bonus Kart
            </Link>
          </div>
          <div>
            <Link
              to="/catalog"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Elektron Kataloq
            </Link>
          </div>
        </div>



        <li
          className={`relative border-b-2 duration-300 ${
            superMarket ? "border-[#ef7b00]" : "border-[#ddd]"
          }`}
        >
          <div
            className={`flex justify-between items-center w-full cursor-pointer`}
            onClick={toggleMarket}
          >
            <Link to="/supermarketler" className="flex items-center yazi">
              Supermarketlər
            </Link>

            <div
              className={`p-[1px] ${
                superMarket ? "bg-[#5C5C5C]" : "bg-[#ff8300]"
              }`}
            >
              {superMarket ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>
          </div>
        </li>
        <div
          className={`overflow-hidden transition-max-height duration-500 ${
            superMarket ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <div>
            <Link
              to="/supermarketler"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Mağazalarımız
            </Link>
          </div>
          <div>
            <Link
              to="/reviews"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              İrad Və Təkliflər
            </Link>
          </div>
          <div>
            <Link
              to="/alicilarin-nezerine"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Alıcıların Nəzərinə
            </Link>
          </div>
          <div>
            <Link
              to="/partners"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Partnyorluq
            </Link>
          </div>
          <div>
            <Link
              to="/terefdaslar"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Tərəfdaşlar
            </Link>
          </div>
          <div>
            <Link
              to="/reklam"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Supermarketdə Reklam
            </Link>
          </div>
        </div>
        


        <li
          className={`relative border-b-2 duration-300 ${
            karyera ? "border-[#ef7b00]" : "border-[#ddd]"
          }`}
        >
          <div
            className={`flex justify-between items-center w-full cursor-pointer`}
            onClick={karyer}
          >
            <Link to="/karyera" className="flex items-center yazi">
              Karyera
            </Link>

            <div
              className={`p-[1px] ${
                karyera ? "bg-[#5C5C5C]" : "bg-[#ff8300]"
              }`}
            >
              {karyera ? (
                <FaMinus className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>
          </div>
        </li>
        <div
          className={`overflow-hidden transition-max-height duration-500 ${
            karyera ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          <div>
            <Link
              to="/karyera"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              İşə qəbul proseduru
            </Link>
          </div>
          <div>
            <Link
              to="/karyera"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              Vakansiyalar
            </Link>
          </div>
          <div>
            <Link
              to="/karyera"
              className="subMenu py-[10px] text-[#5a5a5a] inline-block"
            >
              CV Yerləşdirin
            </Link>
          </div>
        </div>
        <li
          className="relative border-b-2 border-[#ddd]"
        >
        <Link to="/contact" className="flex items-center yazi">
              Əlaqə
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MenuForMob;
