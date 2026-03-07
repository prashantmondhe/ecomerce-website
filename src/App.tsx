
import MobNavbar from './Components/MobNavbar/MobNavbar';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import FeatureSectionFruits from './Components/FeatureSectionFruits/FeatureSectionFruits';
import FeatureSectionBreakFast from './Components/FeatureSectionBreakFast/FeatureSectionBreakFast';
import Banner from './Components/Banner/Banner';
import BlogSection from './Components/BlogSection/BlogSection';




const App = () => {
  return (
    <main>
      <Navbar />
      <MobNavbar />
      <Hero />
      <Category />
      <FeatureSectionFruits/>
      <FeatureSectionBreakFast/>
      <Banner/>
      <BlogSection/>
    
    </main>
  )
}

export default App;