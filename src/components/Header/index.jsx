import "./styles.css";
import images from "../../assets/icons/index.ts";
import { useSelector } from "react-redux";

const Header = () => {
  const { restaurant } = useSelector((state) => ({
    restaurant: state?.restaurant?.restaurantData,
  }));
  return (
    <header className="header">
      <div
        className="header__tabs"
        style={{
          backgroundColor: restaurant?.webSettings?.navBackgroundColour,
        }}
      >
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
        src={restaurant?.webSettings?.bannerImage}
        alt="Banner Image"
        className="header__img"
      />
    </header>
  );
};

export default Header;
