

// // import { IoSearchOutline } from "react-icons/io5";
// // import { FaRegUser } from "react-icons/fa";
// // import { AiOutlineShoppingCart } from "react-icons/ai";
// // import CartCountBadge from "../CartCountBadge/CartCountBadge";


// // const Navbar = ({ setShowCart, setShowLogin }: any) => {
// //   return (
// //     <div className="sticky top-0 bg-white z-10 shadow-sm">
// //       <div className="container hidden lg:block">
// //         <div className="flex justify-between items-center p-8">
          
          
// //           <div className="flex flex-col items-center cursor-pointer">
// //             <img 
// //               src="/logo.jfif" 
// //               alt="Website Logo" 
// //               className="h-10 lg:h-12 w-auto object-contain" 
// //             />
// //             <span className="text-sm md:text-base font-bold text-gray-800 mt-1 tracking-wide">
// //               FreshStore
// //             </span>
// //           </div>
          
          
// //           <div className="relative w-full max-w-[500px]">
// //             <input
// //               className="bg-[#f2f3f5] border-none outline-none pl-6 pr-12 py-3 rounded-[30px] w-full"
// //               type="text"
// //               placeholder="Search Product..."
// //             />
// //             <IoSearchOutline 
// //               className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" 
// //               size={20} 
// //             />
// //           </div>

         
// //           <div className="flex gap-4">
           
// //             <div 
// //               className="icon_wrapper cursor-pointer hover:text-accent transition duration-200" 
// //               onClick={() => setShowLogin(true)}
// //             > 
// //                <FaRegUser />
// //             </div>
            
           
// //             <div 
// //               className="icon_wrapper relative cursor-pointer hover:text-accent transition duration-200" 
// //               onClick={() => setShowCart(true)}
// //             > 
// //                <AiOutlineShoppingCart />
// //                <CartCountBadge size="w-[25px] h-[25px]"/>
// //             </div>
// //           </div>
          
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;


// import { useState, Dispatch, SetStateAction } from 'react';
// import { useNavigate } from 'react-router-dom'; // राउटिंगसाठी (Routing)
// import { IoSearchOutline } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import CartCountBadge from "../CartCountBadge/CartCountBadge";

// interface NavbarProps {
//   setShowCart: Dispatch<SetStateAction<boolean>>;
//   setShowLogin: Dispatch<SetStateAction<boolean>>;
// }

// const Navbar = ({ setShowCart, setShowLogin }: NavbarProps) => {
//   // १. सर्च क्वेरी साठवण्यासाठी state
//   const [searchQuery, setSearchQuery] = useState(""); 
//   const navigate = useNavigate();

//   // २. सर्च सबमिट झाल्यावर काय करायचे त्याचे फंक्शन
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault(); // पेज रिफ्रेश होण्यापासून थांबवते
//     if (searchQuery.trim() !== "") {
//       // युझरला सर्च रिझल्ट्स पेजवर पाठवणे (उदा. /search?q=apple)
//       navigate(`/search?q=${searchQuery}`); 
//     }
//   };

//   return (
//     <header className="sticky top-0 bg-white z-10 shadow-sm hidden lg:block">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center p-8">
          
//           <a href="/" className="flex flex-col items-center cursor-pointer">
//             <img 
//               src="/logo.jfif" 
//               alt="FreshStore Logo" 
//               className="h-10 lg:h-12 w-auto object-contain" 
//             />
//             <span className="text-sm md:text-base font-bold text-gray-800 mt-1 tracking-wide">
//               FreshStore
//             </span>
//           </a>
          
//           {/* ३. Form चा वापर जेणेकरून 'Enter' की (key) काम करेल */}
//           <form 
//             onSubmit={handleSearch} 
//             className="relative w-full max-w-[500px]"
//           >
//             <input
//               className="bg-[#f2f3f5] border-none outline-none pl-6 pr-12 py-3 rounded-[30px] w-full"
//               type="text"
//               placeholder="Search Product..."
//               aria-label="Search products"
//               value={searchQuery} // state ला input सोबत जोडले
//               onChange={(e) => setSearchQuery(e.target.value)} // टाईप केल्यावर state अपडेट होईल
//             />
//             <button 
//               type="submit" 
//               className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 hover:text-accent transition-colors"
//               aria-label="Submit Search"
//             >
//               <IoSearchOutline size={20} />
//             </button>
//           </form>

//           <div className="flex gap-4">
//             <button 
//               className="icon_wrapper cursor-pointer hover:text-accent transition duration-200" 
//               onClick={() => setShowLogin(true)}
//               aria-label="Open Login Modal"
//             > 
//                <FaRegUser size={24} />
//             </button>
            
//             <button 
//               className="icon_wrapper relative cursor-pointer hover:text-accent transition duration-200" 
//               onClick={() => setShowCart(true)}
//               aria-label="Open Cart Modal"
//             > 
//                <AiOutlineShoppingCart size={24} />
//                <CartCountBadge size="w-[25px] h-[25px]"/>
//             </button>
//           </div>
          
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa"; // FaRegHeart नवीन ऍड केला
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../CartCountBadge/CartCountBadge";
import { useWishlistContext } from "../Context/WishlistContext"; // Wishlist Context इम्पोर्ट केला

interface NavbarProps {
  setShowCart: Dispatch<SetStateAction<boolean>>;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowCart, setShowLogin }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();
  
  // विशलिस्ट मधील एकूण प्रॉडक्ट्स काढण्यासाठी
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
            {/* Login Button */}
            <button className="icon_wrapper cursor-pointer hover:text-accent transition duration-200" onClick={() => setShowLogin(true)}> 
               <FaRegUser size={24} />
            </button>
            
            {/* नवीन: Wishlist Button */}
            <button 
              className="icon_wrapper relative cursor-pointer hover:text-red-500 transition duration-200" 
              onClick={() => navigate('/wishlist')} // क्लिक केल्यावर wishlist पेजवर जाईल
            > 
               <FaRegHeart size={24} />
               {/* Wishlist Badge */}
               {wishlist.length > 0 && (
                 <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center rounded-full font-bold shadow-sm">
                   {wishlist.length}
                 </div>
               )}
            </button>
            
            {/* Cart Button */}
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