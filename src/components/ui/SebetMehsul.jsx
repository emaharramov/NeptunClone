import React from "react";
import { removeFromCart } from "../../data/slices/Sebet";
import { useDispatch } from "react-redux";
function SebetMehsul({item}) {
  const dispatch = useDispatch()
  const sebetdensil = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  return (
    <>
      {item && (
        <div className="flex items-center h-[80px] justify-between bg-[#F9F9F9]">
          <img className="p-2 w-20" src={item.img} alt={item.name} />
          <a className="p-2 text-left hover:text-orange" href="#">
            {item.name}
          </a>
          <span className=" flex text-center p-2">
            x <span className="ml-1">{item.count}</span>
          </span>
          <span className="text-center p-2 ">
            {(item.count *item.price).toFixed(2)}
            <span>₼</span>
          </span>
          <span className="p-2">
            <button className="fa fa-trash-o p-[3px] hover:text-orange" onClick={() => sebetdensil(item.id)}></button>
          </span>
        </div>
      )}
      
    </>
  );
}

export default SebetMehsul;

