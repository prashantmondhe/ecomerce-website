

// import React from "react";
// import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
// import { useCartContext } from "../Context/CartContext";
// interface propsType {
//   img: string;
//   name: string;
//   price: string;
// }


// const ProductCard: React.FC<propsType> = ({ img, name, price }) => {
 
//     const{addToCart}= useCartContext();
//    // toast.success("Added To Cart");
//     addToCart({img,name,price});
// };

//  return (
//     <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      
//       <img src={img} alt={name} />

//       <div className="space-y-2 relative p-4">
        
//         <div className="text-yellow-400 flex gap-[2px] text-[20px]">
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiOutlineStar />
//         </div>

//         <h3 className="font-medium">{name}</h3>

        
//         <h3 className="text-2xl font-medium text-red-600">{price}</h3>

//         <button className="absolute -top-4 right-2 bg-accent text-white text-[28px] 
//         w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer 
//         onClick={addProductToCart}">
//           <AiOutlineShopping />
//         </button>
        
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React from "react";
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from "../Context/CartContext";

// TypeScript Interface
interface PropsType {
  img: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<PropsType> = ({ img, name, price }) => {
  const { addToCart } = useCartContext();

  // चूक २ आणि ४ दुरुस्त केली: Cart मध्ये ऍड करण्यासाठी हे फंक्शन बनवले
  const addProductToCart = () => {
    addToCart({ img, name, price });
    // toast.success("Added To Cart"); // जेव्हा Toast वापराल तेव्हा हे अनकमेंट करा
  };

  // चूक १ दुरुस्त केली: return आता फंक्शनच्या आत आहे
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
      <img src={img} alt={name} />

      <div className="space-y-2 relative p-4">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        <h3 className="font-medium">{name}</h3>

        <h3 className="text-2xl font-medium text-red-600">{price}</h3>

        {/* चूक ३ दुरुस्त केली: onClick ला className च्या बाहेर काढले */}
        <button 
          className="absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer hover:bg-accentDark"
          onClick={addProductToCart} 
        >
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
}; // फंक्शन इथे योग्य प्रकारे बंद झाले आहे

export default ProductCard;