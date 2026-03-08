// import React from 'react'
// import { useCartContext } from '../Context/CartContext';
// interface propsType {
//     size: string;
// }
// const CartCountBadge: React.FC <propsType> = ({size}) => {
//   const {product}=useCartContext
//   return (
//     <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
//     >


//       {product.length}
//     </div>
//   )
// }

// export default CartCountBadge

import React from 'react'
import { useCartContext } from '../Context/CartContext';

// TypeScript मध्ये Interface चे नाव कॅपिटल (PascalCase) ठेवणे उत्तम असते
interface PropsType {
    size: string;
}

const CartCountBadge: React.FC<PropsType> = ({ size }) => {
  // चूक इथे होती: useCartContext च्या पुढे () लावले नव्हते
  const { product } = useCartContext(); 

  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      {/* जर product उपलब्ध असेल तरच त्याची length दाखवा, नाहीतर 0 दाखवा */}
      {product?.length || 0}
    </div>
  )
}

export default CartCountBadge;