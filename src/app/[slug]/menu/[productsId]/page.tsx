import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/product-header";
import ProductsDetails from "./components/products-details";

interface ProductsPageProps {
  params: Promise<{
    slug: string;
    productsId: string;
  }>;
}

const ProductsPage = async ({ params }: ProductsPageProps) => {
  const { productsId, slug } = await params;

  const product = await db.product.findUnique({
    where: {
      id: productsId,
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
          slug: true,
        },
      },
    },
  });

  if (
    !product ||
    product.restaurant.slug.toLocaleLowerCase() !== slug.toLocaleLowerCase()
  ) {
    return notFound();
  }
  return (
    <div className="flex h-full flex-col">
      <ProductHeader products={product} />
      <ProductsDetails products={product} />
    </div>
  );
};

export default ProductsPage;
