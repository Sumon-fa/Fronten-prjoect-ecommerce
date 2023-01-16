import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { useAppSelector } from './hooks/reduxHook';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import CategorizedProducts from './pages/CategorizedProducts';
import Profile from './pages/Profile';
import CartPage from './pages/CartPage';

const App = () => {
  const [toogle, setToogle] = useState(false);
  const toogleDrawer = () => {
    setToogle(!toogle);
  };
  const [searchToogle, setSearchToogle] = useState(false);
  const toogleSearch = () => {
    setSearchToogle(!searchToogle);
  };
  const { token } = useAppSelector((state) => state.auth);
  return (
    <>
      <header>
        <Header
          toogle={toogle}
          onClose={toogleDrawer}
          onHide={toogleSearch}
          searchToogle={searchToogle}
        />
        {toogle && !token?.access_token && <Drawer onClose={toogleDrawer} />}
        {searchToogle && (
          <Search onHide={toogleSearch} setSearchToogle={setSearchToogle} />
        )}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/category/:id/products"
            element={<CategorizedProducts />}
          />
          <Route path="/product/cart" element={<CartPage />} />

          {token && token.access_token && (
            <Route path="/profile" element={<Profile />} />
          )}

          <Route path="*" element={<NotFound />}></Route>
          <Route path="/product/:id/*" element={<NotFound />}></Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
