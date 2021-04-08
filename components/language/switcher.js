import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

const changeLang = (val) => async () => {
  await setLanguage(val);
};

export default function LangSwitcher() {
  const { lang } = useTranslation();
  const [open, setOpen] = useState(false);

  function toggleSwitcher() {
    setOpen(!open);
  }
  return (
    <div className="lang" onClick={toggleSwitcher}>
      <span className="small-text">{lang}</span>
      <img src="/images/lang-switcher.svg" alt="" />
      <div className="modal">
        <ul className="text-center">
          <li>
            <button className="btn small-text" onClick={changeLang("en")}>
              En
            </button>
          </li>
          <li>
            <button className="btn small-text" onClick={changeLang("ru")}>
              Ru
            </button>
          </li>
          <li>
            <button className="btn small-text" onClick={changeLang("uk")}>
              Uk
            </button>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .lang {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
        }
        .lang span {
          text-transform: uppercase;
          padding-right: 8px;
          font-weight: 600;
        }
        .modal {
          position: absolute;
          top: 25px;
          left: 15px;
          padding: 10px;
          border-radius: 10px;
          background: #eaf1fe;
          opacity: ${open ? 1 : 0};
        }
        .btn {
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s linear;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
