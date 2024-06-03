import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function SliderHomeSecond() {
  return (
    <div>
      <OwlCarousel className="owl-theme relative sliderHome" navClass="pr"  autoplay='true' autoplayTimeout='5000' smartSpeed='1500' items='1' loop margin={10} nav >
        <div className="item">
            <div className="absolute p-[19px] bg-sliderItemColor  text-white font-[18px]">
                <p>Kateqoriyalar: <br /> <span> Meyvə </span> </p>
            </div>
          <img src="https://neptun.az/image/catalog/bannerler/xususi-teklif/meyve-terevez.jpg" />
        </div>
        <div className="item">
          <img src="https://neptun.az/image/catalog/YEN%C4%B0/MEHSUL/11.05.2020/cerez.jpg" />
        </div>
        <div className="item">
          <img src="https://neptun.az/image/catalog/A.Narmin/A.Narmin2/narminn/nrmn/untitled%20folder/narminn/Narmin/narmin/nrmnn/qovluq/narmin/550x550reklam1.jpg" />
        </div>
        <div className="item">
          <img src="https://neptun.az/image/catalog/bannerler/xususi-teklif/siyniyyat.jpg" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default SliderHomeSecond;
