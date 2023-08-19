import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, menuValue, menuPosition } = useGlobalContext();
  const { page, links } = menuValue;
  const refContainer = useRef(null);
  const [colSize, setColSize] = useState(2);

  useEffect(() => {
    const { menuCenter, menuBottom } = menuPosition;
    refContainer.current.style.top = `${menuBottom}px`;
    refContainer.current.style.left = `${menuCenter}px`;
  }, [menuPosition]);

  useEffect(() => {
    if (links.length <= 3) {
      setColSize(links.length);
    } else {
      setColSize(3);
    }
  }, [links]);

  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      ref={refContainer}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${colSize}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
