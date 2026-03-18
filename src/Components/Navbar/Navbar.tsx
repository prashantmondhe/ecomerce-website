

import { useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa"; 
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../CartCountBadge/CartCountBadge";
import { useWishlistContext } from "../Context/WishlistContext"; 

interface NavbarProps {
  setShowCart: Dispatch<SetStateAction<boolean>>;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart, setShowLogin }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();
  
  
  const { wishlist } = useWishlistContext();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`); 
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 bg-white z-10 shadow-sm hidden lg:block">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-8">
          
          <a href="/" className="flex flex-col items-center cursor-pointer">
            <img src="/logo.jfif" alt="FreshStore Logo" className="h-10 lg:h-12 w-auto object-contain" />
            <span className="text-sm md:text-base font-bold text-gray-800 mt-1 tracking-wide">
              FreshStore
            </span>
          </a>
          
          <form onSubmit={handleSearch} className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none pl-6 pr-12 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Product..."
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button type="submit" className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-accent transition-colors">
              <IoSearchOutline size={20} />
            </button>
          </form>

          <div className="flex gap-4 items-center">
            
            <button className="icon_wrapper cursor-pointer hover:text-accent transition duration-200" onClick={() => setShowLogin(true)}> 
               <FaRegUser size={24} />
            </button>
            
            
            <button 
              className="icon_wrapper relative cursor-pointer hover:text-red-500 transition duration-200" 
              onClick={() => navigate('/wishlist')} 
            > 
               <FaRegHeart size={24} />
              
               {wishlist.length > 0 && (
                 <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center rounded-full font-bold shadow-sm">
                   {wishlist.length}
                 </div>
               )}
            </button>
            
           
            <button className="icon_wrapper relative cursor-pointer hover:text-accent transition duration-200" onClick={() => setShowCart(true)}> 
               <AiOutlineShoppingCart size={24} />
               <CartCountBadge size="w-[20px] h-[20px]"/>
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;