import React from "react";
import { Link } from "react-router-dom";
import BestSellerSlider from "./BestSellerSlider";

function BestSellers() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-[14.3px]">Ən çox satılanlar</p>
        <Link className="text-orange" to="/">
          Hamısına bax
        </Link>
      </div>
      <div>
        <BestSellerSlider />
      </div>
    </div>
  );
}

export default BestSellers;
