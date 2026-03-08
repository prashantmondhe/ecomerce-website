// import { RxCross1 } from "react-icons/rx";
// import cartProducct from "./CartProduct";
// import { useCartContext } from "../Context/CartContext";
// import CartProduct from "../CartProduct/CartProduct";

// const Cart=({ setshowCart}:any)=>{
//     const {product} = useCartContext();
//     return (
//         <div 
//         className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
//         onClick={()=> setshowCart(false)}
//         >
//             <div 
//             className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
//             onClick={{e}=> e.stopPropagation()}
//             >
//                 <RxCross1
//                 className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
//                 onClick={()=> setshowCart(false)}
//                 />

//                 <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
//                     Your Cart
//                 </h3>
//                 <div className="mt-6">
//                     {product?.map((el:any)=>(
//                         <CartProduct
//                         key={el.name}
//                         img={el.img}
//                         name={el.name}
//                         price={el.price}
//                         />
//                     ))}
//                 </div>
//                 <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mb-
//                 mt-4">
//                     View Cart
//                 </button>
//                 <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark">
//                     CheckOut
//                 </button>
//         </div>
        
//     )
// }
// export default Cart;

import { RxCross1 } from "react-icons/rx";
// चुकीचे import काढून टाकले आहे
import CartProduct from "../CartProduct/CartProduct";
import { useCartContext } from "../Context/CartContext";

const Cart = ({ setShowCart }: any) => { // 'S' capital केला आहे
    const { product } = useCartContext();
    
    return (
        // मुख्य Overlay Div
        <div 
            className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
            onClick={() => setShowCart(false)}
        >
            {/* आतला पांढरा Cart Div */}
            <div 
                className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
                onClick={(e) => e.stopPropagation()} // चूक १ दुरुस्त केली (Curly braces काढले)
            >
                <RxCross1
                    className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                    onClick={() => setShowCart(false)}
                />

                <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
                    Your Cart
                </h3>
                
                <div className="mt-6">
                    {product?.map((el: any) => (
                        <CartProduct
                            key={el.name}
                            img={el.img}
                            name={el.name}
                            price={el.price}
                        />
                    ))}
                </div>
                
                {/* चूक ३ दुरुस्त केली: mb-4 mt-4 एकाच ओळीत लिहिले */}
                <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mb-4 mt-4">
                    View Cart
                </button>
                <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark">
                    CheckOut
                </button>
            </div> 
        </div> // चूक २ दुरुस्त केली: मुख्य Div इथे बंद केला
    );
}

export default Cart;