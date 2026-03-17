
// import { useState, useEffect } from 'react';
// import ProductCard from '../ProductCard/ProductCard'; 

// const FeatureSectionFruits = () => {
//     const [products, setProducts] = useState<any[]>([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
               
//                 const response = await fetch('https://fakestoreapi.com/products?limit=4'); 
//                 const data = await response.json();
                
                
//                 const customFruits = [
//                     { 
//                         name: "Fresh Red Apple", 
//                         price: 50, 
//                         image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&q=80" 
//                     },
//                     { 
//                         name: "Alphonso Mango", 
//                         price: 60, 
//                         image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80" 
//                     },
//                     { 
//                         name: "Nagpur Orange", 
//                         price: 70, 
//                         image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&q=80" 
//                     },
//                     { 
//                         name: "Sweet Black Grapes", 
//                         price: 90, 
//                         image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=80" 
//                     }
//                 ];

                
//                 const modifiedData = data.slice(0, 4).map((item: any, index: number) => ({
//                     id: item.id,                      
//                     title: customFruits[index].name,   
//                     price: customFruits[index].price,  
//                     image: customFruits[index].image   
//                 }));
                
                
//                 setProducts(modifiedData); 
//             } catch (error) {
//                 console.error("Error fetching data: ", error);
//             }
//         };

//         fetchProducts();
//     }, []); 

//     return (
//         <div className="container mx-auto pt-16 px-4 pb-16">
//             <h2 className="text-2xl font-bold mb-8 text-center sm:text-left text-gray-800">Fresh Fruits</h2>
            
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                 {products.map((el) => (
//                     <ProductCard 
//                         key={el.id} 
//                         img={el.image} 
//                         name={el.title} 
//                         price={`Rs. ${el.price}`} 
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FeatureSectionFruits;

//............

import ProductCard from '../ProductCard/ProductCard'; 
import { allProducts } from '../../data'; // नवीन डेटा फाईल इम्पोर्ट केली

const FeatureSectionFruits = () => {
    // फक्त फळे (Fruits) वेगळी काढणे (ज्यांचे ID १ ते ४ आहेत)
    const fruitProducts = allProducts.filter(item => item.id >= 1 && item.id <= 4);

    return (
        <section className="container mx-auto pt-16 px-4 pb-16">
            <h2 className="text-2xl font-bold mb-8 text-center sm:text-left text-gray-800">
                Fresh Fruits
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {fruitProducts.map((el) => (
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

export default FeatureSectionFruits;