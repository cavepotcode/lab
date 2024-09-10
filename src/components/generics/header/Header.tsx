import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { IHeader } from "../data/IHeader";

import "./Header.scss";

export interface Size {
  width: number;
  height: number;
}

export const Header: FC<IHeader> = ({ logo, links }) => {
  // The size of the window
  const [size, setSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showMenu, setShowMenu] = useState(false);
  const [colapse, setColapse] = useState(false);
  const onShowMenu = () => setShowMenu((prev) => !prev);
  const onColapse = (value) => setColapse(value);

  useEffect(() => {
    const handleNavigation = (e) => {
      const window = e.currentTarget;
      if (window.pageYOffset > 60) {
        onColapse(true);
      } else {
        onColapse(false);
      }
    };
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [colapse]);

  useEffect(() => {
    // This function updates the state thus re-render components
    const resizeHanlder = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({
        width: width,
        height: height,
      });
    };
    const navItems = document.querySelectorAll(".menu-nav__item");
    if (showMenu) {
      navItems.forEach((item) => item.classList.add("open"));
    } else {
      navItems.forEach((item) => item.classList.remove("open"));
    }
    window.addEventListener("resize", resizeHanlder);
    return () => {
      window.removeEventListener("resize", resizeHanlder);
    };
  }, [showMenu]);

  return (
    <div
      id="header"
      className={`header ${colapse ? "colapse" : ""} ${showMenu ? "open" : ""}`}
    >
      {logo}

      <div className="menu-btn" onClick={onShowMenu}>
        <span
          className={showMenu ? "menu-btn__burger open" : "menu-btn__burger"}
        ></span>
      </div>
      <nav className={showMenu ? "nav open" : "nav"}>
        <ul className={showMenu ? "menu-nav open" : "menu-nav"}>
          {links.map((obj: any, key) => (
            <li key={key} className="menu-nav__item">
              {obj.link.includes("http") && (
                <a
                  href={obj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    obj.link.includes("contact")
                      ? "menu-nav__link-contact"
                      : "menu-nav__link"
                  }
                >
                  {obj.label}
                </a>
              )}
              {!obj.link.includes("http") && size.width <= 1024 && (
                <NavLink
                  to={obj.link}
                  className={
                    obj.link.includes("contact")
                      ? "menu-nav__link-contact"
                      : "menu-nav__link"
                  }
                  onClick={onShowMenu}
                >
                  {obj.label}
                </NavLink>
              )}
              {!obj.link.includes("http") && size.width > 1024 && (
                <NavLink
                  to={obj.link}
                  className={
                    obj.link.includes("contact")
                      ? "menu-nav__link-contact"
                      : "menu-nav__link"
                  }
                >
                  {obj.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
