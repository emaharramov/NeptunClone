import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { sebetQutusuState } from "../../data/slices/Sebet";
import { PiShoppingCartLight } from "react-icons/pi";
import SebetMehsul from "./SebetMehsul";

function SebetBox() {
  const sebetmehsullari = useSelector(sebetQutusuState);
  const [sebetActive, setSebetActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0); 
  const toggleSebet = () => setSebetActive((prev) => !prev);
  const sebetItemCount = sebetmehsullari.length;
  useEffect(() => {
    const totalPrice = sebetmehsullari.reduce((acc, item) => acc + (item.count * item.price), 0);
    setTotalPrice(totalPrice);
  }, [sebetmehsullari]);

  return (
    <>
      <div className="cursor-pointer" onClick={toggleSebet}>
        <span className="absolute top-[-12px] px-1 rounded-lg right-[-12px] text-black text-[.8em] bg-[#0F0]">
          {sebetItemCount > 0 ? sebetItemCount : "0"}
        </span>
        <PiShoppingCartLight className="text-white text-[1.1em]" />
      </div>
      <div
        className={` z-20 bg-green absolute duration-300 ${sebetActive ? "visible opacity-100" : "invisible opacity-0"}
        sebet right-0 bg-white text-[11px] text-center top-10 border-t-[3px] border-[#e17400] z-10 ml-[-200px] w-[200px]
        ${sebetItemCount > 0 ? "w-[307px]" : "h-[50px] flex items-center justify-center"}`}
      >
        {sebetItemCount > 0 ? (
          <>
            {sebetmehsullari.map((item) => (
              <SebetMehsul item={item} />
            ))}
            <div className="text-left mt-4">
              <p className="genSum">
                Ümumi məbləğ:
                <span className="font-normal ml-2">
                  {totalPrice.toFixed(2)}
                  <span>₼</span>
                </span>
              </p>
              <div className="flex justify-between px-4 pb-2">
                <a
                  href="https://neptun.az/cart"
                  className="text-white hover:text-white text-[14px] py-[9px] px-5 bg-[#555] hover:bg-orange rounded-[27px]"
                >
                  Səbət
                </a>
                <a
                  className="text-white grid place-items-center hover:text-white text-[14px] py-[5px] px-3 bg-orange hover:bg-[#e97901] rounded-[20px]"
                  href="https://neptun.az/checkout"
                >
                  Sifarişi rəsmiləşdir
                </a>
              </div>
            </div>
          </>
        ) : (
          "Səbətiniz boşdur!"
        )}
      </div>
    </>
  );
}

export default SebetBox;
