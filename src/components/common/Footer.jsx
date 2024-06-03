import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import FooterSvg from "../FooterSvg";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [showFootMenu, setshowFootMenu] = useState(false);

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const emailRegex = /^[\w.%+-]+@[A-Za-z]{2,}\.[A-Za-z]{2,}$/;
    setIsValid(emailRegex.test(inputValue));
  };

  const handleFootMenu = () => {
    setshowFootMenu((prev) => !prev);
  };
  return (
    <>
    <div className="bg-orange overflow-hidden relative footer font-[Noto] text-white">
    <FooterSvg />
      <div className="px-[30px]">
        <div className="md:w-[80%] footerSec flex justify-center md:justify-start">
          <div className="flex flex-wrap pr-6 items-center mr-[27px]">
            <img
              className="mb-[6px] mr-6 md:mb-[0px]"
              src="https://neptun.az/image/footer_img/delivery.svg"
              alt=""
            />
            <p className="text-[11px] text-white font-semibold">
              Pulsuz çatdırılma <br /> 50 azn-dən yuxarı
            </p>
          </div>
          <div className="flex flex-wrap pr-6 items-center mr-[27px]">
            <img
              className="mb-[6px] mr-6 md:mb-[0px]"
              src="https://neptun.az/image/footer_img/cash.svg"
              alt=""
            />
            <p className="text-[11px] text-white font-semibold">
              Nağd və ya <br /> kartla ödəniş
            </p>
          </div>
          <div className="flex flex-wrap pr-6 items-center mr-[27px]">
            <img
              className="mb-[6px] mr-6 md:mb-[0px]"
              src="https://neptun.az/image/footer_img/gift.svg"
              alt=""
            />
            <p className="text-[11px] text-white font-semibold">
              Hədiyyə <br />
              kuponları
            </p>
          </div>
          <div className="flex-wrap pr-6 hidden md:flex items-center mr-[27px]">
            <img
              className="mb-[6px] mr-6 md:mb-[0px]"
              src="https://neptun.az/image/footer_img/online.svg"
              alt=""
            />
            <p className="text-[11px] text-white font-semibold">
              Onlayn <br />
              müştəri xidmətləri
            </p>
          </div>
          <div className="flex-wrap pr-6 hidden md:flex items-center mr-[27px]">
            <img
              className="mb-[6px] mr-6 md:mb-[0px]"
              src="https://neptun.az/image/footer_img/mobile.svg"
              alt=""
            />
            <p className="text-[11px] text-white font-semibold">
              Sürətli <br />
              mobil mağaza
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center mt-12">
            <p className="text-[11px] pb-3 font-bold w-[114.93px] mr-7">
              Bizə abunə olun
            </p>
            <div className="rounded-[20px] w-[330px] md:w-[initial] h-[42px] border-[1px]  inline-flex justify-between border-[#fff] bg-white">
              <input
                type="text"
                placeholder="e-poçt ünvanınız"
                className={`md:w-60 outline-none px-3 rounded-l-[20px] text-[#999] text-[12px] ${
                  isValid ? "" : "border-red-500"
                }`}
                value={email}
                onChange={handleChange}
              />
              <button className="px-4 font-semibold rounded-[20px] bg-orange">
                Abunə ol
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center mt-6">
            <p className="text-[11px] font-bold mr-7 pb-3">
              Sms xəbərdarlıq üçün
            </p>

            <div className="w-[330px] md:w-[initial]">
              <select className="text-[#999] text-[14px] h-[42px] rounded-[20px] p-2 mr-3 outline-none">
                <option defaultValue=""  disabled>
                  ---
                </option>
                <option value="050">050</option>
                <option value="051">051</option>
                <option value="055">055</option>
                <option value="070">070</option>
                <option value="077">077</option>
              </select>

              <div className="rounded-[20px] h-[42px] border-[1px] inline-flex justify-between border-[#fff] bg-white">
                <input
                  type="text"
                  placeholder="XXX YY ZZ"
                  className="md:w-[170px]  outline-none px-3 rounded-l-[20px] text-[#999] text-[12px]"
                />
                <button className="px-4 font-semibold rounded-[20px] bg-orange">
                  Abunə ol
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center mt-6">
            <p className="text-[11px] font-bold w-[103.3px] mr-7 pb-3">
              Bizi izləyin
            </p>
            <div>
              <ul className="flex items-center gap-x-1">
                <li className="bg-white cursor-pointer text-orange p-2 transition-all rounded-full hover:bg-[#dd7200] hover:text-white">
                  <a href="" target="_blank">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="bg-white cursor-pointer text-orange p-2 transition-all rounded-full hover:bg-[#dd7200] hover:text-white">
                  <a href="" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li className="bg-white cursor-pointer text-orange p-2 transition-all rounded-full hover:bg-[#dd7200] hover:text-white">
                  <a href="" target="_blank">
                    <TfiYoutube />
                  </a>
                </li>
                <li className="bg-white cursor-pointer text-orange p-2 transition-all rounded-full hover:bg-[#dd7200] hover:text-white">
                  <a href="" target="_blank">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleFootMenu}
              className="md:hidden text-[13px] border-b-[1px] border-dotted mb-3"
            >
              {showFootMenu ? "Daha az" : "Daha çox"}
            </button>
            <div
              className={`${isMobile ? "" : "flex"}  transition-[.5s] ${
                showFootMenu ? "opacity-1 visible" : "hidden md:visible md:opacity-1 md:h-full"
              }`}>
                <div className="mr-4">
                  <ul>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Haqqımızda
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Siyasətimiz
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Yeniliklər
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mr-4">
                  <ul>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Aksiyalar
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Kampaniyalar
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Neptun bonus kart
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Elektron kataloq
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mr-4">
                  <ul>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Mağazalarımız
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        İrad və təkliflər
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Alıcıların nəzərinə
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Partnyorluq
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Supermarketdə reklam
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mr-4">
                  <ul>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Karyera
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        İşə qəbul proseduru
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Vakansiyalar
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        CV yerləşdirin
                      </Link>
                    </li>
                    <li className="flex items-center mb-3">
                      <MdKeyboardArrowRight />
                      <Link to={"/"} className="text-[13px] hover:text-[#f0f0f0]">
                        Supermarketdə reklam
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="flex items-center h-[150px]">
            <img
              className="w-[220px] h-[47px]"
              src="src/assets/img/solitonLogo.png"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px]">
              © 2003 - 2023 Neptun Supermarket. All rights reserved{" "}
            </span>
            <span className="text-[13px] flex items-center mt-2">
              Created by:
              <a href="https://amiroff.az/ru" target="_blank">
                <img
                  className="amiroff"
                  src="https://neptun.az/image/catalog/footer/amiroff_creative_agency.png"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center py-[22px]">
      <img src="https://neptun.az/image/catalog/footer/visalogo.svg" />
    </div>
    </>
  );
}

export default Footer;
