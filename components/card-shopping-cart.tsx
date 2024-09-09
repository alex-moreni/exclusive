"use client"

import { addProductCart } from "@/actions/add-product-cart"
import { deleteProduct } from "@/actions/delete-product.cart"

const CardCart = ({ item }: any) => {
  const product = item.product

  const addCart = async () => {
    try {
      await addProductCart({ productId: product.id })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItem = async () => {
    try {
      deleteProduct({ productId: product.id })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-[100px] border-b border-solid">
      <div className="flex items-start">
        <img
          src={product.image}
          alt={product.name}
          className="h-24 w-24 object-contain"
        />
        <div className="ml-3 w-full flex-col px-10">
          <div className="flex justify-between">
            <h1 className="truncate text-sm font-bold sm:text-lg">
              {product.name}
            </h1>
            <p className="mr-3 hidden font-bold sm:block">Quantidade</p>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between">
            <div className="flex gap-3">
              <div className="text-center">
                <h2 className="font-bold">Valor Total</h2>
                <h3>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price * item.quantity)}
                </h3>
              </div>
              <div className="hidden text-center sm:block">
                <h2 className="font-bold">Preço Unitário</h2>
                <h3>
                  {" "}
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </h3>
              </div>
            </div>

            <div className="flex items-center py-4">
              <button
                onClick={() => {
                  deleteItem()
                  window.location.reload()
                }}
                className="border border-gray-300 px-2"
              >
                -
              </button>
              <input
                type="text"
                value={item.quantity}
                className="mx-2 w-12 rounded border border-gray-300 text-center"
                readOnly
              />
              <button
                onClick={() => {
                  addCart()
                  window.location.reload()
                }}
                className="border border-gray-300 px-2"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCart
