"use client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/*const getStatusLabel = (status: OrderStatus) => {
  if (status === "FINISHED") return "Finalizado";
  if (status === "IN_PREPARATION") return "Em preparo";
  if (status === "PENDING") return "Pendente";
  if (status === "PAYMENT_CONFIRMED") return "Pagamento confirmado";
  if (status === "PAYMENT_FAILED") return "Pagamento falhou";
  return "";
};*/

const OrderList = () => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  return (
    <div className="space-y-6 p-6">
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <div className="flex items-center gap-3">
        <ScrollTextIcon />
        <h2 className="text-lg font-semibold">Meus Pedidos</h2>
      </div>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="w-fit rounded-full px-2 py-1 text-xs font-semibold text-white bg-green-500 text-white bg-gray-200 text-gray-500"></div>
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-5">
              <Image
                src="order.restaurant.avatarImageUrl"
                alt="order.restaurant.name"
                fill
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">
                1
              </div>
              <p className="text-sm">Nome</p>
            </div>
          </div>
          <p className="text-sm font-medium">total</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderList;
