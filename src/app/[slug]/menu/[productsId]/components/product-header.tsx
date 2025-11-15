"use client";
import { Product } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface IProductHeaderProps {
  products: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({ products }: IProductHeaderProps) => {
  const router = useRouter();
  const { imageUrl, name } = products;
  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant={"secondary"}
        size="icon"
        className="absolute top-4 left-4 rounded-full z-50"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        variant={"secondary"}
        size="icon"
        className="absolute top-4 right-4 rounded-full z-50"
      >
        <ScrollTextIcon />
      </Button>
      <Image src={imageUrl} alt={name} fill className="object-cover" />
    </div>
  );
};

export default ProductHeader;
