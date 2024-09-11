import { CSSProperties, useEffect, useState } from "react";
import { FC } from "react";
import { IHeader } from "../data/IHeader";
import { HeaderItem } from "./HeaderItem";

import "./Header.scss";

export interface Size {
  width: number;
  height: number;
}

export const Header: FC<IHeader> = ({
  logo,
  links,
  backgroundColor,
  textColor,
  contactBtnColor,
  contactBtnColorText
}) => {
  const style: CSSProperties & { [key: string]: string } = {
    "--header-background-color": backgroundColor,
    "--header-text-color": textColor,
    "--contact-btn-color": contactBtnColor || backgroundColor,
    "--contact-btn-color-text": contactBtnColorText
  };
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
      style={style}
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
            <HeaderItem
              item={obj}
              key={key}
              onShowMenu={onShowMenu}
              size={size}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
