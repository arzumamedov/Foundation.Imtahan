import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WishlistProvider from "./Context/WishlistContext.jsx";
import SearchProvider from "./Context/SearchContext.jsx";
import BasketProvider from "./Context/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <SearchProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </SearchProvider>
    </WishlistProvider>
  </React.StrictMode>
);
