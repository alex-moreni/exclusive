"use server"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/prisma"
import { getServerSession } from "next-auth"

interface DeleteProductCartProps {
  productId: string
}

export const deleteProduct = async ({ productId }: DeleteProductCartProps) => {
  const user = await getServerSession(authOptions)

  if (!user) {
    throw new Error("Nenhum usuário encontrado.")
  }

  const item = await db.shoppingCart.findFirst({
    where: {
      userId: (user.user as any).id,
      productId,
    },
  })

  if (!item) {
    throw new Error("Item não encontrado no carrinho.")
  }

  if (item.quantity <= 1) {
    await db.shoppingCart.delete({
      where: {
        id: item.id,
      },
    })
  } else {
    await db.shoppingCart.update({
      where: {
        id: item.id,
      },
      data: {
        quantity: item.quantity - 1,
      },
    })
  }

  return db.shoppingCart.findMany({
    where: {
      userId: (user.user as any).id,
    },
  })
}
