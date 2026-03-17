// // import { useParams, useNavigate } from 'react-router-dom';
// // import { allProducts } from '../../data'; 

// // const ProductDetails = () => {
// //   const { id } = useParams(); // URL मधून ID मिळवणे
// //   const navigate = useNavigate();

// //   // ID नुसार आपला प्रॉडक्ट शोधणे
// //   const product = allProducts.find((p) => p.id === Number(id));

// //   // जर चुकीचा ID आला, तर हा मेसेज दिसेल
// //   if (!product) {
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
// //         <h2 className="text-2xl font-bold text-gray-800">Product not found!</h2>
// //         <button
// //           onClick={() => navigate('/')}
// //           className="bg-accent hover:bg-accentDark text-white px-6 py-2 rounded-full transition-colors"
// //         >
// //           Go Back to Home
// //         </button>
// //       </div>
// //     );
// //   }

// //   // जर प्रॉडक्ट सापडला, तर हे डिझाईन दिसेल
// //   return (
// //     <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
// //       {/* Back Button */}
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="mb-8 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
// //       >
// //         &larr; Back
// //       </button>

// //       <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        
// //         {/* प्रॉडक्ट इमेज */}
// //         <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
// //           <img
// //             src={product.image}
// //             alt={product.name}
// //             className="w-full h-full object-contain mix-blend-multiply rounded-lg"
// //           />
// //         </div>

// //         {/* प्रॉडक्टची माहिती */}
// //         <div className="flex flex-col justify-center space-y-6">
// //           <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
// //             {product.name}
// //           </h1>
// //           <p className="text-3xl text-blue-600 font-bold">
// //             Rs. {product.price}
// //           </p>
          
// //           <div className="border-t border-b border-gray-200 py-4">
// //             <h3 className="text-lg font-semibold mb-2">Description</h3>
// //             <p className="text-gray-600 text-lg leading-relaxed">
// //               {product.description || "Fresh and high-quality product delivered straight to your door. 100% natural and healthy."}
// //             </p>
// //           </div>

// //           {/* Add to Cart Button */}
// //           <div className="pt-4 flex gap-4">
// //             <button className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors w-full sm:w-auto">
// //               Add To Cart
// //             </button>
// //           </div>
          
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;
// //..............................................

// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useCartContext } from '../Context/CartContext';

// const ProductDetails = () => {
//   const { id } = useParams(); 
//   const navigate = useNavigate();
//   const { addToCart } = useCartContext();
  
//   // API डेटा आणि लोडिंग साठवण्यासाठी states
//   const [product, setProduct] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // URL मधल्या ID नुसार API मधून एकच प्रॉडक्ट आणणे
//     const fetchSingleProduct = async () => {
//       try {
//         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setLoading(false);
//       }
//     };

//     fetchSingleProduct();
//   }, [id]);

//   // जोपर्यंत API मधून डेटा येत नाही, तोपर्यंत Loading... दाखवणे
//   if (loading) {
//     return <div className="text-center pt-20 text-2xl font-medium">Loading Product Details...</div>;
//   }

//   if (!product) {
//     return <div className="text-center pt-20 text-2xl">Product not found!</div>;
//   }

//   // प्रॉडक्ट कार्टमध्ये टाकण्याचे फंक्शन
//   const handleAddToCart = () => {
//     addToCart({ 
//       id: product.id, 
//       name: product.title, 
//       price: `Rs. ${Math.round(product.price * 80)}`, 
//       img: product.image, 
//       quantity: 1 
//     });
//   };

//   return (
//     <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
//       <button onClick={() => navigate(-1)} className="mb-8 text-blue-600 font-medium">
//         &larr; Back
//       </button>

//       <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-sm border">
//         <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden p-8 flex items-center justify-center">
//           <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain" />
//         </div>

//         <div className="flex flex-col justify-center space-y-6">
//           <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{product.title}</h1>
//           <p className="inline-block bg-gray-200 px-3 py-1 rounded-full text-sm font-medium w-fit capitalize">
//             {product.category}
//           </p>
//           <p className="text-3xl text-blue-600 font-bold">Rs. {Math.round(product.price * 80)}</p>
          
//           <div className="border-t border-b border-gray-200 py-4">
//             <h3 className="text-lg font-semibold mb-2">Description</h3>
//             <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
//           </div>

//           <div className="pt-4 flex gap-4">
//             <button 
//               onClick={handleAddToCart}
//               className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors w-full sm:w-auto"
//             >
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../../data'; 
import { useCartContext } from '../Context/CartContext';

const ProductDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  // API ला विचारण्याऐवजी, आपण थेट आपल्या 'data.ts' मध्ये तो ID शोधत आहोत
  const product = allProducts.find((p) => p.id === Number(id));

  // जर चुकीचा ID आला तर
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Product not found!</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-accent hover:bg-accentDark text-white px-6 py-2 rounded-full transition-colors"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  // प्रॉडक्ट कार्टमध्ये टाकण्याचे फंक्शन
  const handleAddToCart = () => {
    addToCart({ 
      id: product.id, 
      name: product.name, 
      price: `Rs. ${product.price}`, 
      img: product.image, 
      quantity: 1 
    });
  };

  return (
    <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
      >
        &larr; Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="text-3xl text-blue-600 font-bold">
            Rs. {product.price}
          </p>
          
          <div className="border-t border-b border-gray-200 py-4">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description || "Fresh and high-quality product delivered straight to your door. 100% natural and healthy."}
            </p>
          </div>

          <div className="pt-4 flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors w-full sm:w-auto"
            >
              Add To Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;