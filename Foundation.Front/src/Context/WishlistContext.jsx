import React, { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function addWishlist(item) {
    const index = wishlist.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setWishlist([...wishlist, item]);
      return;
    }
    setWishlist(wishlist.filter((x) => x._id !== item._id));
  }

  function checkWish(item) {
    const index = wishlist.findIndex((x) => x._id === item._id);
    if (index !== -1) {
      return true;
    }
    return false;
  }

  return (
    <>
      <WishlistContext.Provider value={{ wishlist, addWishlist, checkWish }}>
        {children}
      </WishlistContext.Provider>
    </>
  );
}

export default WishlistProvider;
