import React, { useState, useEffect } from "react";
import "../styles/cartCard.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Props = {
  id: number;
  quantity: number;
};

const CartCard: React.FC<Props> = ({ id, quantity }) => {
    console.log('name', id)
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    const items: any = localStorage.getItem("products");
    const carts: any = localStorage.getItem("carts");
    if (items) {
      setProducts(JSON.parse(items));
    }
    if (carts) {
        setCart(JSON.parse(carts));
      }
  }, [quantity]);

  let product: any = products && products.find((prod: any) => prod.id === id);
  console.log(product);


//   const addQuantity = () => {
//      let isInCart: any =  cart && cart.map((val:any)=>{
//         let count:any 
//          if(val.id === id){
//            count = val.count + 1
//          }

//      })

//      setCart(isInCart)
//      localStorage.setItem("carts", JSON.stringify(cart))
//   }

//   console.log(cart)
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
          <div className="checkout__productGift">
            <input type="checkbox" name="gift" />
          </div>
          <div className="checkout__productImg">
            <img src={product && product.images[0]} alt="" />
          </div>

          <div className="checkout__layout">
            <div className="checkout__productInfo">
              <div className="checkout__productTitlePrice">
                <div className="checkout__productTitle">{product.name}</div>
                <div className="checkout__productPrice">${product.price}</div>
              </div>
            </div>

            <p className="text___stock">In stock</p>

            <div className="checkout__productGift">
              <input type="checkbox" name="gift" />
              <span>This is a gift</span>
              <a
                href="https://github.com/andrewurom"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
            <div className="checkout__qty">
              <span>Qty: </span>
              <div className="checkout__add">
              <AddIcon />
              </div>
              
              <span>{quantity}</span>
              <div className="checkout__add">
              <RemoveIcon  />
              </div>
            </div>
            <div className="checkout__productButtons">
              <button type="button">Delete</button>
              <button type="button">Save for later</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartCard;
