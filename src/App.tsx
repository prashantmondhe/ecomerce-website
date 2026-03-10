

import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import MobNavbar from './Components/MobNavbar/MobNavbar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import FeatureSectionFruits from './Components/FeatureSectionFruits/FeatureSectionFruits';
import FeatureSectionBreakFast from './Components/FeatureSectionBreakFast/FeatureSectionBreakFast';
import Banner from './Components/Banner/Banner';
import BlogSection from './Components/BlogSection/BlogSection';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';
import { CartContextProvider } from './Components/Context/CartContext';

import Cart from './Components/Cart/Cart'; 
import Login from './Components/Login/Login';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 

  return (
    <CartContextProvider>
      <main className="relative">
        <Navbar setShowCart={setShowCart} setShowLogin={setShowLogin} />
        <MobNavbar setShowCart={setShowCart} setShowLogin={setShowLogin} />
        
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionBreakFast />
        <Banner />
        <BlogSection />
        <NewsLetter />
        <Feature />
        <Footer />

        // {showLogin && <Login setShowLogin={setShowLogin} />}
        
        
        {showLogin && <Login setShowLogin={setShowLogin} />}
        
        
        {showCart && <Cart setShowCart={setShowCart} />}
      </main>
    </CartContextProvider>
  );
}

export default App;