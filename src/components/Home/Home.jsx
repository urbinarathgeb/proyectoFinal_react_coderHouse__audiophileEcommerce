// CUSTOM COMPONENTS
import FeaturedXx99 from './FeaturedXx99';
import CategoryCard from './CategoryCard';
import FeaturedZx9 from './FeaturedZx9';
import FeaturedZx7 from './FeaturedZx7';
import FeaturedYx1 from './FeaturedYx1';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

// STYLES
import './FeaturedProducts.scss';

const Home = () => {
  return (
    <main className='p-0 d-flex flex-column justify-content-center align-items-center'>
      <FeaturedXx99 />
      <CategoryCard />
      <FeaturedZx9 />
      <FeaturedZx7 />
      <FeaturedYx1 />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Home;
