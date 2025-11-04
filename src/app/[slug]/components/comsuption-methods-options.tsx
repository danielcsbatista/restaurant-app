import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IParams {
  imageSrc: string;
  altText: string;
  buttonText: string;
  option: ConsumptionMethod;
  slug: string;
}

const ConsumptionMethodsOptions = ({
  imageSrc,
  altText,
  buttonText,
  option,
  slug,
}: IParams) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image src={imageSrc} alt={altText} className="object-contain" fill />
        </div>
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodsOptions;
