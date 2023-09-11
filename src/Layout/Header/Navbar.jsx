import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Asset/Style/Navbar.css";
import "../../media/Media.css";
import MobileMenu from "./mobile-menu";
const menu = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Resume",
    slug: "resume",
  },
  {
    title: "Portfolio",
    slug: "portfolio",
  },
  {
    title: "Contact",
    slug: "contact",
  },
];
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/" className="text-decoration-none">
          <h1 className="fs-1 mt-2 logo text-white fw-bold">Kopil_Bhusal</h1>
        </Link>
        <ul className="nav_menu d-flex list-unstyled align-items-center mt-3">
          {menu.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  to={item.slug}
                  className={`text-decoration-none px-4 text-white fw-bold ${
                    activeItem === item.title ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(item.title)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button className="download px-3 py-1 text-white fw-bold">
            Download CV
          </button>
        </ul>
      </div>
      <MobileMenu menu={menu} />
    </>
  );
};

export default Navbar;
