import React, { useContext, useEffect, useState } from "react";
import "./Card.scss";
import { Link, useParams } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { BasketContext } from "../../Context/BasketContext";
function Card() {
  const [data, setData] = useState([]);
  const {addWishlist,checkWish} = useContext(WishlistContext)
  const {addBasket} = useContext(BasketContext)

  useEffect(() => {
    fetch("http://localhost:6060/")
      .then((res) => res.json())
      .then((api) => setData(api));
  }, []);

  return (
    <>
      <div className="cardSection">
        {data.map((x) => (
          <div className="card" key={x._id}>
            <i className={x.icon}></i>
            <h3>{x.name}</h3>
            <p>{x.title}</p>
              <div className="buttons">
                <Link to={'/detail/'+x._id}><button className="detail">Detail</button></Link>
                <i className={`${checkWish(x)? "fa-solid fa-heart":"fa-regular fa-heart"}`}  onClick={()=>addWishlist(x)} ></i>
                <i onClick={()=>addBasket(x)} className="fa-solid fa-cart-shopping"></i>
              </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
