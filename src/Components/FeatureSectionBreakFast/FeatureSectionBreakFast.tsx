// // //https://www.loom.com/share/9cb5cdb114ba4a209ec48ebd6c7bdfc0

// // import { useState, useEffect } from "react";
// // import ProductCard from "../ProductCard/ProductCard";

// // const FeatureSectionBreakFast = () => {
// //   const [products, setProducts] = useState<any[]>([]);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
       
// //         const response = await fetch("https://fakestoreapi.com/products?limit=4");
// //         const data = await response.json();

        
// //         const customBreakfast = [
// //           { 
// //             name: "Fresh Bread", 
// //             price: 100, 
// //             image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&q=80" 
// //           },
// //           { 
// //             name: "Crunchy Waffle", 
// //             price: 200, 
            
// //             image: "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=500" 
// //           },
// //           { 
// //             name: "Fresh Yogurt", 
// //             price: 100, 
           
// //             image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=500" 
// //           },
// //          { 
// //             name: "Cornflakes", 
// //             price: 150, 
// //             // we are using local image here
// //             image: "/cornflakes3.jpg" 
// //           },
// //         ];

       
// //         const modifiedData = data.slice(0, 4).map((item: any, index: number) => ({
// //           id: item.id,
// //           title: customBreakfast[index].name,
// //           price: customBreakfast[index].price,
// //           image: customBreakfast[index].image,
// //         }));

       
// //         setProducts(modifiedData);
// //       } catch (error) {
// //         console.error("Error fetching data: ", error);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   return (
// //     <div className="container pt-16">
      
// //       <div className="lg:flex justify-between items-center">
// //         <div>
// //           <h3 className="font-medium text-2xl">BreakFast & Dairy</h3>
// //           <p className="text-gray-600 mt-2">
// //             Buy best quality breakfast online from shop near you
// //           </p>
// //         </div>

// //         <div className="space-x-4 mt-8 lg:mt-0">
// //           <button className="feature-btn">Yogurt</button>
// //           <button className="text-gray-600 hover:text-accent">Waffles</button>
// //           <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
// //         </div>
// //       </div>

// //       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4 items-stretch">
        
// //         <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
// //           <img
// //             className="w-full h-full object-cover"
// //             src="/breakfast3.jfif"
// //             alt="Breakfast banner"
// //           />
// //         </div>

// //         {products.map((el) => (
// //           <ProductCard
// //             key={el.id}
// //             img={el.image}
// //             name={el.title}
// //             price={`Rs. ${el.price}`} 
// //           />
// //         ))}

// //       </div>
// //     </div>
// //   );
// // };

// // export default FeatureSectionBreakFast;

// //.............................

// // import ProductCard from "../ProductCard/ProductCard";
// // import { allProducts } from "../../data"; // नवीन डेटा फाईल इम्पोर्ट केली

// // const FeatureSectionBreakFast = () => {
// //   // फक्त नाश्त्याचे पदार्थ वेगळे काढणे (ज्यांचे ID ५ ते ८ आहेत)
// //   const breakfastProducts = allProducts.filter(item => item.id >= 5 && item.id <= 8);

// //   return (
// //     <section className="container mx-auto pt-16 px-4"> 
      
// //       <div className="lg:flex justify-between items-center">
// //         <div>
// //           <h3 className="font-medium text-2xl">BreakFast & Dairy</h3>
// //           <p className="text-gray-600 mt-2">
// //             Buy best quality breakfast online from shop near you
// //           </p>
// //         </div>

// //         <div className="space-x-4 mt-8 lg:mt-0">
// //           <button className="feature-btn">Yogurt</button>
// //           <button className="text-gray-600 hover:text-accent transition-colors">Waffles</button>
// //           <button className="text-gray-600 hover:text-accent transition-colors">Bread & Bakery</button>
// //         </div>
// //       </div>

// //       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4 items-stretch">
        
// //         <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
// //           <img
// //             className="w-full h-full object-cover"
// //             src="/breakfast3.jfif"
// //             alt="Breakfast promotional banner"
// //           />
// //         </div>

// //         {breakfastProducts.map((el) => (
// //           <ProductCard
// //             key={el.id}
// //             id={el.id} // ID पास करणे महत्त्वाचे आहे
// //             img={el.image}
// //             name={el.name}
// //             price={`Rs. ${el.price}`} 
// //           />
// //         ))}

// //       </div>
// //     </section>
// //   );
// // };

// // export default FeatureSectionBreakFast;

// //.............................................

// import { useState, useEffect } from "react";
// import ProductCard from "../ProductCard/ProductCard";

// const FeatureSectionBreakFast = () => {
//   // API मधून येणारा डेटा साठवण्यासाठी state
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // प्रॉडक्ट्स वेगळे दिसावेत म्हणून आपण 'jewelery' कॅटेगरीचे ४ प्रॉडक्ट्स आणत आहोत
//         const response = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=4");
//         const data = await response.json();
        
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section className="container mx-auto pt-16 px-4"> 
      
//       <div className="lg:flex justify-between items-center">
//         <div>
//           {/* API च्या डेटानुसार मी नावे थोडी बदलली आहेत, तू हवं तसं ठेवू शकतोस */}
//           <h3 className="font-medium text-2xl">Trending Accessories</h3>
//           <p className="text-gray-600 mt-2">
//             Buy best quality products online from our store
//           </p>
//         </div>

//         <div className="space-x-4 mt-8 lg:mt-0">
//           <button className="feature-btn">Jewelry</button>
//           <button className="text-gray-600 hover:text-accent transition-colors">Fashion</button>
//           <button className="text-gray-600 hover:text-accent transition-colors">Bags</button>
//         </div>
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4 items-stretch">
        
//         {/* तुझा जुना डावीकडचा मोठा बॅनर तसाच ठेवला आहे */}
//         <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
//           <img
//             className="w-full h-full object-cover"
//             src="/breakfast3.jfif"
//             alt="Promotional banner"
//           />
//         </div>

//         {/* API मधून आलेले प्रॉडक्ट्स दाखवणे */}
//         {products.map((el) => (
//           <ProductCard
//             key={el.id}
//             id={el.id}
//             img={el.image}
//             name={el.title}
//             price={`Rs. ${Math.round(el.price * 80)}`} // डॉलरचे रुपये
//           />
//         ))}

//       </div>
//     </section>
//   );
// };

// export default FeatureSectionBreakFast;
//................................

import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { allProducts } from "../../data";

const FeatureSectionBreakFast = () => {
  // API मधून आलेला डेटा साठवण्यासाठी
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // API कडून ४ प्रॉडक्ट्स मागवणे
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=4");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchProducts();
  }, []);

  // आपले स्वतःचे नाश्त्याचे पदार्थ (ID ५ ते ८)
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
        
        {/* तुझा डावीकडचा मोठा फोटो (Banner) */}
        <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
          <img
            className="w-full h-full object-cover"
            src="/breakfast3.jfif"
            alt="Breakfast promotional banner"
          />
        </div>

        {/* येथे आपली ट्रिक आहे: 
          API च्या डेटावर लूप फिरवून आपले प्रॉडक्ट्स दाखवणे 
        */}
        {apiData.map((apiItem, index) => {
          const breakfastItem = myBreakfast[index];

          if (!breakfastItem) return null;

          return (
            <ProductCard
              key={apiItem.id}
              id={breakfastItem.id} // सर्वात महत्त्वाचे: आपला खरा ID!
              img={breakfastItem.image} // आपला फोटो
              name={breakfastItem.name} // आपले नाव
              price={`Rs. ${breakfastItem.price}`} // आपली किंमत
            />
          );
        })}

      </div>
    </section>
  );
};

export default FeatureSectionBreakFast;