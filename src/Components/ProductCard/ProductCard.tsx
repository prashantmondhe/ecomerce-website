

import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
import { useCartContext } from '../Context/CartContext'; 
import { useWishlistContext } from '../Context/WishlistContext'; 

interface PropsType {
  id: number;
  img: string;
  name: string;
  price: string;
}

const ProductCard = ({ id, img, name, price }: PropsType) => {
  const navigate = useNavigate();
  const { addToCart } = useCartContext(); 
  
  
  const { toggleWishlist, isInWishlist } = useWishlistContext();
  const isSaved = isInWishlist(id); 

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    addToCart({ id, name, price, img, quantity: 1 });
  };
const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();  
    e.stopPropagation(); 

    console.log("❤️ Heart Clicked for:", name); 
    console.log("Current ID:", id);

   
    toggleWishlist({ id, name, price, img }); 
  };
 

  return (
    <div 
      onClick={handleCardClick}
      className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative cursor-pointer flex flex-col justify-between bg-white shadow-sm"
    >
      
      <button 
        onClick={handleWishlistClick}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full shadow-sm hover:scale-110 transition-transform"
      >
        {isSaved ? (
          <AiFillHeart size={24} className="text-red-500" /> 
        ) : (
          <AiOutlineHeart size={24} className="text-gray-400 hover:text-red-500 transition-colors" /> // सेव्ह नसल्यास रिकामा
        )}
      </button>

      <img className="w-full h-[200px] object-cover rounded-t-lg" src={img} alt={name} />
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-xl pr-6">{name}</h3> 
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