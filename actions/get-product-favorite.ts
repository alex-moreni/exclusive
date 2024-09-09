"use server"

import { db } from "@/lib/prisma"

interface GetFavoritesProductProps {
  userId: string
}

export const getFavorites = ({ userId }: GetFavoritesProductProps) => {
  return db.favorites.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  })
}
