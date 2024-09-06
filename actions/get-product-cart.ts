"use server"

import { db } from "@/lib/prisma"

interface getProductsCartProps {
  userId: string
}

export const getProducts = ({ userId }: getProductsCartProps) => {
  return db.shoppingCart.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  })
}
