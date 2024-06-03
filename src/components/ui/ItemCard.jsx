import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { sebetQutusuState, sebeteElaveEt } from "./../../data/slices/Sebet";
import { useDispatch, useSelector } from "react-redux";
function ItemCard({ items }) {
  console.log(items, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [eded, setEded] = useState(items?.count);

  const plusNum = (x) => {
    setEded((prevNum) => Math.max(prevNum + x, 1));
  };

  // const minusNum = () => {
  //   if (eded > 1) setEded((prevNum) => prevNum - 1);
  // };

  const handleHover = () => {
    setSearch((search) => !search);
  };


  function SendProductToBasket() {
    const updatedItem = {
      ...items,
      count: eded,
    };
    dispatch(sebeteElaveEt(updatedItem));
  }

  return (
    <>
      {items ? (
        <div className="  itemSlider  pt-[3px] relative pb-[17px] bg-white rounded-[7px] overflow-hidden ">
          <div className="py-[1px] cursor-pointer absolute  z-10 right-0 top-0 px-[6px]">
            <div id="heart">
              <svg className="heart" xmlns="http://www.w3.org/2000/svg" width="21.6" height="22" viewBox="-5 0 156.69 110.07">
                <path
                  id="neptun_heart_products"
                  data-name="neptun_heart_products"
                  className="cls-2"
                  d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                  transform="translate(-1191.655 -217.465)"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative addfav cursor-pointer flex justify-center">
            <div className={`absolute mt-[2px] addfavCon flex  flex-col-reverse justify-center`}>
              <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`bg-orange p-2 rounded-[50%] searchİcon`}>
                <IoIosSearch className="text-white text-[1.2em]" />
              </div>
              <div className={`w-full transition-[.3s] ${search ? "opacity-1" : "opacity-0"} flex justify-center searchİconInfo`}>
                <div className="bg-[black] w-[100px] text-white text-[12px] inline-flex justify-center absolute rounded-[4px] font-[HelveticaNeueRoman] py-[3px] px-2 z-10">
                  Sürətli baxış
                </div>
                <div className="mt-[8px] altCizgi"></div>
              </div>
            </div>
            <div className="bg-red w-full">
              <img className="w-full " src={items.img} />
            </div>
          </div>
          <div className="md:mx-5 text-center">
            <div className="my-3 text-[10px] font-semibold h-8 overflow-hidden">{items.name}</div>
            <div className="text-[22px] text-[#181818] font-bold pb-3">
              <span>{items.price}</span>
              <span>₼</span>
            </div>
            <div className="flex justify-center items-center">
              <FaMinus onClick={() => plusNum(-1)} className="text-orange text-[12px]" />
              <span className="px-2 text-[11px] font-semibold">
                {eded} <span>ədəd</span>
              </span>
              <FaPlus onClick={() => plusNum(1)} className="text-orange text-[12px]" />
            </div>
            <button
              onClick={SendProductToBasket}
              className="bg-orange py-[2px] px-2 my-[25px] md:my-[0] md:mt-[5px] text-white rounded-[60px]"
            >
              Səbətə at
            </button>
          </div>
        </div>
      ) : (
        <div>item yoxdu</div>
      )}
    </>
  );
}

export default ItemCard;
