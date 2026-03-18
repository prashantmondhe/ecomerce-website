
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { allProducts } from "../../data";

const FeatureSectionBreakFast = () => {
  
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
       
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=4");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchProducts();
  }, []);

  
  const myBreakfast = allProducts.filter(item => item.id >= 5 && item.id <= 8);

  return (
    <section className="container mx-auto pt-16 px-4"> 
      
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">BreakFast & Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy best quality breakfast online from shop near you
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature-btn">Yogurt</button>
          <button className="text-gray-600 hover:text-accent transition-colors">Waffles</button>
          <button className="text-gray-600 hover:text-accent transition-colors">Bread & Bakery</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4 items-stretch">
        
        
        <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
          <img
            className="w-full h-full object-cover"
            src="/breakfast3.jfif"
            alt="Breakfast promotional banner"
          />
        </div>

    
        {apiData.map((apiItem, index) => {
          const breakfastItem = myBreakfast[index];

          if (!breakfastItem) return null;

          return (
            <ProductCard
              key={apiItem.id}
              id={breakfastItem.id} 
              img={breakfastItem.image} 
              name={breakfastItem.name} 
              price={`Rs. ${breakfastItem.price}`} 
            />
          );
        })}

      </div>
    </section>
  );
};

export default FeatureSectionBreakFast;