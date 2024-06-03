// import React, { useState } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import ItemCard from "./ui/ItemCard";

// function BestSellerSlider() {
//   const [sliderHover,setSliderHover] = useState(true);

//   const handleMouseEnter = () => {
//     setSliderHover((prev) => !prev);
//   };

//   return (
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
//       <OwlCarousel className="owl-theme relative bestSeller" navClass="pr"  autoplay={sliderHover} autoplayTimeout='5000' items={window.innerWidth > '930' ? '6' : '3' } smartSpeed='1500' loop margin={7} nav >
//         <div className="item">
//             <ItemCard/>
//         </div>
//         <div className="item">
//         <ItemCard/>
//         </div>
//         <div className="item">
//         <ItemCard/>
//         </div>
//         <div className="item">
//         <ItemCard/>
//         </div>
//         <div className="item">
//         <ItemCard/>
//         </div>
//         <div className="item">
//         <ItemCard/>
//         </div>
//         <div className="item">
//         <ItemCard/>
//         </div>
//       </OwlCarousel>
//     </div>
//   );
// }

// export default BestSellerSlider;
import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ItemCard from "./ui/ItemCard";
import { randomItems } from './../data/data'; // Rastgele seçilen öğeleri buradan import edin

function BestSellerSlider() {
  const [sliderHover, setSliderHover] = useState(true);

  const handleMouseEnter = () => {
    setSliderHover((prev) => !prev);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
      <OwlCarousel
        className="owl-theme relative bestSeller"
        navClass="pr"
        autoplay={sliderHover}
        autoplayTimeout="5000"
        items={window.innerWidth > 930 ? 6 : 3}
        smartSpeed="1500"
        loop
        margin={7}
        nav
      >
        {randomItems.map((item, index) => (
          <div className="item" key={index}>
            <ItemCard items={item} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default BestSellerSlider;

