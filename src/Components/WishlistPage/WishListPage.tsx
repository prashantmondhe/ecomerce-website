import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useWishlistContext } from "../Context/WishlistContext";

const WishlistPage = () => {
  const { wishlist } = useWishlistContext();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto pt-16 px-4 pb-16 min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        My Wishlist ❤️
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center flex flex-col items-center justify-center mt-10 space-y-6">
          <p className="text-gray-500 text-2xl">Your wishlist is empty! 😔</p>
          <p className="text-gray-400">Save items you love to buy them later.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-accent hover:bg-accentDark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Explore Products
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
         
          {wishlist.map((el) => (
            <ProductCard
              key={el.id}
              id={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;