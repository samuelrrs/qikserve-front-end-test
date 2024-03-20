import { useEffect, useState } from "react";
import images from "../../assets/icons/index.ts";
import Basket from "../../components/Basket";
import MenuList from "../../components/MenuList";

import Modal from "../../components/ModalItem/index.tsx";
import "./styles.css";
import Carousel from "../../components/Carousel/index.tsx";
import SearchInput from "../../components/SearchInput/index.tsx";

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: string;
  imgSrc: string;
  sections: MenuItem[];
}

const Menu = () => {
  const [dataMenu, setDataMenu] = useState<MenuItem | null>(null);
  const [popUp, setPopUp] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetch(
          "https://cdn-dev.preoday.com/challenge/menu",
          {}
        );
        if (response.ok) {
          const data = await response.json();
          setDataMenu(data);
          setActiveSectionId(data.sections.map((section) => section.id));
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getMenu();
  }, []);

  const handleCollapseMenu = (id: number) => {
    setActiveSectionId((prevState) => {
      const isActive = prevState?.includes(id);
      return isActive
        ? prevState?.filter((item) => item !== id)
        : [...prevState, id];
    });
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setPopUp(true);
  };

  return (
    <div className="menu">
      <div className="menu__itens">
        <SearchInput />

        <div className="menu__container">
          <div className="menu__sections">
            <Carousel sections={dataMenu} />
            {dataMenu?.sections.map((section) => (
              <div className="menu_list-item" key={section.id}>
                <div
                  className={`menu_list__section-label ${
                    activeSectionId?.includes(section.id) ? "active" : ""
                  }`}
                  onClick={() => handleCollapseMenu(section.id)}
                >
                  <span className="menu_list__section-txt">{section.name}</span>
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
                    OIOIOIOIOOI
                    <Modal setPopUp={setPopUp} modalContent={selectedItem} />
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

          <Basket />
        </div>
      </div>
    </div>
  );
};

export default Menu;
