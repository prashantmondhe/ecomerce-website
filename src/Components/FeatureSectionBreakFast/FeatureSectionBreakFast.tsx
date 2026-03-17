// //https://www.loom.com/share/9cb5cdb114ba4a209ec48ebd6c7bdfc0

// import { useState, useEffect } from "react";
// import ProductCard from "../ProductCard/ProductCard";

// const FeatureSectionBreakFast = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
       
//         const response = await fetch("https://fakestoreapi.com/products?limit=4");
//         const data = await response.json();

        
//         const customBreakfast = [
//           { 
//             name: "Fresh Bread", 
//             price: 100, 
//             image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&q=80" 
//           },
//           { 
//             name: "Crunchy Waffle", 
//             price: 200, 
            
//             image: "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=500" 
//           },
//           { 
//             name: "Fresh Yogurt", 
//             price: 100, 
           
//             image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=500" 
//           },
//          { 
//             name: "Cornflakes", 
//             price: 150, 
//             // we are using local image here
//             image: "/cornflakes3.jpg" 
//           },
//         ];

       
//         const modifiedData = data.slice(0, 4).map((item: any, index: number) => ({
//           id: item.id,
//           title: customBreakfast[index].name,
//           price: customBreakfast[index].price,
//           image: customBreakfast[index].image,
//         }));

       
//         setProducts(modifiedData);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container pt-16">
      
//       <div className="lg:flex justify-between items-center">
//         <div>
//           <h3 className="font-medium text-2xl">BreakFast & Dairy</h3>
//           <p className="text-gray-600 mt-2">
//             Buy best quality breakfast online from shop near you
//           </p>
//         </div>

//         <div className="space-x-4 mt-8 lg:mt-0">
//           <button className="feature-btn">Yogurt</button>
//           <button className="text-gray-600 hover:text-accent">Waffles</button>
//           <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4 items-stretch">
        
//         <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
//           <img
//             className="w-full h-full object-cover"
//             src="/breakfast3.jfif"
//             alt="Breakfast banner"
//           />
//         </div>

//         {products.map((el) => (
//           <ProductCard
//             key={el.id}
//             img={el.image}
//             name={el.title}
//             price={`Rs. ${el.price}`} 
//           />
//         ))}

//       </div>
//     </div>
//   );
// };

// export default FeatureSectionBreakFast;

//.............................

import ProductCard from "../ProductCard/ProductCard";
import { allProducts } from "../../data"; // नवीन डेटा फाईल इम्पोर्ट केली

const FeatureSectionBreakFast = () => {
  // फक्त नाश्त्याचे पदार्थ वेगळे काढणे (ज्यांचे ID ५ ते ८ आहेत)
  const breakfastProducts = allProducts.filter(item => item.id >= 5 && item.id <= 8);

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

        {breakfastProducts.map((el) => (
          <ProductCard
            key={el.id}
            id={el.id} // ID पास करणे महत्त्वाचे आहे
            img={el.image}
            name={el.name}
            price={`Rs. ${el.price}`} 
          />
        ))}

      </div>
    </section>
  );
};

export default FeatureSectionBreakFast;