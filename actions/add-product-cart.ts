"use server"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/prisma"
import { getServerSession } from "next-auth"

interface AddProductCartProps {
  productId: string
}

export const addProductCart = async (params: AddProductCartProps) => {
  const user = await getServerSession(authOptions)

  if (!user) {
    throw new Error("Nenhum usuário encontrado.")
  }

  const userExists = await db.user.findUnique({
    where: { id: (user.user as any).id },
  })
  const productExists = await db.product.findUnique({
    where: { id: params.productId },
  })

  if (!userExists) {
    throw new Error("Usuário não encontrado.")
  }
  if (!productExists) {
    throw new Error("Produto não encontrado.")
  }

  const existingCart = await db.shoppingCart.findFirst({
    where: {
      userId: (user.user as any).id,
      productId: params.productId,
    },
  })

  if (existingCart) {
    await db.shoppingCart.update({
      where: { id: existingCart.id },
      data: { quantity: existingCart.quantity + 1 },
    })
  } else {
    await db.shoppingCart.create({
      data: {
        userId: (user.user as any).id,
        productId: params.productId,
        quantity: 1,
      },
    })
  }
}
