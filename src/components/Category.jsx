
import React, { useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import data from "./../data/data";
import ItemCard from "./ui/ItemCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "./ListItem";
import { IoGridSharp } from "react-icons/io5";
import { FaBars, FaList } from "react-icons/fa";
import { RiExchange2Line } from "react-icons/ri";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";

const OrangeSlider = styled(Slider)({
  color: "#FFA500",
  "& .MuiSlider-thumb": {
    width: 6,
    height: 6,
    "&:hover, &.Mui-focusVisible, &.Mui-active": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-rail": {
    height: 2,
    opacity: 0.3,
    color: "#333",
  },
  "& .MuiSlider-track": {
    height: 2,
  },
});
const CustomAccordion = styled(Accordion)({
  boxShadow: "none",
  borderBottom: "1px solid #e0e0ee",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "0",
  },
});
const CustomSelect = styled(Select)({
  minWidth: 100,
  fontSize: 12,
  fontWeight: "bold",
  color: "orange",
  backgroundColor: "#Fff", // Arka plan rengi turuncu
  borderRadius: 20,
  "& .MuiSelect-select": {
    padding: "4px 16px", // Padding değerleri
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFA500", // Kenarlık rengi turuncu
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FF8C00", // Hover durumunda kenarlık rengi koyu turuncu
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FF8C00", // Fokus durumunda kenarlık rengi koyu turuncu
  },
  "& .MuiSelect-icon": {
    color: "#FF8c00", // Ok ikonu rengi beyaz
  },
});
const CustomBreadcrumbs = styled(Breadcrumbs)({
  fontSize: "0.7rem", // Breadcrumbs font boyutu
  fontWeight: "bold",
});

const CustomLink = styled(Link)({
  fontSize: "0.7rem", // Link font boyutu
  fontWeight: "bold",
});

const CustomTypography = styled(Typography)({
  fontSize: "0.7rem", // Typography font boyutu
  fontWeight: "bold",
});
const OrangeIconButton = styled(IconButton)({
  backgroundColor: "#FF8c00",
  borderRadius: 5,
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#FF8c00",
  },
});
function Category() {
  const { cat } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 17]);
  const [sortOption, setSortOption] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [viewMode, setViewMode] = useState("grid");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const findCategory = data
    .map((item) => item.grup.find((grupItem) => grupItem.grupTagName === cat))
    .find((group) => group !== undefined);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };
  const sortItems = (items, option) => {
    switch (option) {
      case "name-asc":
        return items.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return items.sort((a, b) => b.name.localeCompare(a.name));
      case "price-asc":
        return items.sort((a, b) => a.price - b.price);
      case "price-desc":
        return items.sort((a, b) => b.price - a.price);
      default:
        return items;
    }
  };
  const filteredItems = findCategory.grupItems.filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1]);
  // Pagination logic
  const sortedItems = sortItems(filteredItems, sortOption);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(findCategory.grupItems.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const resetFilters = () => {
    setPriceRange([0, 17]);
  };

  const drawerContent = (
    <>
      <h6 className=" px-4 pt-3 text-[.7rem] font-bold ">Filter</h6>
      <CustomAccordion>
        <AccordionSummary expandIcon={<MdExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <h6 className="text-[.7rem] font-bold ">Alt Kategoriya</h6>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{/* İçerik buraya */}</Typography>
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary expandIcon={<MdExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>
            <h6 className="text-[.7rem] font-bold "> Markası</h6>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, delectus.</Typography>
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary expandIcon={<MdExpandMore />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>
            <h6 className="text-[.7rem] font-bold ">Qiymət</h6>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography>
              {priceRange[0]}₼ - {priceRange[1]}₼
            </Typography>
            <OrangeSlider value={priceRange} onChange={handlePriceChange} valueLabelDisplay="auto" min={0} max={17} />
          </div>
        </AccordionDetails>
      </CustomAccordion>
      <div className=" grid place-items-center">
        <button onClick={resetFilters} className="mt-4  bg-orange text-[.8rem] text-white py-1 px-2 rounded">
          Hamısını Sıfırla
        </button>
      </div>
    </>
  );

  return (
    <div className="bg-[#F2F2F2] py-10">
      <div className="container-me mx-auto">
        <div className="mb-6 text-[.7rem]">
          <CustomBreadcrumbs aria-label="breadcrumb" className="text-[.7rem]">
            <CustomLink className=" text-[.6rem]" color="inherit" component={RouterLink} to="/">
              Ana Sayfa
            </CustomLink>

            <CustomTypography color="textPrimary">{cat}</CustomTypography>
          </CustomBreadcrumbs>
        </div>
        <div className=" grid grid-cols-4 gap-3  place-items-start">
          <div className="position hidden lg:block">
            <div className="col-span-1 pb-10 rounded-lg overflow-hidden bg-white ">{drawerContent}</div>
          </div>
          <div className="lg:hidden col-span-1">
            <OrangeIconButton onClick={toggleDrawer(true)} className="text-orange">
              <FaBars size={24} />
            </OrangeIconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <div className="p-4 w-64"> {drawerContent}</div>
            </Drawer>
          </div>
          <div className=" col-span-4   lg:col-span-3 w-full">
            <div className="  mb-2 ">
              <div className="flex  items-center">
                <div>
                  <IconButton onClick={() => handleViewModeChange("grid")}>
                    <IoGridSharp className=" text-red" />
                  </IconButton>
                  <IconButton onClick={() => handleViewModeChange("list")}>
                    <FaList />
                  </IconButton>
                </div>
                <div className=" flex  ml-auto">
                <div className=" flex items-center">
                  <span className="mr-2 text-[.7rem] font-bold hidden xs:block">Sırala:</span>
                  <CustomSelect
                    value={sortOption}
                    onChange={handleSortChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Sort options" }}
                  >
                    <MenuItem value="">Esas</MenuItem>
                    <MenuItem value="name-asc">Ad (A - Z)</MenuItem>
                    <MenuItem value="name-desc">Ad (Z - A)</MenuItem>
                    <MenuItem value="price-asc">Qiymət (Aşağıdan Yuxarıya)</MenuItem>
                    <MenuItem value="price-desc">Qiymət (Yuxarıdan Aşağıya)</MenuItem>
                  </CustomSelect>
                </div>
                <div className=" flex items-center">
                  <span className="ml-4 mr-2 text-[.7rem] font-bold hidden xs:block">Göster:</span>
                  <CustomSelect
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Items per page" }}
                  >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={75}>75</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                  </CustomSelect>
                </div>
                <div className=" hidden xs:block ml-1">
                  <button className="text-white text-[.7rem] font-bold bg-orange rounded-2xl  flex justify-center items-center py-1 px-2">
                    <RiExchange2Line className="mr-1 text-white cursor-pointer duration-300 hover:rotate-180 text-[1.1rem]" />
                    Müqayisə et
                  </button>
                </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"} gap-1`}>
                {currentItems.map((item, i) =>
                  viewMode === "grid" ? <ItemCard key={i} items={item} /> : <ListItem key={i} items={item} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center p-4">
        <Stack spacing={2} className="flex justify-center mt-4">
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} variant="outlined" shape="rounded" />
        </Stack>
      </div>
    </div>
  );
}

export default Category;
