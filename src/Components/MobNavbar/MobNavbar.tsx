
import { BsSearch } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from "../CartCountBadge/CartCountBadge";

const MobNavbar = ({ setShowCart }: any) => {
    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="container p-8 lg:hidden">
                <div className="flex justify-between items-center">
                    
                 
                    <div className="flex items-center gap-6">
                        <IoIosMenu size={30} className="cursor-pointer" />
                        <BsSearch size={20} className="cursor-pointer" />
                    </div>
                    
                   
                    <h1 className="text-4xl font-bold">Logo</h1>

                   
                    <div className="flex gap-4 text-[30px]">
                        <AiOutlineUser className="cursor-pointer" />
                        
                       
                        <div 
                            className="relative cursor-pointer" 
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

