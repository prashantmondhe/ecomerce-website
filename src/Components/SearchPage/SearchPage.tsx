

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import ProductCard from "../ProductCard/ProductCard";
import { allProducts } from "../../data";

const SearchPage = () => {
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; 

  const [filteredData, setFilteredData] = useState(allProducts);

  
  useEffect(() => {
    if (query === "") {
      setFilteredData(allProducts);
    } else {
      const filtered = allProducts.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query]);

  return (
    <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      
      
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
        {query ? `Search Results for "${query}"` : "All Products"}
      </h2>

     
      {filteredData.length === 0 ? (
        <div className="text-center flex flex-col items-center justify-center mt-10 space-y-4">
          <p className="text-gray-500 text-2xl">No products found for "{query}" 😔</p>
          <p className="text-gray-400">Try searching for something else like 'Apple' or 'Bread'.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {filteredData.map((el) => (
            <ProductCard
              key={el.id}
              id={el.id}
              img={el.image}
              name={el.name}
              price={`Rs. ${el.price}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;