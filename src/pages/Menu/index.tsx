import Basket from "../../components/Basket";
import MenuList from "../../components/MenuList";
import "./styles.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__itens">
        <input type="text" placeholder="Search menu items" />
        <div className="menu__container">
          <MenuList description="oi" title="oi" price="oi" imgSrc="oi" />
          <Basket />
        </div>
      </div>
    </div>
  );
};

export default Menu;
