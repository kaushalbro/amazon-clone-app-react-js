import React from "react";
import "./Header.css";
import main_logo from "../assert/main_logo1.png";
import usa_logo from "../assert/usa_logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <>
      <div className="header">
        <img className="logo_img" src={main_logo} alt="logo"></img>
        <div className="header_location">
          <div>
            <LocationOnIcon className="header_location_icon" />
          </div>
          <div>
            <span>
              Deliver to <br />
            </span>
            <span className="header_location_second">Nepal</span>
          </div>
        </div>
        <div className="header_search">
          <span className="header_search_left">
            <p>All</p>
            <ArrowDropDownIcon className="search_left" />
          </span>
          <input className="search_input" type="text" />

          <SearchIcon className="header_search_icon" />
        </div>
        <div className="header_links">
          <span className="header_link1 Header_link_Language">
            <span className="Lang_flag">
              <img src={usa_logo} height="20px" width="20px" alt="" />
              <p>EN</p>
            </span>
            <ArrowDropDownIcon className="search_left" />
          </span>
          <div className="header_link2 header_link_signin">
            <div className="header_signin">
              <span>
                Hello, Sign in <br />
              </span>
              <span className="header_link2_account">
                Account & Lists
                <ArrowDropDownIcon className="header_link2_arrow" />
              </span>
            </div>
          </div>
          <div className="header_returns_orders">
            <span className="header_returns_order_first">
              Returns <br />
            </span>
            <span className="header_returns_order_second">& Order</span>
          </div>
          <div className="header_cart">
            <span>
              <ShoppingCartOutlinedIcon className="cartIcon" />
            </span>
            <span className="cart_item">0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
