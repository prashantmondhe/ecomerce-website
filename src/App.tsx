
import MobNavbar from './Components/MobNavbar/MobNavbar';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import FeatureSectionFruits from './Components/FeatureSectionFruits/FeatureSectionFruits';




const App = () => {
  return (
    <main>
      <Navbar />
      <MobNavbar />
      <Hero />
      <Category />
      <FeatureSectionFruits/>
    
    </main>
  )
}

export default App;