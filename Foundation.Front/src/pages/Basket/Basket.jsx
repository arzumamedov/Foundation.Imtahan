import React, { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";
import { Helmet } from "react-helmet";
import "./Basket.scss";
import { WishlistContext } from "../../Context/WishlistContext";

function Basket() {
  const { checkWish, addWishlist } = useContext(WishlistContext);
  const { basket,increase,decrease,removeFromBasket } = useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>

      <div className="basketSection">
        {basket.map((item) => (
          <div className="card" key={item._id}>
            <i className={item.icon}></i>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
            <div className="buttons">
              <button className="detail">Detail</button>
              <i
                className={`${
                  checkWish(item) ? "fa-solid fa-heart" : "fa-regular fa-heart"
                }`}
                onClick={() => addWishlist(item)}
              ></i>
              <button onClick={()=>decrease(item)} className="decrease">-</button>
              <p>{item.count}</p>
              <button onClick={()=>increase(item)} className="increase">+</button>
              <button className="remove" onClick={()=>removeFromBasket(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Basket;
