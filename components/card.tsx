"use client"

import { EyeIcon, Heart, Star } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { addProductCart } from "@/actions/add-product-cart"
import { toast } from "sonner"

interface CardProps {
  product: {
    id: string
    name: string
    price: number
    description: string
    image: string
    category: string
    size?: string[]
    color?: string | null
  }
  isDiscount: boolean
}

const Card = ({ product, isDiscount }: CardProps) => {
  const [ratings, setRatings] = useState<number>(0)

  const addCart = async () => {
    try {
      await addProductCart({ productId: product.id })
      toast.success("Produto adicionado ao carrinho")
    } catch (error) {
      console.log(error)
      toast.error("Faça login para adicionar items no carrinho.")
    }
  }

  useEffect(() => {
    setRatings(Math.floor(Math.random() * 1000))
  }, [])

  return (
    <div className="group relative h-[350px] w-[270px] cursor-pointer rounded-lg shadow-xl">
      <div className="absolute right-4 top-4 flex-col space-y-1">
        <Button variant="outline" className="h-[40px] w-[40px] rounded-full">
          <Link href={`/product/${product.id}`}>
            {" "}
            <EyeIcon size={20} />
          </Link>
        </Button>
        <br />
        <Button
          variant="outline"
          className="z-10 h-[40px] w-[40px] rounded-full"
        >
          <Link href={`/product/${1}`}>
            {" "}
            <Heart size={20} />
          </Link>
        </Button>
      </div>
      {isDiscount && (
        <h2 className="absolute left-4 top-4 rounded-lg bg-red-500 p-1 font-bold text-white">
          -50%
        </h2>
      )}

      <img
        src={product.image}
        alt=""
        className="h-[230px] w-full object-contain"
      />

      <div className="space-y-1 p-4">
        <h5 className="font-semi-bold truncate text-lg">{product.name}</h5>
        <p className="flex items-center gap-2 font-bold text-red-500">
          {isDiscount ? (
            <span>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price - product.price * 0.5)}
            </span>
          ) : (
            <span>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </span>
          )}

          <span className="font-normal text-gray-500 line-through">
            {isDiscount && (
              <span>
                {" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </span>
            )}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <Star size={17} color="yellow" />
          <Star size={17} color="yellow" />
          <Star size={17} color="yellow" />
          <Star size={17} color="yellow" />
          <Star size={17} color="yellow" />
          <span className="truncate text-xs text-gray-600">
            {ratings} avaliações
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 mt-20 flex items-center justify-center group-hover:pointer-events-auto">
        <Button
          onClick={addCart}
          className="w-full bg-black px-4 py-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  )
}

export default Card
