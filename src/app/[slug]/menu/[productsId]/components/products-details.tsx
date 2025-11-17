"use client";

import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helper/format-currency";

import CartSheet from "../../components/cart-sheet";
import { CartContext } from "../../contexts/cart";

interface IProductsDetailsProps {
  products: Prisma.ProductGetPayload<{
    include: { restaurant: { select: { name: true; avatarImageUrl: true } } };
  }>;
}
const ProductsDetails = ({ products }: IProductsDetailsProps) => {
  const {
    isOpen,
    products: cartProducts,
    toggleCart,
  } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(0);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
  const handleAddToCart = () => {
    // Logic to add product to cart
    toggleCart();
  };

  return (
    <>
      <div className="relative z-50 mt-[-1.5rem] flex flex-auto flex-col overflow-hidden rounded-t-3xl p-5">
        <div className="flex-auto overflow-hidden p-2">
          <div className="flex items-center gap-1.5">
            <Image
              src={products.restaurant.avatarImageUrl}
              alt={products.restaurant.name}
              width={16}
              height={16}
              className="rounded-full"
            />
            <p className="text-xs text-muted-foreground">
              {products.restaurant.name}
            </p>
          </div>

          <h2 className="mt-1 text-xl font-semibold">{products.name}</h2>

          <div className="mt-3 flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              {formatCurrency(products.price)}
            </h3>
            <div className="flex items-center gap-3 text-center">
              <Button
                variant="outline"
                className="h-8 w-8 rounded-xl"
                onClick={() => handleQuantityChange(Math.max(0, quantity - 1))}
              >
                <ChevronLeftIcon />
              </Button>
              <p className="w-4">{quantity}</p>
              <Button
                variant="destructive"
                className="h-8 w-8 rounded-xl"
                onClick={() => handleQuantityChange(Math.max(0, quantity + 1))}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-full">
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                {products.description}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="5 flex items-center gap-1">
                <h4 className="font-semibold">Ingredientes</h4>
              </div>
              <ul className="text-muted-fo list-disc px-5 text-sm text-muted-foreground">
                {products.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>

        <Button className="w-full rounded-full" onClick={handleAddToCart}>
          Adicionar à sacola
        </Button>
      </div>

      <CartSheet />
    </>
  );
};

export default ProductsDetails;
