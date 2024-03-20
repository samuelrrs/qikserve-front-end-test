import "./styles.css";

interface MenuListProps {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
  activeSection: boolean;
  catchItemAtive: () => void;
}

const MenuList = ({
  title,
  description,
  price,
  imgSrc,
  activeSection,
  catchItemAtive,
}: MenuListProps) => {
  return (
    activeSection && (
      <div className="menu_list" onClick={() => catchItemAtive()}>
        <div className="menu_list__itens">
          <div className="menu_list__itens-txts">
            <span className="menu_list__item-product-name">{title}</span>
            <span className="menu_list__item-description">{description}</span>
            <span className="menu_list__item-price">{price}</span>
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
