import { createContext, useContext, useState, ReactNode } from "react";


interface WishlistItem {
  id: number;
  name: string;
  price: string;
  img: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean; 
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistContextProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

 
  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const existingItem = prev.find((p) => p.id === item.id);
      if (existingItem) {
        
        return prev.filter((p) => p.id !== item.id);
      } else {
       
        return [...prev, item];
      }
    });
  };

  
  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlistContext must be used within a WishlistContextProvider");
  }
  return context;
};