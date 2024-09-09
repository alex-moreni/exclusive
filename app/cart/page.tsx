"use client"

import { getProducts } from "@/actions/get-product-cart"
import CardCart from "@/components/card-shopping-cart"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Product {
  product: {
    id: string
    name: string
    price: number
    description: string
    image: string
    category: string
    size: string[]
    color: string | null
  }
  id: string
  userId: string
  productId: string
  quantity: number
}

const Cart = () => {
  const [items, setItems] = useState<Product[]>([])
  const { data } = useSession()

  useEffect(() => {
    if (!data?.user) {
      return
    }

    const fetch = async () => {
      const products = await getProducts({
        //@ts-ignore
        userId: data?.user.id,
      })
      setItems(products)
    }

    fetch()
  }, [data?.user])

  return (
    <main className="mx-auto min-h-[75%] p-6">
      <h1 className="mb-4 text-2xl font-bold">Carrinho de Compras</h1>

      {items.length === 0 ? (
        <div className="space-y-6 text-center">
          <h1 className="text-center text-lg">
            Você ainda não tem nenhum produto no carrinho. Clique no botão
            abaixo para adicionar alguns produtos.
          </h1>
          <Button asChild>
            <Link href="/products">Ver Produtos</Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-10 rounded-lg bg-white p-6 shadow-md">
            {items.map((product) => (
              <CardCart item={product} key={product.id} />
            ))}
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
              <h1>
                Preço Total:{" "}
                <span className="font-bold">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(
                    items.reduce((sum, item) => {
                      return item.quantity > 0
                        ? sum + item.product.price * item.quantity
                        : sum
                    }, 0),
                  )}
                </span>
              </h1>
              <Button asChild className="bg-blue-500">
                <Link href="/checkout">Finalizar Compra</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart
