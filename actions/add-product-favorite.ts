"use server"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/prisma"
import { getServerSession } from "next-auth"

interface AddProductFavoriteProps {
  productId: string
}

export const addProductFavorite = async (params: AddProductFavoriteProps) => {
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

  await db.favorites.create({
    data: {
      userId: (user.user as any).id,
      productId: params.productId,
    },
  })
}
