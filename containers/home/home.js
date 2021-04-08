import useTranslation from "next-translate/useTranslation";
import styles from "./styles";
import { NavLink } from "components";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <main className="main">
        <section className="first-screen">
          <div className="resources">
            <div className="bg-line" />
            <div className="ticket" />
            <div className="gift" />
            <div className="girl" />
            <div className="j" />
            <div className="dots-first-screen" />
            <div className="save" />
            <div className="sale" />
            <div className="positive-review" />
            <div className="chart-vector">
              <div className="top">
                <span className="small-text">Прирост клиентов</span>
                <span className="small-text green">+ 73%</span>
              </div>
              <div className="bottom">
                <img src="/images/first-screen/chart_vector.svg" alt="chart" />
                <span className="blue">20245</span>
              </div>
            </div>
          </div>
          <div className="text-block">
            <h1 className="h1 m-0">{t("title")}</h1>
            <p className="caption-1 color-subtitle subtitle">
              TutSvoi - приложение для автоматизации бизнеса
            </p>
            <NavLink href="/" className="btn-orange-gradient">
              Попробовать бесплатно
            </NavLink>
          </div>
        </section>
        <section className="tasks">
          <h3 className="h3 text-center">Задачи которые мы решаем </h3>
        </section>
      </main>

      <style jsx>{styles}</style>
    </>
  );
}
