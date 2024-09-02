import Card from "@/components/card"
import CardCategory from "@/components/card-category"
import SlideImage from "@/components/slide-image"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import Link from "next/link"

import {
  Camera,
  HeadphonesIcon,
  Headset,
  LaptopMinimal,
  ShieldCheckIcon,
  Smartphone,
  TruckIcon,
  Watch,
} from "lucide-react"

export default async function Home() {
  const products = await db.product.findMany({})

  return (
    <main className="p-10">
      <section className="flex items-start justify-between">
        <div className="hidden flex-col gap-2 lg:flex">
          <h1 className="text-2xl">Categorias</h1>
          <Link href="/products/smartphones">Celulares</Link>
          <Link href="/products/computers">Computadores</Link>
          <Link href="/products/watches">Relógios</Link>
          <Link href="/products/cameras">Cameras</Link>
          <Link href="/products/headphones">Fones</Link>
        </div>
        <div className="w-full">
          <SlideImage />
        </div>
      </section>
      <section className="mt-8">
        <header>
          <span className="text-md border-l-[13px] border-solid border-red-500 pl-2 font-semibold text-[#DB4444]">
            Hoje
          </span>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Promoções</h2>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <span className="text-sm">Horas</span>
                <p className="text-xl font-bold">23</p>
              </div>
              <p className="font-bold text-red-500">:</p>
              <div className="flex flex-col items-center">
                <span className="text-sm">Minutos</span>
                <p className="text-xl font-bold">48</p>
              </div>
              <p className="font-bold text-red-500">:</p>
              <div className="flex flex-col items-center">
                <span className="text-sm">Horas</span>
                <p className="text-xl font-bold">36</p>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-6">
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {products.slice(0, 8).map((product) => (
              <Card key={product.id} product={product} isDiscount={true} />
            ))}
          </div>
          <Button className="m-auto" asChild>
            <Link href={"/products"}>Ver mais</Link>
          </Button>
        </div>
      </section>
      <section className="mt-8">
        <header>
          <span className="text-md border-l-[13px] border-solid border-red-500 pl-2 font-semibold text-[#DB4444]">
            Categorias
          </span>
          <h2 className="mt-3 text-2xl font-bold">Navegar por categoria</h2>
        </header>

        <div className="mt-4 flex items-center gap-3 overflow-x-auto lg:justify-center [&::-webkit-scrollbar]:hidden">
          {" "}
          <CardCategory
            title="Celulares"
            Icon={Smartphone}
            link="/products/smartphones"
          />
          <CardCategory
            title="Computadores"
            Icon={LaptopMinimal}
            link="/products/computers"
          />
          <CardCategory
            title="Relógios"
            Icon={Watch}
            link="/products/watches"
          />
          <CardCategory
            title="Cameras"
            Icon={Camera}
            link="/products/cameras"
          />
          <CardCategory
            title="Fones"
            Icon={Headset}
            link="/products/headphones"
          />
        </div>
      </section>
      <section className="mt-8">
        <header>
          <span className="text-md border-l-[13px] border-solid border-red-500 pl-2 font-semibold text-[#DB4444]">
            Este mês
          </span>
          <h2 className="mt-3 text-2xl font-bold">Produtos mais vendidos</h2>
        </header>

        <div className="flex flex-col gap-6">
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {products.slice(9, 13).map((product) => (
              <Card key={product.id} product={product} isDiscount={false} />
            ))}
          </div>
          <Button className="m-auto" asChild>
            <Link href={"/products"}>Ver mais</Link>
          </Button>
        </div>
      </section>
      <section className="mt-8">
        <header>
          <span className="text-md border-l-[13px] border-solid border-red-500 pl-2 font-semibold text-[#DB4444]">
            Outros produtos
          </span>
          <h2 className="text-2xl font-bold">Explore outros produtos</h2>
        </header>
        <div className="flex flex-col gap-6">
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {products.slice(14, 22).map((product) => (
              <Card key={product.id} product={product} isDiscount={false} />
            ))}
          </div>
          <Button className="m-auto" asChild>
            <Link href={"/products"}>Ver mais</Link>
          </Button>
        </div>
      </section>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-300 p-2">
            <div className="rounded-full bg-black p-2">
              <TruckIcon size={40} color="white" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="font-bold">ENTREGA GRATUITA E RÁPIDA</h1>
            <p className="text-sm">
              Entrega gratuita para todos os pedidos acima de R$ 100
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-300 p-2">
            <div className="rounded-full bg-black p-2">
              <HeadphonesIcon size={40} color="white" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold">ATENDIMENTO AO CLIENTE</h1>
            <p className="text-sm">
              Suporte ao cliente amigável 24 horas por dia, 7 dias por semana
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-300 p-2">
            <div className="rounded-full bg-black p-2">
              <ShieldCheckIcon size={40} color="white" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold">GARANTIA DE DEVOLUÇÃO DO DINHEIRO</h1>
            <p className="text-sm">Devolvemos o dinheiro em 30 dias</p>
          </div>
        </div>
      </div>
    </main>
  )
}
