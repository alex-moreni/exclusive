import ProductContainer from "@/components/product-container"
import { db } from "@/lib/prisma"
import { redirect } from "next/navigation"

interface ProductIDProps {
  params: {
    productId: string
  }
}

const ProductIDPage = async ({ params: { productId } }: ProductIDProps) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  })

  if (!product) return redirect("/products")

  return <ProductContainer product={product} />
}

export default ProductIDPage
