import React, { useState } from "react";
import "./styles.css";
import images from "../../assets/icons/index";
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

interface ModalProps {
  modalContent: ModalContent;
  setPopUp: (value: boolean) => void;
  addToCart: (content: ModalContent, quantity: number) => void;
  handleAddQuantity: (quantity: number) => void;
  removeQuantity: (quantity: number) => void;
}

const Modal: React.FC<ModalProps> = ({
  modalContent,
  setPopUp,
  addToCart,
  restaurant,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const defaultModifier = modalContent?.modifiers?.[0]?.items?.[0];
  const [selectedModifier, setSelectedModifier] = useState(defaultModifier);

  const handleModifierChange = (modifier) => {
    setSelectedModifier(modifier);
  };

  const productModifier = {
    ...modalContent,
    price: selectedModifier?.price || modalContent.price,
    modiferName: selectedModifier?.name,
  };

  const renderModifiersForm = () => {
    return (
      <div className="modal_modifier-interactions">
        <form className="modal__modifier-form">
          {modalContent?.modifiers?.[0]?.items?.map((modifier) => (
            <div key={modifier?.id} className="modal__modifier-info">
              <div className="modal__modifier-txt-info-product">
                <span className="modal__modifier-txt-name">
                  {modifier?.name}
                </span>
                <span className="modal__modifier-txt-price">
                  R${modifier?.price}
                </span>
              </div>
              <input
                type="radio"
                checked={selectedModifier?.id === modifier.id}
                onChange={() => handleModifierChange(modifier)}
                value={modifier?.price}
              />
            </div>
          ))}
        </form>
      </div>
    );
  };

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={() => setPopUp(false)}></div>{" "}
      <div className="popup-container">
        <div className="pu-content-container">
          <div
            className="modal__icon-container"
            onClick={() => setPopUp(false)}
          >
            <img
              src={images.xicon}
              alt="Close Icon"
              className="modal__icon-close"
            />
          </div>

          <img
            className="modal__product-img"
            src={modalContent?.images?.[0]?.image}
            alt=""
          />
        </div>
        <div className="modal__info-section">
          <div className="modal__txts">
            <span className="modal__title">{modalContent?.name}</span>
            <span className="modal__description">
              {modalContent?.description}
            </span>
          </div>
          {modalContent?.modifiers && (
            <div className="modal__modifier-section">
              <div className="modal__modifier-txts">
                <span className="modal__modifier-title">
                  Escolha seu tamanho
                </span>
                <span className="modal__modifier-description">
                  Selecione {modalContent?.modifiers?.[0]?.maxChoices} opção
                </span>
              </div>
              {renderModifiersForm()}
            </div>
          )}

          <div className="modal__actions-btns">
            <div className="modal__actions-quantity">
              <div
                className="modal__actions-quantity-decrease"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <div className="modal__actions-quantity-decrease-icon" />
              </div>
              <span className="modal__actions-quantity-value">{quantity}</span>
              <div
                className="modal__actions-quantity-increase"
                onClick={() => setQuantity(quantity + 1)}
              >
                <div className="modal__actions-quantity-increase-icon" />
                <div className="modal__actions-quantity-increase-icon-2" />
              </div>
            </div>
            <button
              className="modal__actions-add-btn"
              onClick={() => addToCart(productModifier, quantity)}
              style={{
                backgroundColor: restaurant.webSettings.primaryColour,
              }}
            >
              <span className="modal__actions-add-btn-txt">
                Adicionar ao pedido
              </span>
              <span className="modal__actions-add-btn-txt">•</span>
              <span className="modal__actions-add-btn-txt">
                {" "}
                {formatCurrency(
                  productModifier.price
                    ? productModifier.price
                    : modalContent?.price * quantity
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
