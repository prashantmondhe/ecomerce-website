

//import { Dispatch, SetStateAction } from "react";
import { RxCross1 } from "react-icons/rx";
import { useCartContext } from "../Context/CartContext";
import { type Dispatch, type SetStateAction } from "react";

interface propsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: propsType) => {
  
  const { cart, removeFromCart } = useCartContext();

  
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
     
      const numericPrice = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
      total += numericPrice * item.quantity;
    });
    return total;
  };

  return (
    
    <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
      
     
      <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 flex flex-col shadow-2xl transition-transform duration-300">
        
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-2xl text-gray-800">Your Cart</h3>
          <button 
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <RxCross1 size={24} />
          </button>
        </div>

      
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