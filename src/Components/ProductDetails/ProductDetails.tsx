import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../../data'; 

const ProductDetails = () => {
  const { id } = useParams(); // URL मधून ID मिळवणे
  const navigate = useNavigate();

  // ID नुसार आपला प्रॉडक्ट शोधणे
  const product = allProducts.find((p) => p.id === Number(id));

  // जर चुकीचा ID आला, तर हा मेसेज दिसेल
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Product not found!</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-accent hover:bg-accentDark text-white px-6 py-2 rounded-full transition-colors"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  // जर प्रॉडक्ट सापडला, तर हे डिझाईन दिसेल
  return (
    <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
      >
        &larr; Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        
        {/* प्रॉडक्ट इमेज */}
        <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply rounded-lg"
          />
        </div>

        {/* प्रॉडक्टची माहिती */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            {product.name}
          </h1>
          <p className="text-3xl text-blue-600 font-bold">
            Rs. {product.price}
          </p>
          
          <div className="border-t border-b border-gray-200 py-4">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description || "Fresh and high-quality product delivered straight to your door. 100% natural and healthy."}
            </p>
          </div>

          {/* Add to Cart Button */}
          <div className="pt-4 flex gap-4">
            <button className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors w-full sm:w-auto">
              Add To Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;