import { NavLink } from "components";

export default function DesktopMenu() {
  return (
    <>
      <ul className="menu-list">
        <li className="menu-list-item">
          <NavLink className="color-text small-text" href="/how-it-works">
            Как это работает
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink className="color-text small-text" href="/products">
            Продукты
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink className="color-text small-text" href="/tariff">
            Тарифы
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink className="color-text small-text" href="/resources">
            Ресурсы
          </NavLink>
        </li>
      </ul>
      <style jsx>
        {`
          .menu-list {
            list-style: none;
            display: flex;
          }
          .menu-list-item {
            margin: 0 15px;
            white-space: nowrap;
          }
        `}
      </style>
    </>
  );
}
