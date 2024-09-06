import Card from "@/components/card"
import { db } from "@/lib/prisma"
import { redirect } from "next/navigation"

interface CategoryProps {
  params: {
    category: string
  }
}

const Category = async ({ params: { category } }: CategoryProps) => {
  const products = await db.product.findMany({
    where: {
      category,
    },
  })

  if (products.length === 0) return redirect("/products")

  return (
    <div className="min-h-[75%]">
      <section className="p-8">
        <header className="flex justify-between">
          <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold capitalize text-[#DB4444]">
            {category}
          </span>
          <p>
            Quantidade: <span className="font-bold">{products.length}</span>
          </p>
        </header>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} isDiscount={false} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Category
