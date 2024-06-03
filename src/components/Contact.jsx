import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ContactForm from "./ui/ContactForm";

function Contact() {
  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
          Ana Səhifə <MdOutlineKeyboardArrowRight /> Əlaqə
        </div>
        <div className="container mx-auto pb-14">
          <div className="flex flex-wrap">
            <iframe
              src="https://www.google.com/maps/d/u/1/embed?mid=1jGglul00JBwAusg1TLh9cnylYY1AS3Rx"
              className="md:px-[15px] mb-5 lg:mb-0 w-full lg:w-[767px] h-[300px] md:h-[480px]"
            ></iframe>
            <div className="px-[15px] w-full lg:w-[332px]">
              <div className="flex gap-x-[15px] mb-[22px] items-center">
                <img src="https://neptun.az/image/catalog/supermarketler/map-1.png" />
                <div className="text-[15.4px] font-bold">
                  <p className="mb-2">Baş ofis:</p>
                  <p>Bakı ş., Nəsimi r-nu, Tbilisi pr.1058</p>
                </div>
              </div>
              <div className="flex gap-x-[15px] mb-[22px] items-center">
                <img src="https://neptun.az/image/catalog/supermarketler/cell.png" />
                <div className="text-[15.4px] font-bold">
                  <div class="con_text">
                    <a href="tel:162">162</a> |{" "}
                    <a href="tel:994125308263">+994 12 530 82 63</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-[15px] mb-[22px] items-center">
                <img src="https://neptun.az/image/catalog/supermarketler/envelope.png" />
                <div className="text-[15.4px] font-bold">
                  <div>
                    <a href="mailto:info@neptun.az">info@neptun.az</a>
                  </div>
                </div>
              </div>


              <div className="contact flex flex-col gap-y-2">
                <input type="text" placeholder="Adınız*" />
                <input type="email" placeholder="E-mail ünvanınız*" />
                <textarea
                className="h-[89px]"
                  name="enquiry"
                  rows="10"
                  id="input-enquiry"
                  placeholder="Sual və ya ismarıcınız*"
                ></textarea>
                <div>
                  <input
                    type="text"
                    placeholder="Aşağıdakı kodu daxil edin **"
                  />
                  <img className="my-2" src="https://neptun.az/index.php?route=extension/captcha/basic_captcha/captcha" />
                </div>
                <button className="tesdiq">Təsdiqlə</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
