

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
            
            <p className="text-gray-500">{count} Products</p>
        </div>
        
       
        <img className="w-[100px]" src={image} alt={name}/> 
      </div>
    </div>
  )
}

export default CategoryCard;