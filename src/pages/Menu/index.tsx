import { useEffect, useState } from "react";
import images from "../../assets/icons/index.ts";
import Basket from "../../components/Basket";
import MenuList from "../../components/MenuList";

import Modal from "../../components/ModalItem/index.tsx";
import "./styles.css";
import Carousel from "../../components/Carousel/index.tsx";
import SearchInput from "../../components/SearchInput/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuRequest } from "../../store/modules/menu/actions.ts";
import {
  addQuantity,
  addToCart,
  removeFromCart,
  removeQuantity,
} from "../../store/modules/cart/actions.ts";

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: string;
  imgSrc: string;
  sections: MenuItem[];
}

const Menu = () => {
  /*  const [dataMenu, setDataMenu] = useState<MenuItem | null>(null); */
  const { sections, loading, cart } = useSelector((state) => ({
    sections: state.menu?.menuData?.sections || [],
    loading: state.menu.loading,
    cart: state?.cart?.items,
  }));
  const [filteredArr, setSetFilteredArr] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const activeSection = sections.map((section) => section.id);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuRequest());
  }, [dispatch]);

  useEffect(() => {
    const activeSection = sections.map((section) => section.id);
    setActiveSectionId(activeSection);
  }, [sections]);

  const handleCollapseMenu = (id: number) => {
    console.log("colapse", id);
    setActiveSectionId((prevState) => {
      const isActive = prevState?.includes(id);
      return isActive
        ? prevState?.filter((item) => item !== id)
        : [...prevState, id];
    });
  };

  function filterItems(inputText) {
    const filteredData = sections.map((category) => {
      const filteredItems = category.items.filter((item) =>
        item.name.toLowerCase().includes(inputText.toLowerCase())
      );
      return { ...category, items: filteredItems };
    });

    return filteredData.filter((category) => category.items.length > 0);
  }

  const filteredNames = filterItems(searchText);

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setPopUp(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleAddQuantity = (itemId) => {
    console.log("add quantity", itemId.id);

    dispatch(addQuantity(itemId?.id));
  };

  const handleRemoveQuantity = (itemId) => {
    dispatch(removeQuantity(itemId?.id));
  };

  return (
    <div className="menu">
      <div className="menu__itens">
        <SearchInput value={searchText} onChange={setSearchText} />

        <div className="menu__container">
          <div className="menu__sections">
            <Carousel
              sections={sections}
              handleCollapseMenu={handleCollapseMenu}
            />
            {filteredNames &&
              filteredNames.map((section) => (
                <div className="menu_list-item" key={section.id}>
                  <div
                    className={`menu_list__section-label ${
                      activeSectionId?.includes(section.id) ? "active" : ""
                    }`}
                    onClick={() => handleCollapseMenu(section.id)}
                  >
                    <span className="menu_list__section-txt">
                      {section.name}
                    </span>
                    <img
                      src={images.arrow}
                      alt="Icon Arrow"
                      className={`menu_list__section-icon ${
                        activeSectionId?.includes(section.id)
                          ? "rotate-normal"
                          : "rotate-reverse"
                      }`}
                    />
                  </div>
                  {popUp && (
                    <>
                      <Modal
                        setPopUp={setPopUp}
                        modalContent={selectedItem}
                        addToCart={handleAddToCart}
                        handleAddQuantity={handleAddQuantity}
                        handleRemoveQuantity={handleRemoveQuantity}
                      />
                    </>
                  )}
                  {section.items.map((item) => (
                    <MenuList
                      key={item.id}
                      title={item.name}
                      description={item.description}
                      price={`$${item.price}`}
                      imgSrc={item?.images?.[0]?.image}
                      activeSection={activeSectionId?.includes(section.id)}
                      catchItemAtive={() => handleSelectItem(item)}
                    />
                  ))}
                </div>
              ))}
          </div>

          <Basket
            itensBasket={cart}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
