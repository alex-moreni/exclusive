"use server"

import { db } from "@/lib/prisma"

interface CheckoutProps {
  userId: string
}

export const checkout = ({ userId }: CheckoutProps) => {
  return db.shoppingCart.deleteMany({
    where: {
      userId,
    },
  })
}
