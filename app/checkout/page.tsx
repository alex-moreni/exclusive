"use client"

import { checkout } from "@/actions/checkout"
import { getProducts } from "@/actions/get-product-cart"
import { useSession } from "next-auth/react"
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
  quantity: number
}

const Checkout = () => {
  const [items, setItems] = useState<Product[]>([])
  const { data } = useSession()

  const checkoutProducts = async () => {
    await checkout({ userId: (data?.user as any).id })
  }

  useEffect(() => {
    if (!data?.user) {
      return
    }

    const fetch = async () => {
      const products = await getProducts({
        //@ts-ignore
        userId: data?.user.id,
      })
      setItems(products)
    }

    fetch()
  }, [data?.user])

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Finalizar Compra</h1>
      <div className="rounded-sm bg-black p-5 text-white">
        Para sua segurança, evite inserir dados de cartão ou informações
        pessoais verdadeiras, pois este site é apenas um mostruário
        profissional.
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Endereço de Entrega</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">
                Endereço
              </label>
              <input
                type="text"
                id="address"
                className="w-full rounded border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700">
                Cidade
              </label>
              <input
                type="text"
                id="city"
                className="w-full rounded border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="zip" className="block text-gray-700">
                CEP
              </label>
              <input
                type="text"
                id="zip"
                className="w-full rounded border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700">
                País
              </label>
              <input
                type="text"
                id="country"
                className="w-full rounded border p-2"
              />
            </div>
          </form>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Método de Pagamento</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-700">
                Número do Cartão
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full rounded border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-gray-700">
                Data de Validade
              </label>
              <input
                type="text"
                id="expiryDate"
                className="w-full rounded border p-2"
                placeholder="MM/AA"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full rounded border p-2"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Resumo do Pedido</h2>
        <div className="border-t border-gray-300 pt-4">
          <div className="mb-2 flex flex-col">
            {items.map((item) => (
              <div className="flex justify-between" key={item.id}>
                <span className="text-gray-700">{`${item.quantity} x ${item.product.name}`}</span>
                <span className="semibold">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-2">
            <span className="text-gray-700">Total</span>
            <span className="text-lg font-semibold">
              {" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                items.reduce((sum, item) => {
                  return item.quantity > 0
                    ? sum + item.product.price * item.quantity
                    : sum
                }, 0),
              )}
            </span>
          </div>
        </div>
        <button
          className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          onClick={() => {
            window.alert("Compra realizada com sucesso!")
            checkoutProducts()
            window.location.href = "/"
          }}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  )
}

export default Checkout
