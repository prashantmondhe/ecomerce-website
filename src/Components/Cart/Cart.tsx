
import { RxCross1 } from "react-icons/rx";
import CartProduct from "../CartProduct/CartProduct";
import { useCartContext } from "../Context/CartContext";

const Cart = ({ setShowCart }: any) => {  
    const { product } = useCartContext();

   
    const getTotal = () => {
        let total = 0;
        product?.forEach((item: any) => {
            
            const priceNum = typeof item.price === 'string' 
                ? parseInt(item.price.replace(/[^\d]/g, '')) 
                : item.price;
            
            total += priceNum;
        });
        return total;
    };

    return (
        <div 
            className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
            onClick={() => setShowCart(false)}
        >
            <div 
                className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6 flex flex-col"
                onClick={(e) => e.stopPropagation()} 
            >
                <RxCross1
                    className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                    onClick={() => setShowCart(false)}
                />

                <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
                    Your Cart
                </h3>
                
                
                <div className="mt-6 flex-1 overflow-y-auto">
                    {product?.length > 0 ? (
                        product.map((el: any) => (
                            <CartProduct
                                key={el.name}
                                img={el.img}
                                name={el.name}
                                price={el.price}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-400 mt-10">Your cart is empty.</p>
                    )}
                </div>

                
                <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center text-xl font-bold mb-4">
                        <span>Total:</span>
                        <span className="text-accentDark">Rs. {getTotal()}.00</span>
                    </div>

                    <button className="bg-accent text-white text-center w-full rounded-3xl py-3 hover:bg-accentDark mb-3 font-medium transition">
                        View Cart
                    </button>
                    <button className="bg-accentDark text-white text-center w-full rounded-3xl py-3 hover:bg-black font-medium transition">
                        CheckOut
                    </button>
                </div>
            </div> 
        </div> 
    );
}

export default Cart;