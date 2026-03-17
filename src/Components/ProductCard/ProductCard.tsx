
// // // // import React from "react";
// // // // import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
// // // // import { useCartContext } from "../Context/CartContext";

// // // // interface PropsType {
// // // //   img: string;
// // // //   name: string;
// // // //   price: string;
// // // // }

// // // // const ProductCard: React.FC<PropsType> = ({ img, name, price }) => {
// // // //   const { addToCart } = useCartContext();


// // // //   const addProductToCart = () => {
// // // //     addToCart({ img, name, price });
// // // //   };

 
// // // //   return (
// // // //     <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative flex flex-col">
      
// // // //       <div className="w-full h-48 overflow-hidden bg-gray-100 rounded-t-lg">
// // // //         <img src={img} alt={name} className="w-full h-full object-cover" />
// // // //       </div>

// // // //       <div className="space-y-2 relative p-4 flex flex-col flex-grow">
        
// // // //         <div className="text-yellow-400 flex gap-[2px] text-[20px]">
// // // //           <AiFillStar />
// // // //           <AiFillStar />
// // // //           <AiFillStar />
// // // //           <AiFillStar />
// // // //           <AiOutlineStar />
// // // //         </div>

// // // //         <h3 className="font-medium text-gray-800">{name}</h3>
// // // //         <h3 className="text-2xl font-medium text-red-600">{price}</h3>

// // // //         <button 
// // // //           onClick={addProductToCart} 
// // // //           className="absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer hover:bg-green-600 transition-colors"
// // // //         >
// // // //           <AiOutlineShopping />
// // // //         </button>
        
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }; 

// // // // export default ProductCard;

// // // import { useNavigate } from 'react-router-dom';

// // // // १. Props मध्ये id ऍड करा
// // // interface propsType {
// // //   id: number; // नवीन ऍड केले
// // //   img: string;
// // //   name: string;
// // //   price: string;
// // // }

// // // const ProductCard = ({ id, img, name, price }: propsType) => {
// // //   const navigate = useNavigate();

// // //   // २. क्लिक केल्यावर नवीन पेजवर जाण्यासाठी फंक्शन
// // //   const handleClick = () => {
// // //     navigate(`/product/${id}`);
// // //   };

// // //   return (
// // //     // ३. कार्डवर onClick इव्हेंट लावा
// // //     <div 
// // //       onClick={handleClick}
// // //       className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative cursor-pointer"
// // //     >
// // //       <img className="w-full h-[200px] object-cover rounded-t-lg" src={img} alt={name} />
// // //       <div className="p-4 space-y-2">
// // //         <h3 className="font-medium text-xl">{name}</h3>
// // //         <p className="text-gray-500">{price}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductCard;

// // //..............

// // import { useNavigate } from 'react-router-dom';
// // import { AiOutlineShoppingCart } from "react-icons/ai"; // कार्टचा आयकॉन 

// // interface propsType {
// //   id: number;
// //   img: string;
// //   name: string;
// //   price: string;
// // }

// // const ProductCard = ({ id, img, name, price }: propsType) => {
// //   const navigate = useNavigate();

// //   // १. जेव्हा युझर पूर्ण कार्डवर (फोटोवर/नावावर) क्लिक करेल
// //   const handleCardClick = () => {
// //     navigate(`/product/${id}`);
// //   };

// //   // २. जेव्हा युझर फक्त 'Add to Cart' बटणावर क्लिक करेल
// //   const handleAddToCart = (e: React.MouseEvent) => {
// //     e.stopPropagation(); // हे खूप महत्त्वाचे आहे! यामुळे पेज बदलणार नाही.
    
// //     // इथे आपण नंतर CartContext जोडणार आहोत
// //     alert(`${name} added to cart! (Logic coming soon)`); 
// //   };

// //   return (
// //     <div 
// //       onClick={handleCardClick}
// //       className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative cursor-pointer flex flex-col justify-between bg-white"
// //     >
// //       <img className="w-full h-[200px] object-cover rounded-t-lg" src={img} alt={name} />
      
// //       <div className="p-4 flex flex-col flex-grow">
// //         <h3 className="font-medium text-xl">{name}</h3>
// //         <p className="text-gray-500 mb-4">{price}</p>
        
// //         {/* तुझा हरवलेला Add to Cart बटण परत आला! */}
// //         <button 
// //           onClick={handleAddToCart}
// //           className="mt-auto w-full bg-accent hover:bg-accentDark text-white py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
// //         >
// //           <AiOutlineShoppingCart size={20} />
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;

// //.................

// import { useNavigate } from 'react-router-dom';
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useCartContext } from '../Context/CartContext'; // नवीन Import

// interface propsType {
//   id: number;
//   img: string;
//   name: string;
//   price: string;
// }

// const ProductCard = ({ id, img, name, price }: propsType) => {
//   const navigate = useNavigate();
//   // Context मधून addToCart फंक्शन घेणे
//   const { addToCart } = useCartContext(); 

//   const handleCardClick = () => {
//     navigate(`/product/${id}`);
//   };

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.stopPropagation(); 
    
//     // १. खरा प्रॉडक्ट कार्टमध्ये पाठवणे
//     addToCart({ id, name, price, img, quantity: 1 });
    
//     // २. युझरला समजण्यासाठी छोटासा अलर्ट
//     alert(`${name} Added to Cart Successfully! 🛒`); 
//   };

//   return (
//     <div 
//       onClick={handleCardClick}
//       className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative cursor-pointer flex flex-col justify-between bg-white"
//     >
//       <img className="w-full h-[200px] object-cover rounded-t-lg" src={img} alt={name} />
      
//       <div className="p-4 flex flex-col flex-grow">
//         <h3 className="font-medium text-xl">{name}</h3>
//         <p className="text-gray-500 mb-4">{price}</p>
        
//         <button 
//           onClick={handleAddToCart}
//           className="mt-auto w-full bg-accent hover:bg-accentDark text-white py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
//         >
//           <AiOutlineShoppingCart size={20} />
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

//.......

import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from '../Context/CartContext'; 

interface propsType {
  id: number;
  img: string;
  name: string;
  price: string;
}

const ProductCard = ({ id, img, name, price }: propsType) => {
  const navigate = useNavigate();
  const { addToCart } = useCartContext(); 

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    
    // फक्त प्रॉडक्ट कार्टमध्ये ऍड होईल, कोणताही Pop-up येणार नाही!
    addToCart({ id, name, price, img, quantity: 1 });
  };

  return (
    <div 
      onClick={handleCardClick}
      className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative cursor-pointer flex flex-col justify-between bg-white"
    >
      <img className="w-full h-[200px] object-cover rounded-t-lg" src={img} alt={name} />
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-xl">{name}</h3>
        <p className="text-gray-500 mb-4">{price}</p>
        
        <button 
          onClick={handleAddToCart}
          className="mt-auto w-full bg-accent hover:bg-accentDark text-white py-2 rounded-full flex items-center justify-center gap-2 transition-colors"
        >
          <AiOutlineShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;