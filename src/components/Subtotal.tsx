import React, { useState, useEffect } from "react";
import "../styles/subtotal.css";
import * as utils from "../utils/helper";
import { CartType, Data } from "../types/product.type";

type Props = {
    cart: CartType[],
}

const Subtotal: React.FC<Props>=({cart})=> {


  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items: any = localStorage.getItem("products");
    if (items) {
      setProducts(JSON.parse(items));
    }
  }, []);



  return (
    <div className="subtotal">
      <div className="subtotal__title">
        Subtotal ({!cart.length ? 'empty' : `${cart.length} ${cart.length === 1 ? 'item' : 'items'}` }):&nbsp;
        <strong>
          {utils.formatter.format(
            products.reduce(
              (totalPrice:number, item: any) => (totalPrice += parseFloat(item.price)),
              0
            )
          )}
        </strong>
      </div>
      <div className="subtotal__gift">
        <input type="checkbox" name="gift" />
        <span>This order contains a gift</span>
      </div>
      <button
        onClick={() => {
          if (!cart.length) {
            setError('Cart is empty');
            return;
          }
        }}
        className="subtotal__button"
        type="button"
      >
        Proceed to checkout
      </button>
      <div className="subtotal__error">
        {error}
      </div>
    </div>
  );
}

export default Subtotal;