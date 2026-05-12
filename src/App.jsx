import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Productpage from "./pages/Productpage";
import ProductDetail from "./pages/ProductDetail";
import Cartpage from "./pages/Cartpage";
import Wishpage from "./pages/Wishpage";

function App() {
  const [cartItems, setcartItems] = useState([]);
  const [wishlistItems, setwishlistItems] = useState([]);
  const [search, setsearch] = useState("");

  return (
    <Router>
      <Navbar
         search={search}
  setsearch={setsearch}
  cartCount={cartItems.length}
  wishlistCount={wishlistItems.length}
      />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/about" element={<Aboutpage />} />

        <Route path="/product" element={<Productpage search={search} />} />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              cartItems={cartItems}
              setcartItems={setcartItems}
              wishlistItems={wishlistItems}
              setwishlistItems={setwishlistItems}
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <Cartpage cartItems={cartItems} setcartItems={setcartItems} />
          }
        />
        <Route
          path="/Wishlist"
          element={
            <Wishpage
              wishlistItems={wishlistItems}
              setwishlistItems={setwishlistItems}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
