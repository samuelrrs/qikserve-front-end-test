import "./styles.css";

import images from "../../assets/icons/index.js";

interface MenuListProps {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
}

const MenuList = ({ title, description, price, imgSrc }: MenuListProps) => {
  return (
    <div className="menu_list">
      <div className="menu_list__section-label">
        <span className="menu_list__section-txt">Burgers</span>
        <img
          src={images.arrow}
          alt="Icon Arrow"
          className="menu_list__section-icon"
        />
      </div>
      <div className="menu_list__itens">
        <div className="menu_list__itens-txts">
          <span className="menu_list__item-product-name">{title}</span>
          <span className="menu_list__item-description">{description}</span>
          <span className="menu_list__item-price">{price}</span>
        </div>
        <img src={imgSrc} alt="Item Image" className="menu_list__itens-img" />
      </div>
    </div>
  );
};

export default MenuList;
