// // // import { useSearchParams } from 'react-router-dom';
// // // import ProductCard from '../ProductCard/ProductCard';



// // // const allProducts = [
 
// // //   { id: 1, name: "Fresh Red Apple", price: 50, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&q=80" },
// // //   { id: 2, name: "Alphonso Mango", price: 60, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80" },
// // //   { id: 3, name: "Nagpur Orange", price: 70, image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&q=80" },
// // //   { id: 4, name: "Sweet Black Grapes", price: 90, image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=80" },
 
// // //   { id: 5, name: "Fresh Bread", price: 100, image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&q=80" },
// // //   { id: 6, name: "Crunchy Waffle", price: 200, image: "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=500" },
// // //   { id: 7, name: "Fresh Yogurt", price: 100, image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=500" },
// // //   { id: 8, name: "Cornflakes", price: 150, image: "/cornflakes3.jpg" },
// // // ];
// // // const SearchPage = () => {
 
// // //   const [searchParams] = useSearchParams();
// // //   const query = searchParams.get('q') || ""; 

 
// // //   const filteredProducts = allProducts.filter((product) =>
// // //     product.name.toLowerCase().includes(query.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
// // //       <h2 className="text-2xl font-bold mb-8 text-gray-800">
// // //         Search Results for: <span className="text-blue-600">"{query}"</span>
// // //       </h2>

      
// // //       {filteredProducts.length === 0 ? (
// // //         <p className="text-gray-500 text-lg">No products found. Try searching something else!</p>
// // //       ) : (
// // //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // //           {filteredProducts.map((el) => (
// // //             <ProductCard 
// // //               key={el.id} 
// // //               img={el.image} 
// // //               name={el.name} 
// // //               price={`Rs. ${el.price}`} 
// // //             />
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SearchPage;

// // import { useState, useEffect } from "react";
// // import ProductCard from "../ProductCard/ProductCard";
// // import { allProducts } from "../../data"; // आपला मुख्य डेटा

// // const SearchPage = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filteredData, setFilteredData] = useState(allProducts);

// //   // सर्चचे लॉजिक (जेव्हा युझर काही टाईप करेल)
// //   useEffect(() => {
// //     if (searchTerm === "") {
// //       setFilteredData(allProducts);
// //     } else {
// //       const filtered = allProducts.filter((item) =>
// //         item.name.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //       setFilteredData(filtered);
// //     }
// //   }, [searchTerm]);

// //   return (
// //     <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      
// //       {/* सर्च बार */}
// //       <div className="flex justify-center mb-10">
// //         <input
// //           type="text"
// //           placeholder="Search for fruits, breakfast..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="w-full max-w-lg border-2 border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:border-accent text-lg shadow-sm"
// //         />
// //       </div>

// //       {/* सर्च रिझल्ट्स */}
// //       {filteredData.length === 0 ? (
// //         <div className="text-center text-gray-500 text-2xl mt-10">
// //           No products found for "{searchTerm}" 😔
// //         </div>
// //       ) : (
// //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //           {filteredData.map((el) => (
// //             <ProductCard
// //               key={el.id}
// //               id={el.id}         {/* <--- हे सर्वात महत्त्वाचे आहे! यामुळे क्लिक केल्यावर डिटेल्स पेज उघडेल */}
// //               img={el.image}
// //               name={el.name}
// //               price={`Rs. ${el.price}`}
// //             />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SearchPage;

// import { useState, useEffect } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { allProducts } from "../../data";

// const SearchPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(allProducts);

//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredData(allProducts);
//     } else {
//       const filtered = allProducts.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredData(filtered);
//     }
//   }, [searchTerm]);

//   return (
//     <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      
//       <div className="flex justify-center mb-10">
//         <input
//           type="text"
//           placeholder="Search for fruits, breakfast..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-lg border-2 border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:border-accent text-lg shadow-sm"
//         />
//       </div>

//       {filteredData.length === 0 ? (
//         <div className="text-center text-gray-500 text-2xl mt-10">
//           No products found for "{searchTerm}" 😔
//         </div>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {filteredData.map((el) => (
//             <ProductCard
//               key={el.id}
//               id={el.id}
//               img={el.image}
//               name={el.name}
//               price={`Rs. ${el.price}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchPage;

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // URL मधून शब्द वाचण्यासाठी
import ProductCard from "../ProductCard/ProductCard";
import { allProducts } from "../../data";

const SearchPage = () => {
  // १. URL मधून 'q' (सर्च क्वेरी) मिळवणे
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // जर काहीच नसेल, तर रिकामी स्ट्रिंग

  const [filteredData, setFilteredData] = useState(allProducts);

  // २. जेव्हा जेव्हा 'query' बदलेल, तेव्हा प्रॉडक्ट्स फिल्टर करणे
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
      
      {/* आपण जुना सर्च बॉक्स डिलीट केला आणि तिथे एक छान टायटल दिले */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
        {query ? `Search Results for "${query}"` : "All Products"}
      </h2>

      {/* सर्च रिझल्ट्स */}
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