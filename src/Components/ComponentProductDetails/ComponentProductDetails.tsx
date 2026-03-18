import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../../data'; 

const ProductDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  
  const product = allProducts.find((p) => p.id === Number(id));

 
  if (!product) {
    return <div className="text-center pt-20 text-2xl">Product not found!</div>;
  }

  return (
    <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-500 hover:underline">
        &larr; Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
       
        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

       
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-semibold">Rs. {product.price}</p>
          <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          
          <div className="pt-4">
            <button className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;