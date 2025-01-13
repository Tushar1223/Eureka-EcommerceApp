
import { ReactNavbar } from "overlay-navbar";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";
import logo from "../../../images/logo.png";
const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIcon:true,
  ProfileIconElement: MdAccountCircle, 
  searchIcon:true,
  SearchIconElement:MdSearch,
  cartIcon:true,
  CartIconElement:MdAddShoppingCart,
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

// import React, { useState } from "react";
// import "./Header.css";
// import { Link } from "react-router-dom";
// import {
//   Home,
//   HomeOutlined,
//   Add,
//   AddOutlined,
//   SearchOutlined,
//   Search,
//   AccountCircle,
//   AccountCircleOutlined,
// } from "@mui/icons-material";

// const Header = () => {
//   const [tab, setTab] = useState(window.location.pathname);
//   return (
//     <div className="header">
//       <Link to="/" onClick={() => setTab("/")}>
//         {tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
//       </Link>

//       <Link to="/newpost" onClick={() => setTab("/newpost")}>
//         {tab === "/newpost" ? (
//           <Add style={{ color: "black" }} />
//         ) : (
//           <AddOutlined />
//         )}
//       </Link>

//       <Link to="/search" onClick={() => setTab("/search")}>
//         {tab === "/search" ? (
//           <Search style={{ color: "black" }} />
//         ) : (
//           <SearchOutlined />
//         )}
//       </Link>

//       <Link to="/account" onClick={() => setTab("/account")}>
//         {tab === "/account" ? (
//           <AccountCircle style={{ color: "black" }} />
//         ) : (
//           <AccountCircleOutlined />
//         )}
//       </Link>
//     </div>
//   );
// };

// export default Header;
