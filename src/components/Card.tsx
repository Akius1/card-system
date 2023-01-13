import React from "react";
import { Data, ProductProps  } from "../types/product.type";
import "../styles/card.css";
import { getPrice  } from "../utils/helper";




const Card: React.FC<ProductProps> = ({ product, cart, setCart }) => {

    const checkIfItemIsInCart = (item: Data) =>  cart.find(prods => prods.id === item.id)

    const addToCart = (item: Data) => {
      if(checkIfItemIsInCart(item)) return
        
       setCart((prev:any) => [...prev, {id: item.id, count: 1}])
    }

    const removeFromCart = (item: Data) => {
        const removeItem = cart.filter(prods => prods.id !== item.id)
        setCart(removeItem);
     }


  return (
    
    <div className="product">
    <div className="product__img">
    <img src={product.images[0]} alt={product.code} />
    </div>
    <div className="product__info">
      <p className="product__title">{product.name}</p>
      
      <p className="product__price">
        <span>$</span>
        <span>{getPrice(product.price)}</span>
        <span>{getPrice(product.price, "decimal")}</span>
      </p>
    </div>
   
    {
          checkIfItemIsInCart(product) ? <button onClick= {()=>removeFromCart(product)}>Added</button> :<button onClick= {()=>addToCart(product)}>Add Cart</button>
      }
  </div>
  );
};

export default Card;

