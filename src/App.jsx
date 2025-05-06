import "../styles/main.scss";
import Step from "./components/Step/Step.jsx";
import { useTheme, useToggleTheme } from "./context/ThemeContext.jsx";
import { FormDataProvider } from "./context/SheetContext";

function App() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ALPHA Shop</title>
      <link rel="stylesheet" href="main.css" />
      <div id="svg-icons-container" style={{ display: "none" }} />
      {/* header */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* navbar-toggle */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <object
              data="/icons/toggle.svg"
              className="icon-toggle cursor-point"
            />
          </label>
          {/* navbar-menu */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              {/* search */}
              <li className="nav-item">
                <img
                  src="/icons/search.svg"
                  className="nav-icon cursor-point"
                  type="image/svg+xml"
                ></img>
              </li>
              {/* cart */}
              <li className="nav-item">
                <img
                  src="/icons/cart.svg"
                  className="nav-icon cursor-point"
                  type="image/svg+xml"
                ></img>
              </li>
              {/* theme-toggle */}
              <li id="theme-toggle" className="nav-item">
                {/* moon */}
                <button className="icons">
                  <img
                    src={
                      theme === "light" ? "/icons/moon.svg" : "/icons/sun.svg"
                    }
                    className="nav-icon cursor-point"
                    type="image/svg+xml"
                    onClick={toggleTheme}
                  ></img>
                </button>
              </li>
            </ul>
          </nav>
          {/* logo */}
          <a className="header-logo-container" href="#">
            <img src="/icons/logo.svg" className="cursor-point" />
          </a>
        </div>
      </header>
      {/* main */}
      <main className="site-main">
        <div className="main-container">
          <FormDataProvider>
            <Step />
          </FormDataProvider>
        </div>
      </main>
      {/* footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <section className="footer-section">
            <div className="footer-logo-container">
              <img src="/icons/logo.svg" className="cursor-point" />
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">客戶服務</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                運送說明
              </a>
              <a className="page-link" href="#">
                退換貨相關
              </a>
              <a className="page-link" href="#">
                付款資訊
              </a>
              <a className="page-link" href="#">
                FAQ
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">關於我們</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                品牌故事
              </a>
              <a className="page-link" href="#">
                媒體聯繫
              </a>
              <a className="page-link" href="#">
                Press kit
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">資訊</h2>
            <div className="section-content">
              <a className="page-link" href="#">
                隱私權政策
              </a>
              <a className="page-link" href="#">
                Cookie
              </a>
              <a className="page-link" href="#">
                GDPR
              </a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">追蹤 ALPHA Shop</h2>
            <div className="section-content">
              <div className="tel-info">+886 02123-45678</div>
              <div className="social-icon-group">
                <object
                  data="/icons/facebook.svg"
                  className="social-icon cursor-point"
                ></object>
                <object
                  data="/icons/instagram.svg"
                  className="social-icon cursor-point"
                ></object>
                <object
                  data="/icons/whatsapp.svg"
                  className="social-icon cursor-point"
                ></object>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default App;
