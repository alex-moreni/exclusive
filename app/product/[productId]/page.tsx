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

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md md:flex md:items-center">
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-contain"
        />
      </div>

      <div className="p-6 md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <p className="mt-2 text-xl text-gray-600">
          {" "}
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">Tamanho:</h2>
          <p className="text-gray-600">{product.size}</p>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-semibold text-gray-800">Cor:</h2>
          <p className="text-gray-600">{product.color}</p>
        </div>
        <div className="mt-4">
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductIDPage
