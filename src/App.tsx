
import MobNavbar from './Components/MobNavbar/MobNavbar';
import Navbar from './Components/Navbar/Navbar';
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
import { useState } from 'react';


import Cart from './Components/Cart/Cart'; 

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      <main>
        <Navbar setShowCart={setShowCart} />
        <MobNavbar setShowCart={setShowCart} />
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionBreakFast />
        <Banner />
        <BlogSection />
        <NewsLetter />
        <Feature />
        <Footer />
        
        
        {showCart && <Cart setShowCart={setShowCart} />}
        
      </main>
    </CartContextProvider>
  );
}

export default App;