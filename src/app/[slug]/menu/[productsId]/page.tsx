import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/product-header";

interface ProductsPageProps {
  params: Promise<{
    slug: string;
    productsId: string;
  }>;
}

const ProductsPage = async ({ params }: ProductsPageProps) => {
  const { slug, productsId } = await params;

  const product = await db.product.findUnique({
    where: {
      id: productsId,
    },
  });

  if (!product) {
    return notFound();
  }
  return <ProductHeader products={product} />;
};

export default ProductsPage;
