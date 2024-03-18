import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__tabs">
        <span className="header__txts">Menu</span>
        <span className="header__txts">Entrar</span>
        <span className="header__txts">Contato</span>
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
