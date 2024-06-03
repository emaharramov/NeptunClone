import React from "react";
import { Link } from "react-router-dom";

function DiscountedProducts() {
  return (
    <div className="pt-7">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[14.3px]">Endirimli məhsullar</p>
        <Link className="text-orange" to="/" >
          Hamısına bax
        </Link>
      </div>
      <div className="p-5 my-5 text-[11px] text-[black]">
        Göstəriləcək məhsul yoxdur!
      </div>
    </div>
  );
}

export default DiscountedProducts;
