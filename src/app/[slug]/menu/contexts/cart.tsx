"use client";

import { Product } from "@prisma/client";
import React from "react";

interface ICartProducts extends Product {
  quantity: number;
}

interface ICartContext {
  isOpen: boolean;
  products: ICartProducts[];
  toggleCart: () => void;
  addToCart: (product: ICartProducts) => void;
}

export const CartContext = React.createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addToCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = React.useState<ICartProducts[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const addToCart = (product: ICartProducts) => {
    const existingProduct = products.some(
      (prevProduct) => prevProduct.id === product.id
    );
    if (!existingProduct) {
      setProducts((prev) => [...prev, product]);
    }

    setProducts((prev) => {
      return prev.map((prevProduct) =>
        prevProduct.id === product.id
          ? {
              ...prevProduct,
              quantity: prevProduct.quantity + product.quantity,
            }
          : prevProduct
      );
    });
  };
  return (
    <CartContext.Provider value={{ isOpen, products, toggleCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
