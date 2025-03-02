import "../Header/header.css";

const Header = ({ toggleBurger, closeBurger, isBurgerOpen, isDarkTheme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="wrapper">

        <nav className="nav">
          <div className="nav__content container">


            <a className="logo" href="">
              MyPortfolio
            </a>

            <div className="nav__menu">

              <ul className={`nav__list ${isBurgerOpen ? "burger" : ""}`}>
                <li>
                  <a className="nav__list-link" href="#about" onClick={closeBurger}>
                    Обо мне
                  </a>
                </li>
                <li>
                  <a className="nav__list-link" href="#portfolio" onClick={closeBurger}>
                    Проекты
                  </a>
                </li>
                <li>
                  <a className="nav__list-link" href="#contacts" onClick={closeBurger}>
                    Контакты
                  </a>
                </li>
              </ul>

              <div
                className={`nav__menu-btn ${isBurgerOpen ? "active" : ""}`}
                onClick={toggleBurger}
              >
                <div className="nav__menu-btn-line"></div>
              </div>


            </div>

            <button className="nav__button">
              <label className="ui-switch">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={isDarkTheme}
                />
                <div className="slider">
                  <div className="circle"></div>
                </div>
              </label>
            </button>
          </div>
        </nav>

        <div className="header__content container" >

          <h1>Привет!</h1>
          <h2>Я <span>Никита</span>, и я веб-разработчик</h2>
          <p>Специализированный фронтенд-разработчик, создаю сайты и веб-приложения</p>

          <a href="#contacts">
            <span>Связаться со мной</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
