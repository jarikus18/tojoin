import { Footer, Header } from "components";
import globalStyles from "styles/global.js";

export default function Layout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      {children}
      <style jsx global>
        {globalStyles}
      </style>
      <Footer />
    </div>
  );
}
