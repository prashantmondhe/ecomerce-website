// import { BsSearch } from "react-icons/bs";
// import { IoIosMenu } from "react-icons/io";
// import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import CartCountBadge from "../CartCountBadge/CartCountBadge";

// const MobNavbar = ({setShowCart}:any) => {
//     return (
//         <div className="sticky top-0 bg-white z-10 ">
//             <div className="container p-8 lg:hidden">
//              <div className="flex justify-between items-center">
//                <div className="flex items-center gap-6">
//                 <IoIosMenu size={30} />
//                 <BsSearch size={20} />

//                 </div>
//                 <h1 className="text-4xl">Logo</h1>

//                 <div className="flex gap-4 text-[30px]">
//                     <AiOutlineUser />
//                     <div 
//                     className="relative cursor-pointer cursor-pointer" onClick={()=> setShowCart(true)}
//                     >
//                     <AiOutlineShoppingCart />
//                     <CartCountBadge size="w-[20px] h-[20px]"/>


//                </div>

//              </div>
            
//             </div>
//         </div>
//         </div>
//     )
// }

// export default MobNavbar


import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../CartCountBadge/CartCountBadge";

const MobNavbar = ({ setShowCart }: any) => {
    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="container p-8 lg:hidden">
                <div className="flex justify-between items-center">
                    
                    {/* डावा भाग: मेनू आणि सर्च आयकॉन */}
                    <div className="flex items-center gap-6">
                        <IoIosMenu size={30} className="cursor-pointer" />
                        <BsSearch size={20} className="cursor-pointer" />
                    </div>
                    
                    {/* मध्य भाग: लोगो */}
                    <h1 className="text-4xl font-bold">Logo</h1>

                    {/* उजवा भाग: युझर आणि कार्ट आयकॉन */}
                    <div className="flex gap-4 text-[30px]">
                        <AiOutlineUser className="cursor-pointer" />
                        
                        {/* कार्ट आयकॉन आणि बॅज */}
                        <div 
                            className="relative cursor-pointer" // इथे दोन वेळा आलेला शब्द काढला
                            onClick={() => setShowCart(true)}
                        >
                            <AiOutlineShoppingCart />
                            <CartCountBadge size="w-[20px] h-[20px]" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobNavbar;

