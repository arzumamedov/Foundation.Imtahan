import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { BasketContext } from "../../Context/BasketContext";
import "./Detail.scss";
import { Helmet } from "react-helmet";

function Detail() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const { checkWish, addWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);

  useEffect(() => {
    fetch("http://localhost:6060/" + id)
      .then((res) => res.json())
      .then((api) => setDetail(api));
  }, []);

  return (
    <>
    <Helmet><title>Detail</title></Helmet>
      <div className="cardSection">
        <div className="card">
          <i className={detail.icon}></i>
          <h3>{detail.name}</h3>
          <p>{detail.title}</p>
          <div className="buttons">
            <i
              className={`${
                checkWish(detail) ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }`}
              onClick={() => addWishlist(detail)}
            ></i>
            <i
              onClick={() => addBasket(detail)}
              className="fa-solid fa-cart-shopping"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
