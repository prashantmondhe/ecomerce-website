
// import React from 'react'
// import { useCartContext } from '../Context/CartContext';


// interface PropsType {
//     size: string;
// }

// const CartCountBadge: React.FC<PropsType> = ({ size }) => {
 
//   const { product } = useCartContext(); 

//   return (
//     <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
     
//       {product?.length || 0}
//     </div>
//   )
// }

// export default CartCountBadge;


import { useCartContext } from '../Context/CartContext';

interface propsType {
  size: string;
}

const CartCountBadge = ({ size }: propsType) => {
  // Context मधून कार्टचा डेटा घेणे
  const { cart } = useCartContext();

  // कार्टमधील एकूण प्रॉडक्ट्सची संख्या मोजणे
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // जर कार्ट रिकामी असेल, तर शून्य दाखवण्याऐवजी बॅज लपवून ठेवणे चांगले
  if (totalItems === 0) return null;

  return (
    <div className={`absolute -top-1 -right-1 bg-red-600 text-white text-[12px] ${size} flex items-center justify-center rounded-full`}>
      {totalItems}
    </div>
  );
};

export default CartCountBadge;