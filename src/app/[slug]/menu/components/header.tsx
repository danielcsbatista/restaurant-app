"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface IRestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}

const RestaurantHeader = ({ restaurant }: IRestaurantHeaderProps) => {
  const router = useRouter();
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
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default RestaurantHeader;
