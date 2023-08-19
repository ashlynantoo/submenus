import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import subLinks from "./data";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (event) => {
    const menu = event.target.textContent;
    const menuPosition = event.target.getBoundingClientRect();
    const menuCenter = (menuPosition.left + menuPosition.right) / 2;
    const menuBottom = menuPosition.bottom - 3;
    openSubmenu(menu, { menuCenter, menuBottom });
  };

  const handleSubmenu = (event) => {
    if (!event.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

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
          {subLinks.map((menu, index) => {
            const { page } = menu;
            return (
              <li key={index}>
                <button className="link-btn" onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
