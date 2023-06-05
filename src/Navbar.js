import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  function displaySubmenu(event) {
    const menu = event.target.textContent;
    const menuPosition = event.target.getBoundingClientRect();
    const menuCenter = (menuPosition.left + menuPosition.right) / 2;
    const menuBottom = menuPosition.bottom - 3;
    openSubmenu(menu, { menuCenter, menuBottom });
  }

  function handleSubmenu(event) {
    if (!event.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            className="btn toggle-btn"
            onClick={() => {
              openSidebar();
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
