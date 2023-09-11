import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./index.css";

const MobileMenu = ({ menu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header>
      <Menu
        disableAutoFocus
        isOpen={menuOpen}
        onOpen={handleStateChange}
        onClose={handleStateChange}
      >
        {menu.map((item) => {
          return (
            <Link
              to={item.slug}
              key={item.slug}
              onClick={() => closeMenu()}
              className="menu-item text-decoration-none"
            >
              {item.title}
              <div className="dev-bottom mt-2"></div>
            </Link>
          );
        })}
        <button className="py-2 px-5 m-auto text-white border-1 mb-dev">
          Download CV
        </button>
      </Menu>
    </header>
  );
};

export default MobileMenu;
