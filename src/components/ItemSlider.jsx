// import React, { useState } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import ItemCard from "./ui/ItemCard";


// function ItemSlider() {
//   const [sliderHover, setSliderHover] = useState(true);


//   const handleMouseEnter = () => {
//     setSliderHover((prev) => !prev);
//   };

//   return (
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
//       <OwlCarousel
//         className="owl-theme relative itemSlider"
//         navClass="pr"
//         autoplay={sliderHover}
//         autoplayTimeout="5000"
//         smartSpeed="1500"
//         items="4"
//         loop
//         margin={7}
//         nav
//       >
//         <div className="item">
//             <ItemCard />
//           </div>
//       </OwlCarousel>
//     </div>
//   );
// }

// export default ItemSlider;
import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ItemCard from "./ui/ItemCard";
import { randomItems } from './../data/data'; // Rastgele seçilen öğeleri buradan import edin

function ItemSlider() {
  const [sliderHover, setSliderHover] = useState(true);

  const handleMouseEnter = () => {
    setSliderHover((prev) => !prev);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
      <OwlCarousel
        className="owl-theme relative itemSlider"
        navClass="pr"
        autoplay={sliderHover}
        autoplayTimeout="5000"
        smartSpeed="1500"
        items={window.innerWidth > 930 ? 4 : 2}
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

export default ItemSlider;

