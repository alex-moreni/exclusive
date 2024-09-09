"use server"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/prisma"
import { getServerSession } from "next-auth"

interface DeleteProductFavoriteProps {
  productId: string
}

export const deleteFavorites = async ({
  productId,
}: DeleteProductFavoriteProps) => {
  const user = await getServerSession(authOptions)

  if (!user) {
    throw new Error("Nenhum usuário encontrado.")
  }

  const item = await db.favorites.findFirst({
    where: {
      userId: (user.user as any).id,
      productId,
    },
  })

  if (!item) {
    throw new Error("Item não encontrado no favoritos.")
  }

  await db.favorites.delete({
    where: {
      id: item.id,
    },
  })
}
