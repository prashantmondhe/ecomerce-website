import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import FeatureSectionFruits from '../FeatureSectionFruits/FeatureSectionFruits';
import FeatureSectionBreakFast from '../FeatureSectionBreakFast/FeatureSectionBreakFast';
import Banner from '../Banner/Banner';
import BlogSection from '../BlogSection/BlogSection';
import NewsLetter from '../NewsLetter/NewsLetter';
import Feature from '../Feature/Feature';

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakFast />
      <Banner />
      <BlogSection />
      <NewsLetter />
      <Feature />
    </>
  );
};

export default Home;