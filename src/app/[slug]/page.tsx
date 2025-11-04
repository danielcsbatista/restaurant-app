import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodsOptions from "./components/comsuption-methods-options";
interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) return notFound();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 pt-6">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-bold">Seja bem vindo!!</h3>
        <p className="opacity-55">
          Escolha como você prefere aproveitar sua refeição. Estamos oferecendo
          praticidade e sabor em cada detalhe.
        </p>
      </div>

      <div className="grid grid-cols-2 pt-14 gap-4">
        <ConsumptionMethodsOptions
          imageSrc="/dine-in.png"
          altText="Para comer aqui"
          buttonText="Para comer aqui"
          option="DINE_IN"
          slug={slug}
        />

        <ConsumptionMethodsOptions
          imageSrc="/take-away.png"
          altText="Para levar"
          buttonText="Para levar"
          option="TAKE_AWAY"
          slug={slug}
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
