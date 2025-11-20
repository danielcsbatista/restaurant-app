import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helper/format-currency";

import { CartContext, ICartProducts } from "../contexts/cart";

interface CartItemsProps {
  product: ICartProducts;
}

const CartProductsItems = ({ product }: CartItemsProps) => {
  const { manageQuantity } = React.useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 rounded-xl bg-gray-100">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>

          <div className="flex items-center gap-1 text-center">
            <Button
              className="h-7 w-7 rounded-lg"
              variant="outline"
              onClick={() => manageQuantity(product.id, false)}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-7 text-xs">{product.quantity}</p>
            <Button
              className="h-7 w-7 rounded-lg"
              variant="destructive"
              onClick={() => manageQuantity(product.id, true)}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>

      <Button
        className="h-7 w-7 rounded-lg"
        variant="outline"
        onClick={() => {}}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartProductsItems;
