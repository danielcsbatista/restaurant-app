"use client";

import { MenuCategory, Prisma } from "@prisma/client";
import { Scrollbar } from "@radix-ui/react-scroll-area";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: { MenuCategory: { include: { Product: true } } };
  }>;
}

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(restaurant.MenuCategory[0] || null);
    
    const handleCategorySelect = (category: MenuCategory) => {
      setSelectedCategory(category);
    }

    const getCategoryButtonVariant = (category: MenuCategory) => selectedCategory?.id === category.id ? "default" : "secondary"
   
    return (
    <div className="relative z-50 rounded-t-3xl border bg-white mt-[-1.5rem]">
    <div className="p-5">
        <div className="flex items-center gap-3">
            <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={45}
            height={45}
            />
            <div>
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
            <p className="text-xs opacity-55">{restaurant.description}</p>
            </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
            <ClockIcon size="12" />
            <p>Aberto!</p>
        </div>
      </div>
      {selectedCategory && (
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
            {restaurant.MenuCategory.map((category) => (
              <Button onClick={() => handleCategorySelect(category)} key={category.id} variant={getCategoryButtonVariant(category)} size="sm">
                {category.name}
              </Button>
            ))}
        </div>
        <Scrollbar orientation="horizontal" />
      </ScrollArea>
      )}
    </div>
  );
};

export default RestaurantCategories;
