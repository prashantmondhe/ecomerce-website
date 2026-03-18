
import { useCartContext } from '../Context/CartContext';

interface propsType {
  size: string;
}

const CartCountBadge = ({ size }: propsType) => {
  
  const { cart } = useCartContext();

  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  
  if (totalItems === 0) return null;

  return (
    <div className={`absolute -top-1 -right-1 bg-red-600 text-white text-[12px] ${size} flex items-center justify-center rounded-full`}>
      {totalItems}
    </div>
  );
};

export default CartCountBadge;