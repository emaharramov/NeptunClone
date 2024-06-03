import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Register() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> Hesab
            <MdOutlineKeyboardArrowRight /> Giriş
          </div>

          <div className="text-[11px] alert alert-danger hidden">
            <i className="fa fa-exclamation-circle mr-2"></i> E-mail ünvanı və
            ya şifrə yanlışdır.
          </div>

          <div className="flex flex-wrap gap-y-4 pb-10">
            <div className="p-5 w-full lg:w-[430px] bg-white lg:mr-[15px] h-[395px]">
              <h2 className="text-[27px] mb-[15px]">Yeni müştəri</h2>
              <p className="text-[13px] font-semibold leading-[24px] mb-[10px]">
                Hesab qeydiyyatı
              </p>
              <p className="text-[13px] leading-[24px] mb-[10px]">
                Hesab yaradaraq saytın tam funksionallığından istifadə edə
                bilərsiniz.
              </p>
              <a
                href="https://neptun.az/create-account"
                className="bg-orange hover:bg-[#E97901] py-[5px] px-[20px] rounded-[23px] text-[14px] text-white"
              >
                Davam et
              </a>
            </div>

            <div className="p-5  w-full lg:w-[430px] bg-white lg:ml-[15px] lg:mr-[15px] h-[395px] reg">
              <h2 className="text-[27px] mb-[15px]">Daimi müştəri</h2>
              <p className="text-[13px] font-semibold leading-[24px] mb-[10px]">
                Mən daimi müştəriyəm
              </p>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[12px]">
                  E-mail ünvanı
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="E-mail ünvanı"
                  className="mb-[10px] mt-[5px] bg-[#f2f2f2]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pass" className="text-[12px]">
                  Şifrə
                </label>
                <input
                  type="text"
                  id="pass"
                  placeholder="Şifrə"
                  className="mb-[10px] mt-[5px] bg-[#f2f2f2]"
                />
                <a
                  className="text-[11px] hover:text-orange mb-[15px]"
                  href="https://neptun.az/forgot-password"
                >
                  Şifrənizi unutmusunuz?
                </a>
              </div>
              <a
                href=""
                className="bg-orange hover:bg-[#E97901] py-[5px] px-[20px] rounded-[23px] text-[14px] text-white"
              >
                Giriş
              </a>
            </div>

            <div className="bg-white w-full lg:w-[270px]">
              <h3 className="modtitle pl-[10px] py-[3px]">
                <span>Hesab</span>
              </h3>
              <div className="module-content relative custom-border">
                <ul className="list-box">
                  <li>
                    <a href="https://neptun.az/login">Giriş</a>/
                    <a href="https://neptun.az/create-account">Qeydiyyat</a>
                  </li>
                  <li>
                    <a href="https://neptun.az/forgot-password">
                      Şifrənizi unutmusunuz?
                    </a>
                  </li>
                  <li>
                    <a href="https://neptun.az/my-account">Hesabım</a>
                  </li>
                  <li>
                    <a href="https://neptun.az/address-book">Ünvan kitabçası</a>
                  </li>
                  <li>
                    <a href="https://neptun.az/wishlist">Arzu siyahısı</a>
                  </li>
                  <li>
                    <a href="https://neptun.az/order-history">
                      Sifariş tarixçəsi
                    </a>
                  </li>
                  <li>
                    <a href="https://neptun.az/recurring">
                      Təkrarlanan ödəmələr
                    </a>
                  </li>
                  <li>
                    <a href="https://neptun.az/reward-points">Bonus xalları</a>
                  </li>
                  <li>
                    <a href="https://neptun.az/returns">Geri qaytarma</a>
                  </li>
                  <li>
                    <a href="https://neptun.az/transactions">Əməliyyatlar</a>
                  </li>
                  <li>
                    <a href="https://neptun.az/newsletter">Xəbər bülleteni</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
