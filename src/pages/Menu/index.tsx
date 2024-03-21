import { useEffect, useState } from "react";
import images from "../../assets/icons/index.ts";
import Basket from "../../components/Basket";
import MenuList from "../../components/MenuList";

import { useDispatch, useSelector } from "react-redux";
import BasketResponsive from "../../components/BasketResponsive/index.tsx";
import Carousel from "../../components/Carousel/index.tsx";
import Modal from "../../components/ModalItem/index.tsx";
import SearchInput from "../../components/SearchInput/index.tsx";
import {
  addQuantity,
  addToCart,
  removeQuantity,
} from "../../store/modules/cart/actions.js";
import { fetchMenuRequest } from "../../store/modules/menu/actions.js";
import { fetchRestaurantsRequest } from "../../store/modules/restaurants/actions.js";
import "./styles.css";

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
  const { sections, loading, cart, restaurant } = useSelector((state) => ({
    sections: state.menu?.menuData?.sections || [],
    loading: state.menu.loading,
    cart: state?.cart?.items,
    restaurant: state?.restaurant?.restaurantData,
  }));
  const [popUp, setPopUp] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuRequest());
    dispatch(fetchRestaurantsRequest());
  }, [dispatch]);

  useEffect(() => {
    const activeSection = sections.map((section) => section.id);
    setActiveSectionId(activeSection);
  }, [sections]);

  const handleCollapseMenu = (id: number) => {
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

  const handleAddToCart = (item, quantity) => {
    dispatch(addToCart(item, quantity));
    setPopUp(false);
  };

  const handleAddQuantity = (itemId) => {
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
              activeSectionId={activeSectionId}
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
                  {showBasket && (
                    <BasketResponsive
                      setShowBasket={setShowBasket}
                      modalContent={cart}
                      handleAddQuantity={handleAddQuantity}
                      handleRemoveQuantity={handleRemoveQuantity}
                    />
                  )}

                  {popUp && (
                    <>
                      <Modal
                        setPopUp={setPopUp}
                        modalContent={selectedItem}
                        addToCart={handleAddToCart}
                        handleAddQuantity={handleAddQuantity}
                        handleRemoveQuantity={handleRemoveQuantity}
                        restaurant={restaurant}
                      />
                    </>
                  )}
                  {section.items.map((item) => (
                    <MenuList
                      key={item.id}
                      title={item.name}
                      description={item.description}
                      price={item.price}
                      imgSrc={item?.images?.[0]?.image}
                      activeSection={activeSectionId?.includes(section.id)}
                      catchItemAtive={() => handleSelectItem(item)}
                      modifier={item?.modifiers?.[0]?.items?.[0]?.price}
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

          <span className="menu__allergy">View allergy information</span>
          {cart.length > 0 && (
            <div className="menu__basket-responsive__actions-btns">
              <button
                className="menu__basket-responsive__actions-add-btn"
                onClick={() => setShowBasket(true)}
              >
                <span className="menu__basket-responsive__actions-add-btn-txt">
                  Seu carrinho •
                </span>
                <span className="menu__basket-responsive__actions-add-btn-txt">
                  {cart.length > 1
                    ? `${cart.length} itens`
                    : `${cart.length} item`}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
