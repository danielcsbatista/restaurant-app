import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>

          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} x {product.quantity}
              </li>
            ))}
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
