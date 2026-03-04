
// import { IoSearchOutline } from "react-icons/io5";
// const Navbar = () => {
//   return (
//     <div className="sticky top-0 bg-white z-10 ">
//       <div className=" container hidden lg:block "> 
//         <div className="flex justify-between items-center p-8">
//             <h1 className="text-4xl font-medium">Logo</h1>
//             <div className="relative w-full max-w-[500px]">
//                 <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type ="text" placeholder= " Search Product..." />
//                  </div>
                 
// <IoSearchOutline className="absolute top-0 right-0 mt-10 mr-0 text-gray-500" size={20}/>
//         </div>
//       </div>
//     </div>
    

//   )
// }

// export default Navbar


import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../CartCountBadge/CartCountBadge";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium">Logo</h1>
          
          
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none pl-6 pr-12 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Product..."
            />
            
            
            <IoSearchOutline 
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" 
              size={20} 
            />
          </div>


        <div className="flex gap-4">

          <div className=" icon_wrapper"> 
             <FaRegUser />

          </div>
          
          <div className=" icon_wrapper relative"> 
             <AiOutlineShoppingCart />
             <CartCountBadge size ="w-[25px] h-[25px]"/>

          </div>


        </div>


          
        </div>
      </div>
    </div>
  );
};

export default Navbar;