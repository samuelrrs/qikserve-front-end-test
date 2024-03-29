import { formatCurrency } from "../../utils/functions";
import "./styles.css";

const MenuList = ({
  title,
  description,
  price,
  imgSrc,
  activeSection,
  catchItemAtive,
  modifier,
}) => {
  return (
    activeSection && (
      <div className="menu_list" onClick={() => catchItemAtive()}>
        <div className="menu_list__itens">
          <div className="menu_list__itens-txts">
            <div className="menu_list__item-product-txts">
              <span className="menu_list__item-product-quantity">1</span>
              <span className="menu_list__item-product-name">{title}</span>
            </div>
            <span className="menu_list__item-description">{description}</span>
            <span className="menu_list__item-price">
              {" "}
              {formatCurrency(modifier !== undefined ? modifier : price)}
            </span>
          </div>
          {imgSrc && (
            <img
              src={imgSrc}
              alt="Item Image"
              className="menu_list__itens-img"
            />
          )}
        </div>
      </div>
    )
  );
};

export default MenuList;
