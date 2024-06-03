import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { HiArrowDown } from "react-icons/hi2";

function CatalogSlider() {
  const [sliderHover, setSliderHover] = useState(true);

  const handleMouseEnter = () => {
    setSliderHover((prev) => !prev);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
      <OwlCarousel
        className="owl-theme relative itemSlider catalogSlide"
        navClass="pr"
        autoplay={sliderHover}
        autoplayTimeout="5000"
        smartSpeed="1500"
        items={window.innerWidth < 768 ? 1 : 3}
        loop
        margin={7}
        nav
      >
        <div className="item">
          <div className="px-[10px] pt-[3px] pb-[17px] rounded-[7px]">
            <img src="https://neptun.az/image/catalog/1.2024/15-30aprelkataloq202418versiyaseh1(1).png" />
            <div className="bg-white py-2 px-4 text-[11px] font-semibold flex justify-between">
              <div>
                <a
                  className="transition-[.3s] hover:text-orange"
                  href="https://neptun.az/image/catalog/26.04.24/15-30aprelkataloq202418versiya(1).pdf"
                  target="_blank"
                >
                  "Xüsusi Endirimlər 15-30 Aprel" <br /> (PDF, 3.11 MB)
                </a>
              </div>
              <div>
                <HiArrowDown className="text-[2.7em]" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="px-[10px] pt-[3px] pb-[17px] rounded-[7px]">
            <img src="https://neptun.az/image/catalog/1.2024/2024aprelkataloq18versiyaseh1(1).png" />
            <div className="bg-white py-2 px-4 text-[11px] font-semibold flex justify-between">
              <div>
                <a
                  className="transition-[.3s] hover:text-orange"
                  href="https://neptun.az/image/catalog/1.2024/2024aprelkataloq18versiya_compressed(1).pdf"
                  target="_blank"
                >
                  "Bahar Təmizliyi 01-14 Aprel" <br /> (PDF, 18.25 MB)
                </a>
              </div>
              <div>
                <HiArrowDown className="text-[2.7em]" />
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="px-[10px] pt-[3px] pb-[17px] rounded-[7px]">
            <img src="https://neptun.az/image/catalog/1.2024/novruzkataloq1(1).jpg" />
            <div className="bg-white py-2 px-4 text-[11px] font-semibold flex justify-between">
              <div>
                <a
                  className="transition-[.3s] hover:text-orange"
                  href="https://neptun.az/image/catalog/1.2024/novruzkataloq1.pdf"
                  target="_blank"
                >
                  "Novruz Payı 05-25 Mart" <br /> (PDF, 4.75 MB)
                </a>
              </div>
              <div>
                <HiArrowDown className="text-[2.7em]" />
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default CatalogSlider;
