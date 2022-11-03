import React, { useState } from "react";
import { BsFillHouseFill, BsFillPersonFill } from "react-icons/bs";
import { TbVinyl } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../assets/css/sidebar.css";
export default function ({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: "/dashboard",
      name: "Home",
      icon: <BsFillHouseFill />,
    },
    // {
    //   path: "/Login",
    //   name: "Login",
    //   icon: <BsFillPersonFill />,
    // },
    {
      path: "/dashboard/logout",
      name: "Logout",
      icon: <TbVinyl/>
    }
  ];
  return (
    <div className="sidebar-main-container">
      <div
        style={{ width: isOpen ? "250px" : "60px" }}
        className="sidebar-container"
      >
        <div className="sidebar-top-section">
          <h1 style={{display: isOpen ?  "block" : "none"}} className="sidebar-logo">VELARYON</h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="sidebar-bars"
          >
            <TbVinyl onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            // key={index}
            className="sidebar-link"
            activeclassname="active"
          >
            <div className="sidebar-icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="sidebar-link_text"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}
