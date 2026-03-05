// interface propsType {
//     name: string;
//     image: string;
//     count: number;
// }

// const CategoryCard: React.FC<propsType>  = ({image,name,count}) => {
//   return (
//     <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transrorm
//     rounded-lg">
//       <div className="flex justify-between items-center p-6">
//         <div className="space-y-4">
//             <h3 className="font-medium text-xl">{name}</h3>
//             <p className="text-gray-500">{count}</p>

//         </div>
//         <img className="w-[100px]" src={img} alt={name}/> 
//       </div>
//     </div>
//   )
// }

// export default CategoryCard

import React from 'react';

interface propsType {
  name: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<propsType> = ({ image, name, count }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg cursor-pointer">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
            <h3 className="font-medium text-xl">{name}</h3>
            {/* मी इथे पुढे 'Products' शब्द जोडला आहे जेणेकरून ते छान दिसेल (उदा. 12 Products) */}
            <p className="text-gray-500">{count} Products</p>
        </div>
        
        {/* इथे img ऐवजी image असा बदल केला आहे */}
        <img className="w-[100px]" src={image} alt={name}/> 
      </div>
    </div>
  )
}

export default CategoryCard;