import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateUser from "./pages/User/CreateUser";
import UserList from "./pages/User/UserList";
import AllProducts from "./pages/AllProducts/AllProducts";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import ConfirmationPage from "./pages/Confirmation/Confirmation";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:category" element={<AllProducts />} />
        <Route path="/searchResult" element={<SearchResultPage />} />

        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
