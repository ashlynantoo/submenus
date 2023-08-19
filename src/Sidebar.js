import { FaTimes } from "react-icons/fa";
import subLinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}
    >
      <div className="sidebar">
        <button
          className="close-btn"
          onClick={() => {
            closeSidebar();
          }}
        >
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {subLinks.map((subLink, index) => {
            const { page, links } = subLink;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-subLinks">
                  {links.map((link, subIndex) => {
                    const { label, icon, url } = link;
                    return (
                      <a key={subIndex} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
