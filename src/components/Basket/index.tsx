import "./styles.css";
import { formatCurrency } from "../../utils/functions";

interface Item {
  id: number;
  name: string;
  modifiers?: string[];
  quantity: number;
  price: number;
  totalPrice?: number;
}

interface BasketProps {
  itensBasket: Item[];
  handleAddQuantity: (item: Item) => void;
  handleRemoveQuantity: (item: Item) => void;
}

const Basket = ({
  itensBasket,
  handleAddQuantity,
  handleRemoveQuantity,
}: BasketProps) => {
  const totalPrice = itensBasket.reduce(
    (total, item) => total + (item.totalPrice ? item.totalPrice : item.price),
    0
  );

  return (
    <>
      <div
        className={itensBasket.length ? "basket basket--non-empty" : "basket"}
      >
        <div className="basket__cart-container-items">
          <span className="basket__cart-txt">Carrinho</span>

          {itensBasket.length ? (
            itensBasket.map((item) => (
              <div className="basket__itens-container" key={item.id}>
                <div className="basket__itens-section">
                  <span className="basket__itens-name">{item.name}</span>
                  <span className="basket__itens-modifier-name">
                    {item?.modiferName}
                  </span>
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
                  {formatCurrency(item.price)}
                </span>
              </div>
            ))
          ) : (
            <span className="basket__cart-empty-txt">
              Seu carrinho está vazio
            </span>
          )}
        </div>
        {itensBasket.length ? (
          <div className="basket__values-container">
            <div className="basket__values-subtotal">
              <span className="basket__itens-name">Subtotal</span>
              <span className="basket__itens-price">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <div className="basket__values-subtotal">
              <span className="basket__itens-total">Total</span>
              <span className="basket__itens-price-total">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Basket;
