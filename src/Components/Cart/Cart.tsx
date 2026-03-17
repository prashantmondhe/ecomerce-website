
// import { RxCross1 } from "react-icons/rx";
// import CartProduct from "../CartProduct/CartProduct";
// import { useCartContext } from "../Context/CartContext";

// const Cart = ({ setShowCart }: any) => {  
//     const { product } = useCartContext();

   
//     const getTotal = () => {
//         let total = 0;
//         product?.forEach((item: any) => {
            
//             const priceNum = typeof item.price === 'string' 
//                 ? parseInt(item.price.replace(/[^\d]/g, '')) 
//                 : item.price;
            
//             total += priceNum;
//         });
//         return total;
//     };

//     return (
//         <div 
//             className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
//             onClick={() => setShowCart(false)}
//         >
//             <div 
//                 className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6 flex flex-col"
//                 onClick={(e) => e.stopPropagation()} 
//             >
//                 <RxCross1
//                     className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
//                     onClick={() => setShowCart(false)}
//                 />

//                 <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
//                     Your Cart
//                 </h3>
                
                
//                 <div className="mt-6 flex-1 overflow-y-auto">
//                     {product?.length > 0 ? (
//                         product.map((el: any) => (
//                             <CartProduct
//                                 key={el.name}
//                                 img={el.img}
//                                 name={el.name}
//                                 price={el.price}
//                             />
//                         ))
//                     ) : (
//                         <p className="text-center text-gray-400 mt-10">Your cart is empty.</p>
//                     )}
//                 </div>

                
//                 <div className="border-t border-gray-200 pt-4 mt-4">
//                     <div className="flex justify-between items-center text-xl font-bold mb-4">
//                         <span>Total:</span>
//                         <span className="text-accentDark">Rs. {getTotal()}.00</span>
//                     </div>

//                     <button className="bg-accent text-white text-center w-full rounded-3xl py-3 hover:bg-accentDark mb-3 font-medium transition">
//                         View Cart
//                     </button>
//                     <button className="bg-accentDark text-white text-center w-full rounded-3xl py-3 hover:bg-black font-medium transition">
//                         CheckOut
//                     </button>
//                 </div>
//             </div> 
//         </div> 
//     );
// }

// export default Cart;

//.............

import { Dispatch, SetStateAction } from "react";
import { RxCross1 } from "react-icons/rx";
import { useCartContext } from "../Context/CartContext";

interface propsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: propsType) => {
  // १. Context मधून कार्टचा डेटा आणि removeFromCart फंक्शन घेणे
  const { cart, removeFromCart } = useCartContext();

  // २. कार्टमधील सर्व प्रॉडक्ट्सची एकूण किंमत (Total Price) काढणे
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      // price स्ट्रिंगमधून (उदा. "Rs. 50") फक्त नंबर वेगळा काढणे
      const numericPrice = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
      total += numericPrice * item.quantity;
    });
    return total;
  };

  return (
    // डार्क ओव्हरले (Dark Overlay) - कार्टच्या मागचा अंधार
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
      
      {/* कार्टची पांढरी खिडकी (White Sidebar) */}
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 flex flex-col shadow-2xl transition-transform duration-300">
        
        {/* हेडर (Header) */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-2xl text-gray-800">Your Cart</h3>
          <button 
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <RxCross1 size={24} />
          </button>
        </div>

        {/* कार्टमधील प्रॉडक्ट्सची लिस्ट */}
        <div className="flex-grow overflow-y-auto space-y-4 pr-2">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
              <p className="text-xl">Your cart is empty! 🛒</p>
              <button 
                onClick={() => setShowCart(false)}
                className="text-blue-500 hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border border-gray-100 p-3 rounded-lg shadow-sm">
                
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-[60px] h-[60px] object-cover rounded-md" />
                  <div>
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x {item.price}
                    </p>
                  </div>
                </div>

                {/* प्रॉडक्ट कार्टमधून काढण्याचे (Remove) बटण */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <RxCross1 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* तळाचा भाग (Total आणि Checkout) */}
        {cart.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-600">Total:</span>
              <span className="text-2xl font-bold text-gray-800">Rs. {calculateTotal()}</span>
            </div>
            <button className="w-full bg-accent hover:bg-accentDark text-white py-3 rounded-full text-lg font-medium transition-colors shadow-md">
              Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;