

import ProductCard from "../ProductCard/ProductCard";

const data = [
  { id: 0, img: "/bread3.jfif", name: "Fresh Bread", price: "Rs.100" },
  { id: 1, img: "/waffle3.webp", name: "Crunchy Waffle", price: "Rs.200" },
  { id: 2, img: "/yougurt3.jpg", name: "Fresh Yogurt", price: "Rs.100" },
  { id: 3, img: "/cornflakes3.jpg", name: "Cornflakes", price: "Rs.150" },
];

const FeatureSectionBreakFast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        
        <div>
          <h3 className="font-medium text-2xl">BreakFast & Dairy</h3>
          <p className="text-gray-600 mt-2">
            Buy best quality breakfast online from shop near you
          </p> 
        </div>
        
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature-btn">Yogurt</button> 
          <button className="text-gray-600 hover:text-accent">
            Waffles
          </button> 
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>

      </div>

      
      
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4 items-stretch">
  
        
        <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
          <img 
            className="w-full h-full object-cover"
            src="/breakfast3.jfif"
            alt="banner"
          />
        </div>

        {data.map((el) => (
          <ProductCard 
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />
        ))}
      
      </div>
    </div>
  );
}

export default FeatureSectionBreakFast;