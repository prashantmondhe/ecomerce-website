

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import MobNavbar from './Components/MobNavbar/MobNavbar';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart'; 
import Login from './Components/Login/Login';


import { CartContextProvider } from './Components/Context/CartContext';
import { WishlistContextProvider } from './Components/Context/WishlistContext'; 


import Home from './Components/Home/Home';
import SearchPage from './Components/SearchPage/SearchPage';
import ProductDetails from './Components/ProductDetails/ProductDetails'; 
import WishlistPage from './Components/WishlistPage/WishlistPage'; 

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 

  return (
    <CartContextProvider>
      <WishlistContextProvider> 
        <BrowserRouter>
          <main className="relative flex flex-col min-h-screen">
            
            <Navbar setShowCart={setShowCart} setShowLogin={setShowLogin} />
            <MobNavbar setShowCart={setShowCart} setShowLogin={setShowLogin} />
            
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              
                <Route path="/wishlist" element={<WishlistPage />} /> 
              </Routes>
            </div>

            <Footer />
            
            {showLogin && <Login setShowLogin={setShowLogin} />}
            {showCart && <Cart setShowCart={setShowCart} />}
            
          </main>
        </BrowserRouter>
      </WishlistContextProvider>
    </CartContextProvider>
  );
}

export default App;