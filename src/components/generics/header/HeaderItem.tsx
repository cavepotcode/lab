import { NavLink } from "react-router-dom";

export interface Size {
  width: number;
  height: number;
}

export const HeaderItem = ({ item, key, size, onShowMenu }) => {
  return (
    <li key={key} className="menu-nav__item">
      {item.link.includes("http") && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={
            item.link.includes("contact")
              ? "menu-nav__link-contact"
              : "menu-nav__link"
          }
        >
          {item.label}
        </a>
      )}
      {!item.link.includes("http") && size.width <= 1024 && (
        <NavLink
          to={item.link}
          className={
            item.link.includes("contact")
              ? "menu-nav__link-contact"
              : "menu-nav__link"
          }
          onClick={onShowMenu}
        >
          {item.label}
        </NavLink>
      )}
      {!item.link.includes("http") && size.width > 1024 && (
        <NavLink
          to={item.link}
          className={
            item.link.includes("contact")
              ? "menu-nav__link-contact"
              : "menu-nav__link"
          }
        >
          {item.label}
        </NavLink>
      )}
    </li>
  );
};
