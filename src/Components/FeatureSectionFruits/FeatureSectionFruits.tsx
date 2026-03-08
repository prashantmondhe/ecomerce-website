

// import ProductCard from "../ProductCard/ProductCard";

// const data = [
//   { id: 0, img: "/mango2.jpg", name: "Dried Mango", price: "Rs.500" },
//   { id: 1, img: "/tomato2.avif", name: "Fresh Tomato", price: "Rs.150" },
//   { id: 2, img: "/jewel2.jfif", name: "Jewel Cranberries", price: "Rs.200" },
//   { id: 3, img: "/ginger2.webp", name: "Fresh Ginger", price: "Rs.150" },
// ];

// const FeatureSectionFruits = () => {
//   return (
//     <div className="container pt-16">
//       <div className="lg:flex justify-between items-center">
        
//         <div>
//           <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
//           <p className="text-gray-600 mt-2">
//             Buy farm fresh fruits and vegetables online at the best price
//           </p> 
//         </div>
        
//         <div className="space-x-4 mt-8 lg:mt-0">
//           <button className="feature-btn">Fruits</button> 
//           <button className="text-gray-600 hover:text-accent">
//             Vegetables
//           </button> 
//           <button className="text-gray-600 hover:text-accent">
//            Fresh Items
//           </button>
//         </div>

//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
  
//         <div>
//           <img 
//             className="w-full h-full object-cover"
//             src="/fruit-veg2.jpg"
//             alt="banner"
//           />
//         </div>

//         {data.map((el) => (
//           <ProductCard 
//             key={el.id}
//             img={el.img}
//             name={el.name}
//             price={el.price}
//           />
//         ))}
      
//       </div>
//     </div>
//   );
// }

// export default FeatureSectionFruits;

import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard'; // तुमचा प्रॉडक्ट कार्ड component

const FeatureSectionFruits = () => {
    // १. डेटा साठवण्यासाठी State (सुरुवातीला रिकामी Array [])
    const [products, setProducts] = useState<any[]>([]);

    // २. API कॉल करण्यासाठी useEffect (शेवटी [] दिल्याने हे फक्त एकदाच रन होईल)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // इथे तुमच्या API ची लिंक (URL) टाका
                const response = await fetch('https://fakestoreapi.com/products/category/jewelery'); 
                const data = await response.json();
                
                setProducts(data); // आलेला डेटा State मध्ये सेव्ह केला
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchProducts();
    }, []); // <-- रिकामी Array (Dependency Array)

    return (
        <div className="container pt-16">
            <h2 className="text-2xl font-bold mb-8">Fresh Fruits</h2>
            
            {/* ३. आलेला डेटा Map करून ProductCard ला पाठवणे */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((el) => (
                    <ProductCard 
                        key={el.id} // API मधून id येतो
                        img={el.image} // API नुसार image चे नाव असू शकते
                        name={el.title} 
                        price={`Rs. ${el.price}`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default FeatureSectionFruits;