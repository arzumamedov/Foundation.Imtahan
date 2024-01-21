import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout/Mainlayout";
import Homepage from "./pages/Home/Homepage";
import Addpage from "./pages/Addpage/Addpage";
import Detail from "./pages/Detail/Detail";
import Wishlist from "./pages/Wishlist/Wishlist";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Homepage />} />
            <Route path="/add" element={<Addpage />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/basket" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
