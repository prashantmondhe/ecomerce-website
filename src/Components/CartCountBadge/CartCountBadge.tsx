
import React from 'react'
import { useCartContext } from '../Context/CartContext';


interface PropsType {
    size: string;
}

const CartCountBadge: React.FC<PropsType> = ({ size }) => {
 
  const { product } = useCartContext(); 

  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
     
      {product?.length || 0}
    </div>
  )
}

export default CartCountBadge;