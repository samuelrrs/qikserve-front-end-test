import "./styles.css";
import images from "../../assets/icons/index.ts";

const Header = () => {
  return (
    <header className="header">
      <div className="header__tabs">
        <span className="header__txts">
          Menu
          <div className="header__line-active" />
        </span>
        <span className="header__txts">Entrar</span>
        <span className="header__txts">Contato</span>
        <img
          src={images.hamburgerMenu}
          alt="Hamburguer Menu Icon"
          className="header__icon-hamburguer"
        />
      </div>
      <img
        src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
        alt="Banner Image"
        className="header__img"
      />
    </header>
  );
};

export default Header;
