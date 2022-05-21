import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext, ContextProvider } from "./context";
import Header from "./components/Header";
import Category from "./pages/Category";
import FoodRecipe from "./pages/FoodRecipe";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import WishListPage from "./pages/WishListPage";


function App() {


  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter basename="/react-food">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="category/:categoryName/recipe/:recipeID" element={<FoodRecipe />} />
            <Route path="/wishlist" element={<WishListPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </ContextProvider>
    </div>
  );
}

export default App;
