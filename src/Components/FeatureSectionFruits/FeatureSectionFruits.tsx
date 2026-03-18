

import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard'; 
import { allProducts } from '../../data'; 

const FeatureSectionFruits = () => {
    
    const [apiData, setApiData] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
               
                const response = await fetch('https://fakestoreapi.com/products?limit=4');
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error("API Error: ", error);
            }
        };
        fetchProducts();
    }, []);

    
    const myFruits = allProducts.filter(item => item.id >= 1 && item.id <= 4);

    return (
        <section className="container mx-auto pt-16 px-4 pb-16">
            <h2 className="text-2xl font-bold mb-8 text-center sm:text-left text-gray-800">
                Fresh Fruits
            </h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                
              
                {apiData.map((apiItem, index) => {
                  
                    const fruit = myFruits[index]; 
                    
                    if (!fruit) return null; 

                    return (
                        <ProductCard 
                            key={apiItem.id} 
                            id={fruit.id} 
                            img={fruit.image} 
                            name={fruit.name} 
                            price={`Rs. ${fruit.price}`} 
                        />
                    );
                })}

            </div>
        </section>
    );
};

export default FeatureSectionFruits;