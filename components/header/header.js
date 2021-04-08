import { Logo, LangSwitcher, MenuDesktop, NavLink } from "components";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="left">
          <div className="logo">
            <NavLink href="/">
              <Logo />
            </NavLink>
          </div>
          <MenuDesktop />
        </div>
        <div className="right">
          <LangSwitcher />
          <div className="ml-1">
            <NavLink href="/" className="btn">
              Присоединиться
            </NavLink>
          </div>
        </div>
      </header>
      <style jsx>{`
        .header {
          position: absolute;
          top: 52px;
          left: 0;
          padding: 0 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          z-index: 100;
        }
        .left,
        .right {
          display: flex;
          align-items: center;
        }
        .ml-1 {
          margin-left: 12px;
        }
        .logo {
          margin-right: 15px;
        }
      `}</style>
    </>
  );
}
