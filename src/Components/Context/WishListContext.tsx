import { createContext, useContext, useState, ReactNode } from "react";

// १. Wishlist मधील प्रॉडक्टची माहिती
interface WishlistItem {
  id: number;
  name: string;
  price: string;
  img: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: number) => boolean; // हे चेक करेल की प्रॉडक्ट आधीपासून wishlist मध्ये आहे का
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistContextProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // २. प्रॉडक्ट ऍड किंवा रिमूव्ह करण्यासाठी फंक्शन (Toggle)
  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const existingItem = prev.find((p) => p.id === item.id);
      if (existingItem) {
        // जर आधीच असेल, तर काढून टाका (Remove)
        return prev.filter((p) => p.id !== item.id);
      } else {
        // जर नसेल, तर ऍड करा (Add)
        return [...prev, item];
      }
    });
  };

  // ३. हार्ट आयकॉन लाल दाखवायचा की रिकामा, हे ठरवण्यासाठी
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