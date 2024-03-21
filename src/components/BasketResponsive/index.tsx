import React from "react";
import images from "../../assets/icons/index";
import "./styles.css";
import { formatCurrency } from "../../utils/functions";

interface Item {
  id: number;
  name: string;
  price: number;
}

interface Modifier {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  items?: Item[];
}

interface ModalContent {
  id: number;
  name: string;
  description: string;
  images?: { image: string }[];
  modifiers?: Modifier[];
  price: number;
}

interface BasketResponsiveProps {
  modalContent: ModalContent;
  setShowBasket: (value: boolean) => void;
  handleAddQuantity: (quantity: number) => void;
  handleRemoveQuantity: (quantity: number) => void;
}

const BasketResponsive: React.FC<BasketResponsiveProps> = ({
  modalContent,
  setShowBasket,
  handleAddQuantity,
  handleRemoveQuantity,
}) => {
  const totalPrice = modalContent.reduce(
    (total, item) => total + (item.totalPrice ? item.totalPrice : item.price),
    0
  );

  console.log("totalPrice", totalPrice);
  return (
    <div className="modal">
      <div
        className="basket-responsive__overlay"
        onClick={() => setShowBasket(false)}
      ></div>{" "}
      <div className="popup-container">
        <div className="pu-content-container">
          <div
            className="basket-responsive__icon-container"
            onClick={() => setShowBasket(false)}
          >
            <span className="basket-responsive__title-txt">Basket</span>
            <img
              src={images.xicon}
              alt="Close Icon"
              className="basket-responsive__icon-close"
            />
          </div>

          <img
            className="basket-responsive__product-img"
            src={modalContent?.images?.[0]?.image}
            alt=""
          />
        </div>
        <div className="basket-responsive__info-section">
          <div className="basket-responsive__txts">
            <span className="basket-responsive__title">
              {modalContent?.name}
            </span>
            <span className="basket-responsive__description">
              {modalContent?.description}
            </span>
          </div>
          <div className="basket-responsive__cart-container-items">
            {modalContent.length ? (
              modalContent.map((item) => (
                <div className="basket__itens-container" key={item.id}>
                  <div>
                    <span className="basket__itens-name">{item.name}</span>
                    {item.modifiers?.map((modifier, index) => (
                      <span key={index}>{modifier}</span>
                    ))}
                    <div className="basket__itens-quantity">
                      <span
                        className="basket__itens-quantity-btn"
                        onClick={() => handleRemoveQuantity(item)}
                      >
                        -
                      </span>
                      <span className="basket__itens-quantity-value">
                        {item.quantity}
                      </span>
                      <span
                        className="basket__itens-quantity-btn"
                        onClick={() => handleAddQuantity(item)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <span className="basket__itens-price">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
              ))
            ) : (
              <span className="basket__cart-empty-txt">
                Seu carrinho está vazio
              </span>
            )}
          </div>

          <div className="basket__values-container">
            <div className="basket-responsive__values-subtotal">
              <span className="basket__itens-name">Subtotal</span>
              <span className="basket__itens-price">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <div className="basket-responsive__values-total">
              <span className="basket__itens-total">Total</span>
              <span className="basket__itens-price-total">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>

          <div className="basket-responsive__actions-btns">
            <button className="basket-responsive__actions-add-btn">
              <span className="basket-responsive__actions-add-btn-txt">
                Finalizar pedido
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketResponsive;
