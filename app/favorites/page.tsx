"use client"

import { getFavorites } from "@/actions/get-product-favorite"
import Card from "@/components/card"
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
}

const Favorites = () => {
  const [items, setItems] = useState<Product[]>([])
  const { data } = useSession()

  useEffect(() => {
    if (!data?.user) {
      return
    }

    const fetch = async () => {
      const products = await getFavorites({
        //@ts-ignore
        userId: data?.user.id,
      })
      setItems(products)
    }

    fetch()
  }, [data?.user])

  return (
    <main className="mx-auto min-h-[75%] p-6">
      <h1 className="mb-4 text-2xl font-bold">Favoritos</h1>

      {items.length === 0 ? (
        <div className="space-y-6 text-center">
          <h1 className="text-center text-lg">
            Você ainda não tem nenhum produto salvo nos favoritos. Clique no
            botão abaixo para adicionar alguns produtos.
          </h1>
          <Button asChild>
            <Link href="/products">Ver Produtos</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3 rounded-lg bg-white p-6 shadow-md sm:justify-start">
          {items.map((product) => (
            <Card
              product={product.product}
              key={product.id}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Favorites
