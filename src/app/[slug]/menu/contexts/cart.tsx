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
}

export const CartContext = React.createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = React.useState<ICartProducts[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <CartContext.Provider value={{ isOpen, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};
