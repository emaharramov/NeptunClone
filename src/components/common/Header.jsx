import React, { useEffect, useState } from "react";
import Flag from "./../../assets/img/flag.png";
import Callcenter from "./../../assets/img/callcenter.png";
import Logo from "./../../assets/img/logo.png";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Kategory from "../Kategory";
import { FaLock } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { RiExchange2Line } from "react-icons/ri";
import { PiShoppingCartLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuForMob from "../MenuForMob";
import SebetMehsul from "../ui/SebetMehsul";
import { useSelector } from "react-redux";
import { sebetQutusuState } from "../../data/slices/Sebet";
import SebetBox from "../ui/SebetBox";

function Header() {
 
  const [fixedMenu, setFixedMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [showMenuForMob, setshowMenuForMob] = useState(false);

  const [pathname, setPathname] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.mirafgan.me/neptun/catalog")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 600) {
        setShowSubMenu(false);
        setFixedMenu(true);
      } else if (window.scrollY < 600 && location.pathname !== "/") {
        setFixedMenu(false);
        setShowSubMenu(false);
      } else {
        setShowSubMenu(true);
        setFixedMenu(false);
      }
    }
    function handleResize() {
      setIsMobile(window.innerWidth <= 992);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const handleOpenSubMenu = (index) => {
    setOpenSubMenuIndex(index);
  };

  const handleCloseSubMenu = () => {
    setOpenSubMenuIndex(null);
  };
  return (
    <header className="bg-white">
      <div
        className={`bg-white absolute xl:hidden p-5 w-[240px] ease-in duration-300 h-full z-20 ${
          showMenuForMob ? "left-[0px]" : "left-[-240px]"
        }`}
      >
        <MenuForMob showMenuForMob={showMenuForMob} setshowMenuForMob={setshowMenuForMob} />
      </div>
      <div className="md:container md:mx-auto">
        <div className="flex items-center  md:justify-between py-7">
          {/* <div className="grid grid-cols-2 items-center">
            <div className="w-[40%] md:w-[264px] me-3">
              <Link to={"/"}>
                <img src={Logo} alt="logo" className="w-full" />
              </Link>
            </div>
            <div className="border-[1px] border-orange flex items-center rounded-3xl">
              <IoSearch className="ps-2 text-xl md:text-3xl text-orange" />
              <input
                type="text"
                className="py-2 w-[300px] text-[12px] px-2 placeholder:fonts-[Noto] outline-none"
                placeholder="Məhsulu axtarin"
              />
              <button className="bg-orange hover:bg-[#e3732a] text-[13.6px] px-2 w-[68px] h-[44px] rounded-3xl text-white">
                Axtar
              </button>
            </div>
          </div> */}
           <div className="w-full md:w-[auto] grid grid-cols-5 items-center">
            <div className="  w-full col-span-2  md:w-[264px] me-3">
              <Link to={"/"}>
                <img src={Logo} alt="logo" className="w-full h-auto max-w-[150px] md:max-w-[264px]" />
              </Link>
            </div>
            <div className="border-[1px] relative col-span-3 border-orange flex items-center rounded-3xl">
              <IoSearch className="ps-2 text-xl md:text-3xl text-orange" />
              <input
                type="text"
                className="py-2 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] text-[12px] px-2 placeholder:fonts-[Noto] outline-none"
                placeholder="Məhsulu axtarin"
              />
              <button className="bg-orange absolute  hover:bg-[#e3732a] right-0 text-[13.6px] py-2 px-2 w-[68px]  rounded-3xl text-white">
                Axtar
              </button>
            </div>
          </div>
          <div
            onClick={() => setshowMenuForMob((prevMenu) => !prevMenu)}
            className="bg-orange cursor-pointer text-white p-[9px] rounded-[9px] text-[1.5em] hidden md:block xl:hidden"
          >
            <GiHamburgerMenu />
          </div>
          <div className="hidden xl:flex items-center">
            <img src={Flag} className="" alt="" />
            <span className="ms-2 me-5">AZE</span>
            <img src={Callcenter} alt="" />
          </div>
        </div>
      </div>
      <div className="relative lg:static">
        <div className={`bg-orange  transition duration-1000 z-10 ${fixedMenu ? "fixed top-0 right-0 left-0" : ""} `}>
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex">
                <Kategory
                  {...{
                    data,
                    fixedMenu,
                    handleCloseSubMenu,
                    handleOpenSubMenu,
                    openSubMenuIndex,
                    showSubMenu,
                    setShowSubMenu,
                    isMobile,
                    setIsMobile,
                    pathname,
                  }}
                />
                <div>
                  <ul className="hidden xl:flex lg:items-center h-full menu">
                    <li>
                      <Link to="/">Ana səhifə</Link>
                    </li>
                    <li className="relative group">
                      <Link to="/haqqimizda" className="mainHeadMenu flex items-center">
                        Haqqımızda <IoMdArrowDropdown className="text-base" />
                      </Link>
                      <div className="absolute top-12 hidden group-hover:block bg-[#fff] z-10 rounded-b-xl w-[200px] shadow-lg px-2">
                        <div>
                          <Link to="/siyasetimiz" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Siyasətimiz
                          </Link>
                        </div>
                        <div>
                          <Link to="/yenilikler" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Yeniliklər
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="relative group">
                      <Link to="/aksiyalar" className="mainHeadMenu flex items-center">
                        Aksiyalar <IoMdArrowDropdown className="text-base" />
                      </Link>
                      <div className="absolute subMenu top-12 hidden group-hover:block bg-[#fff] z-10 rounded-b-xl w-[200px] shadow-lg px-2">
                        <div>
                          <Link to="/aksiyalar" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Kampaniyalar
                          </Link>
                        </div>
                        <div>
                          <Link to="/neptunbonuskart" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Neptun Bonus Kart
                          </Link>
                        </div>
                        <div>
                          <Link to="/catalog" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Elektron Kataloq
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="relative group">
                      <Link to="/supermarketler" className="mainHeadMenu flex items-center">
                        Supermarketlər <IoMdArrowDropdown className="text-base" />
                      </Link>
                      <div className="absolute subMenu top-12 hidden group-hover:block bg-[#fff] z-10 rounded-b-xl w-[200px] shadow-lg px-2">
                        <div>
                          <Link to="/supermarketler" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Mağazalarımız
                          </Link>
                        </div>
                        <div>
                          <Link to="/reviews" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            İrad Və Təkliflər
                          </Link>
                        </div>
                        <div>
                          <Link to="/alicilarin-nezerine" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Alıcıların Nəzərinə
                          </Link>
                        </div>
                        <div>
                          <Link to="/partners" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Partnyorluq
                          </Link>
                        </div>
                        <div>
                          <Link to="/terefdaslar" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Tərəfdaşlar
                          </Link>
                        </div>
                        <div>
                          <Link to="/reklam" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Supermarketdə Reklam
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="relative group">
                      <Link to="/karyera" className="mainHeadMenu flex items-center">
                        Karyera <IoMdArrowDropdown className="text-base" />
                      </Link>
                      <div className="absolute subMenu top-12 hidden group-hover:block bg-[#fff] z-10 rounded-b-xl w-[200px] shadow-lg px-2">
                        <div>
                          <Link to="/karyera" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            İşə Qəbul Proseduru
                          </Link>
                        </div>
                        <div>
                          <Link to="/karyera" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            Vakansiyalar
                          </Link>
                        </div>
                        <div>
                          <Link to="/karyera" className="subMenu py-[10px] text-[#5a5a5a] inline-block">
                            CV Yerləşdirin
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/contact">Əlaqə</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center pr-3">
                <div className="flex items-center px-3 border-r-[1px] border-white cursor-pointer text-white hover:text-[#ffffffd0]">
                  <FaLock className=" text-[12px] mr-[3px] sm:mr-[7px]" />
                  <p className="text-[12px]">
                    <Link to={"/login"}>Giriş</Link>
                  </p>
                </div>
                <ul className="flex lg:items-center h-full menu hesabim">
                  <li className="relative group">
                    <Link to="/register" className="hesabimTitle flex items-center  hover:text-[#ffffffd0]">
                      Hesabım <IoMdArrowDropdown className="text-base" />
                    </Link>
                    <div className="absolute hidden top-11  group-hover:block bg-[#fff] z-10 w-[110px] shadow-lg px-2">
                      <Link to="/" className="subMenu pt-3 py-1 text-[#5a5a5a] inline-block">
                        Sifariş Tarixçəsi
                      </Link>
                      <Link to="/" className="subMenu py-1 text-[#5a5a5a] inline-block">
                        Əməliyyatlar
                      </Link>
                      <Link to="/" className="subMenu py-1 text-[#5a5a5a] inline-block">
                        Yükləmələr
                      </Link>
                      <Link to="/" className="subMenu py-2 text-[#5a5a5a] inline-block">
                        Sifarişi rəsmiləşdir
                      </Link>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center">
                  <GrFavorite className="mr-1 sm:mr-4 cursor-pointer text-white hover:text-white text-[1.1em]" />
                  <RiExchange2Line className="mr-1 sm:mr-4 text-white cursor-pointer duration-300 hover:rotate-180 text-[1.1em]" />
                </div>
                <div className="relative">
                  <div className="sebetShow">
                    <SebetBox/>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setshowMenuForMob((prevMenu) => !prevMenu)}
                className="bg-white cursor-pointer text-orange p-[7px] rounded-[9px] text-[1em] md:hidden xl:hidden"
              >
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </header>
  );
}

export default Header;
