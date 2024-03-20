import "./styles.css";
import images from "../../assets/icons/index.ts";

const Modal = ({ modalContent, setPopUp }) => {
  console.log(setPopUp);

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
            src={modalContent?.images?.[0].image}
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
                      <input type="radio" />
                    </div>
                  ))}
                </form>
              </div>
            </div>
          )}

          <div className="modal__actions-btns">
            <div className="modal__actions-quantity">
              <div className="modal__actions-quantity-decrease">
                <div className="modal__actions-quantity-decrease-icon" />
              </div>
              <span className="modal__actions-quantity-value">1</span>
              <div className="modal__actions-quantity-increase">
                <div className="modal__actions-quantity-increase-icon" />
                <div className="modal__actions-quantity-increase-icon-2" />
              </div>
            </div>
            <button className="modal__actions-add-btn">
              <span className="modal__actions-add-btn-txt">
                Adicionar ao pedido
              </span>
              <span className="modal__actions-add-btn-txt">•</span>
              <span className="modal__actions-add-btn-txt"> R$32,32</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
