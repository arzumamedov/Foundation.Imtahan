import React, { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import { Link } from "react-router-dom";
import "./Wishlist.scss";
import { Helmet } from "react-helmet";

function Wishlist() {
  const { wishlist,addWishlist,checkWish } = useContext(WishlistContext);
  return (
    <>
    <Helmet><title>Wishlist</title></Helmet>

      <div className="wishSection">
      {wishlist.map((item) => (
          <div className="card" key={item._id}>
            <i className={item.icon}></i>
            <h3>{item.name}</h3>
            <p>{item.title}</p>
              <div className="buttons">
                <button className="detail">Detail</button>
                <i className={`${checkWish(item)? "fa-solid fa-heart":"fa-regular fa-heart"}`}  onClick={()=>addWishlist(item)} ></i>
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
