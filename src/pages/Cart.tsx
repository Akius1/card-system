import React, { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import "../styles/cart.css";
import { CartType } from "../types/product.type";
import Subtotal from '../components/Subtotal'

type Props = {
  cart: CartType[];
};

const Cart: React.FC<Props> = ({ cart }) => {
    console.log(cart)


  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__header">
          <h2 className="checkout__title">Shopping Cart</h2>
          <button>Deselect all items</button>
        </div>

         <div className="checkout__products">
            {cart?.map((item) => 
              <CartCard
              key={item.id}
                id={item.id}
               
                quantity={item.count}
              />
            )}
          </div> 
      </div>

      <div className="checkout__right"> <Subtotal cart= {cart} /></div>
    </div>
  );
};

export default Cart;

// import React from "react";
// import "../styles/Checkout.css";
// import Ad from "../images/Developer-Ad.png";
// import Subtotal from "./Subtotal";
// import { useSelector, useDispatch } from "react-redux";
// import CheckoutProduct from "./CheckoutProduct";
// import { emptyCart } from "../redux/actions";

// function Checkout() {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);

//   const handleDeselectClick = () => {
//     dispatch(emptyCart());
//   };

//   return (
//     <div className="checkout">
//       <div className="checkout__left">
//         <a
//           href="http://www.linkedin.com/in/charles-k-okoye/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src={Ad}
//             alt="Are you looking for a Developer"
//             className="checkout__ad"
//           />
//         </a>

//         <div className="checkout__header">
//           <h2 className="checkout__title">Shopping Cart</h2>
//           <button onClick={handleDeselectClick}>Deselect all items</button>
//         </div>

//         <div className="checkout__products">
//           {cart?.map((item, index) =>
//             <CheckoutProduct
//               id={item.id}
//               cartId={index}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//               rating={item.rating}
//             />
//           )}
//         </div>
//       </div>

//       <div className="checkout__right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;
