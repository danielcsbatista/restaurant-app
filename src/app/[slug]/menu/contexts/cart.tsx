"use client";

import { Product } from "@prisma/client";
import React from "react";

export interface ICartProducts
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

interface ICartContext {
  isOpen: boolean;
  products: ICartProducts[];
  toggleCart: () => void;
  addToCart: (product: ICartProducts) => void;
  manageQuantity: (productId: string, increase: boolean) => void;
}

export const CartContext = React.createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addToCart: () => {},
  manageQuantity: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = React.useState<ICartProducts[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const existingProduct = (productId: string) =>
    products.some((prevProduct) => prevProduct.id === productId);

  const addToCart = (product: ICartProducts) => {
    if (!existingProduct(product.id)) {
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

  const manageQuantity = (productId: string, increase: boolean) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === productId) {
          if (product.quantity === 1 && increase === false) {
            return product;
          }

          return {
            ...product,
            quantity: increase ? product.quantity + 1 : product.quantity - 1,
          };
        }
        return product;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{ isOpen, products, toggleCart, addToCart, manageQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
