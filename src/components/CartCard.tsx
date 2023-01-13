import React, { useState, useEffect } from "react";
import '../styles/cartCard.css'

type Props = {
  id: number;
  quantity: number;
};

const CartCard: React.FC<Props> = ({ id, quantity }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items: any = localStorage.getItem("products");
    if (items) {
      setProducts(JSON.parse(items));
    }
  }, []);

  let product: any = products && products.find((prod: any) => prod.id === id);
  console.log(product);
  // const addToCart = (item: Data) => {
  //   if(checkIfItemIsInCart(item)) return

  //    setCart((prev:any) => [...prev, {id: item.id, count: 1}])
  // }

  // const removeFromCart = (item: Data) => {
  //     const removeItem = cart.filter(prods => prods.id !== item.id)
  //     setCart(removeItem);
  //  }

  return (
    <div className="checkout__product">
      {products && product && (
        <>
          <div className="checkout__productImg">
            <img src={product && product.images[0]} alt="" />
          </div>

          <div className="checkout__productInfo">
            <div className="checkout__productTitlePrice">
              <div className="checkout__productTitle">{product.name}</div>
              <div className="checkout__productPrice">${product.price}</div>
            </div>
          </div>

          <div className="checkout__productGift">
            <input type="checkbox" name="gift" />
            <span>This is a gift</span>
            <a
              href="https://github.com/OkoyeCharles"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="checkout__productButtons">
            <button type="button" >Delete</button>
            <button type="button">Save for later</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartCard;
