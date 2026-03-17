
// import React, { useState, createContext, useContext } from "react";

// interface ICartContext {
//     product: any[];
//     addToCart: (cart: any) => void;
// }

// const CartContext = createContext<ICartContext>({
//     product: [], 
//     addToCart: () => {},
// });


// interface ICartContextProvider {
//     children: React.ReactNode; 
// }

// export const CartContextProvider = ({ children }: ICartContextProvider) => {
//     const [product, setProduct] = useState<any[]>([]); 

//     const addToCart = (cart: any) => {
//         setProduct((prevState: any[]) => [...prevState, cart]);
//     };

//     return (
//         <CartContext.Provider value={{ product, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }; 

// export const useCartContext = () => {
//     const context = useContext(CartContext);
//     return context;
// };

//..............

import { createContext, useContext, useState, ReactNode } from "react";

// कार्टमधील प्रॉडक्ट कसा दिसेल हे ठरवणे
interface CartItem {
  id: number;
  name: string;
  price: string;
  img: string;
  quantity: number;
}

// Context मध्ये कोणकोणत्या गोष्टी असतील
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // कार्टमध्ये प्रॉडक्ट ऍड करण्याचे फंक्शन
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // प्रॉडक्ट आधीपासून कार्टमध्ये आहे का ते चेक करणे
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        // जर आधीच असेल, तर फक्त त्याची quantity (संख्या) वाढवणे
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      // जर नसेल, तर नवीन प्रॉडक्ट कार्टमध्ये टाकणे
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // कार्टमधून प्रॉडक्ट काढण्याचे फंक्शन
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// हे कस्टम हुक (Custom Hook) आपण इतर फाईल्समध्ये वापरणार
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};