import React from "react";

function SearchResult({ results }) {
  return (
    <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-full mt-2 z-10">
      {results.map((item, index) => (
        <div key={index} className="flex items-center p-2 border-b last:border-b-0">
          <img src={item.img} alt={item.name} className="w-10 h-10 object-cover mr-2" />
          <div>
            <div className="text-sm font-semibold">{item.name}</div>
            <div className="text-sm text-gray-600">{item.price}₼</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
