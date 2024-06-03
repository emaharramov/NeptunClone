import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ContactForm from "./ui/ContactForm";

function Reviews() {
  const [ratings, setRatings] = useState([0, 0, 0]);

  const handleClick = (index, cardIndex) => {
    const newRatings = [...ratings];
    newRatings[cardIndex] = index + 1;
    setRatings(newRatings);
  };

  return (
    <>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto">
          <div className="py-9 text-[#6C6C6C] font-semibold text-[13px] flex items-center">
            Ana Səhifə <MdOutlineKeyboardArrowRight /> İrad və təkliflər
          </div>
          <div className="flex justify-evenly items-center flex-wrap pb-[23px]">
            <p className="text-[14px] font-semibold text-[#000]">
              Müştəri məmnuniyyətini daha da artırmaq üçün bizim xidmət
              səviyyəmizi qiymətləndirməyinizi xahiş edirik.
            </p>
            <div className="flex items-center mt-4 lg:mt-0">
              {[...Array(5)].map((_, index) =>
                index < ratings[0] ? (
                  <FaStar
                    key={index}
                    className="text-orange cursor-pointer mr-1 text-[1.2em]"
                    onClick={() => handleClick(index, 0)}
                  />
                ) : (
                  <FaRegStar
                    key={index}
                    className="text-orange cursor-pointer mr-1 text-[1.2em]"
                    onClick={() => handleClick(index, 0)}
                  />
                )
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 cards pb-[40px]">
            <div className="w-full mx-auto">
              <p className="text-orange text-[14px] font-semibold py-5">
                Ümumi mağaza
              </p>
              <div className="flex flex-col justify-around cardlar h-[375px]">
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                    Dayanacaq
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[1] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 1)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 1)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                    Səs, müsiqi
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[2] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 2)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 2)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                    Havalandırma
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[3] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 3)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 3)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                    Təmizlik, səliqə
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[4] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 4)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 4)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                    Alış-veriş səbətləri
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[5] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 5)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 5)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                    Kassa xidməti
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[6] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 6)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 6)}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-orange text-[14px] font-semibold py-5">
              Məhsullar, aksiya və kampaniyalar
              </p>
              <div className="flex flex-col justify-around cardlar h-[375px]">
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Çeşidlik
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[7] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 7)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 7)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Qiymət
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[8] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 8)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 9)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Etiketlənmə
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[10] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 10)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 10)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Keyfiyyət və təzəlik
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[11] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 11)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 11)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Çeşidlərin tapılması
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[12] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 12)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 12)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Kampaniya və aksiyalar
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[13] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 13)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 13)}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
         
            <div>
              <p className="text-orange text-[14px] font-semibold py-5">
              Xidmət səviyyəsi
              </p>
              <div className="flex flex-col justify-around cardlar h-[375px]">
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Satış personalı
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[14] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 14)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 14)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Kassa personalı
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[15] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 15)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 15)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Müştəri xidməti personalı
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[16] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 16)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 16)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  Təhlükəsizlik personalı
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[17] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 17)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 17)}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="p-[10px] text-[.6em] text-[#7a7a7a]">
                  İdarəedici personal (administrator)
                  </p>
                  <div className="p-[10px] flex gap-x-[5px] text-[1em]">
                    {[...Array(5)].map((_, index) =>
                      index < ratings[18] ? (
                        <FaStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 18)}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-orange cursor-pointer mr-1 text-[1.2em]"
                          onClick={() => handleClick(index, 18)}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          
          </div>

          <div className="pb-[50px]">
          <ContactForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
