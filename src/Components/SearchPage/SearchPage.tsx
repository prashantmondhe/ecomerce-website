import { useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';



const allProducts = [
 
  { id: 1, name: "Fresh Red Apple", price: 50, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&q=80" },
  { id: 2, name: "Alphonso Mango", price: 60, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80" },
  { id: 3, name: "Nagpur Orange", price: 70, image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&q=80" },
  { id: 4, name: "Sweet Black Grapes", price: 90, image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=80" },
 
  { id: 5, name: "Fresh Bread", price: 100, image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&q=80" },
  { id: 6, name: "Crunchy Waffle", price: 200, image: "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: 7, name: "Fresh Yogurt", price: 100, image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: 8, name: "Cornflakes", price: 150, image: "/cornflakes3.jpg" },
];
const SearchPage = () => {
 
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || ""; 

 
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        Search Results for: <span className="text-blue-600">"{query}"</span>
      </h2>

      
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-lg">No products found. Try searching something else!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((el) => (
            <ProductCard 
              key={el.id} 
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