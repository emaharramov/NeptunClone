import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Kategory({
  data,
  handleCloseSubMenu,
  handleOpenSubMenu,
  openSubMenuIndex,
  showSubMenu,
  setShowSubMenu,
  fixedMenu,
  isMobile,
  pathname,
}) {
  const [openMobilMenu, setOpenMobilMenu] = useState(false);
  function openMenu() {
    if (fixedMenu || true) {
      setShowSubMenu(true);
    }
  }
  function closeMenu() {
    if (true && pathname !== "/") {
      setShowSubMenu(false);
    }
  }
  function mobileSubMenu() {
    setOpenMobilMenu((prev) => !prev);
  }
  function getLastPartOfSlug(slug) {
    const parts = slug.split("/");
    return parts.pop(); // Son kısmı döndürür
  }
  return (
    <>
      <div onMouseLeave={closeMenu} className="flex items-center lg:bg-white lg:relative z-10 lg:w-[250px]">
        <div className=" bg-orange rounded-t-lg w-full h-[5px] absolute bottom-[100%] left-0"></div>
        <span
          onMouseEnter={openMenu}
          className="text-white lg:text-orange flex items-center sm:px-4 sm:py-3  text-sm fonts-[Noto] font-medium h-full w-full"
        >
          {isMobile ? (
            <HiOutlineBars3CenterLeft onClick={mobileSubMenu} className="me-2 text-2xl" />
          ) : (
            <>
              <IoMdMenu className="text-orange me-2 text-2xl" /> Kateqoriyalar
            </>
          )}
        </span>

        <div
          className={` bg-white w-[80%] md:w-96 lg:w-full absolute  top-[100%] ${
            openMobilMenu ? "left-0" : "left-[-100%]"
          }  lg:left-0 ${showSubMenu ? "opacity-1 visible" : "opacity-0 invisible"} transition-all duration-1000 lg:duration-0`}
        >
          <ul className={`relative ${isMobile ? "none" : "initial"}`}>
            {data?.map((item, i) => (
              <li
                key={i}
                onMouseEnter={!isMobile ? () => handleOpenSubMenu(i) : undefined}
                onMouseLeave={!isMobile ? handleCloseSubMenu : undefined}
                onClick={isMobile ? () => handleOpenSubMenu(i) : undefined}
                className="px-3 relative cursor-pointer"
              >
                <span className=" flex justify-between py-[.6rem] items-center border-b-[1px]  border-grey">
                  <div className="flex  font-bold text-[.7rem]  gap-2 items-center">
                    <img className="w-[1.17rem]" src={item.icon} alt={item.name} />
                    {item.name}
                  </div>
                  <div className=" text-[.56rem] text-[gray] font-extralight">
                    {window.innerWidth > 994 && item.submenu?.length > 0 ? <FaAngleRight /> : ""}
                    {window.innerWidth < 994 && item.submenu?.length > 0 ? <FaAngleDown /> : ""}
                  </div>
                </span>
                {openSubMenuIndex === i && item.submenu && item.submenu?.length > 0 && (
                  <div
                    className={`${
                      isMobile ? "" : "absolute h-[200px]"
                    } bg-white w-full text-[.8rem] overflow-y-auto border-l-2 border-l-orange py-1 px-6 top-[100%] left-0 lg:left-[100%] lg:top-0`}
                  >
                    
                    <ul className="submenu">
                      {item.submenu.map((subitem, j) => (
                        <li className="my-4" key={j}>
                          <Link to={`category/${getLastPartOfSlug(subitem.slug)}`}>{subitem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {showSubMenu ? "" : <div className=" bg-orange rounded-b-lg w-full h-[5px] absolute top-[100%] left-0"></div>}
      </div>
    </>
  );
}

export default Kategory;
