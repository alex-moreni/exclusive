import Card from "@/components/card"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import Link from "next/link"

const Products = async () => {
  const products = await db.product.findMany({})

  const filteredProducts = (category: string) => {
    return products.filter((product) => product.category === category)
  }

  return (
    <div className="min-h-[75%]">
      <section className="p-8">
        <div>
          <header>
            <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
              Celulares
            </span>
          </header>
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {filteredProducts("celulares")
              .slice(0, 8)
              .map((product) => (
                <Card key={product.id} product={product} isDiscount={false} />
              ))}
            <Button className="m-auto" asChild>
              <Link href={"/products/smartphones"}>Ver mais</Link>
            </Button>
          </div>
        </div>
        <div>
          <header>
            <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
              Computadores
            </span>
          </header>
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {filteredProducts("computadores")
              .slice(0, 8)
              .map((product) => (
                <Card key={product.id} product={product} isDiscount={false} />
              ))}
            <Button className="m-auto" asChild>
              <Link href={"/products/computers"}>Ver mais</Link>
            </Button>
          </div>
        </div>
        <div>
          <header>
            <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
              Relógios
            </span>
          </header>
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {filteredProducts("smartwatch")
              .slice(0, 8)
              .map((product) => (
                <Card key={product.id} product={product} isDiscount={false} />
              ))}
            <Button className="m-auto" asChild>
              <Link href={"/products/watches"}>Ver mais</Link>
            </Button>
          </div>
        </div>
        <div>
          <header>
            <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
              Cameras
            </span>
          </header>
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {filteredProducts("cameras")
              .slice(0, 8)
              .map((product) => (
                <Card key={product.id} product={product} isDiscount={false} />
              ))}
            <Button className="m-auto" asChild>
              <Link href={"/products/cameras"}>Ver mais</Link>
            </Button>
          </div>
        </div>
        <div>
          <header>
            <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
              Fones
            </span>
          </header>
          <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
            {filteredProducts("fones")
              .slice(0, 8)
              .map((product) => (
                <Card key={product.id} product={product} isDiscount={false} />
              ))}
            <Button className="m-auto" asChild>
              <Link href={"/products/headphones"}>Ver mais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
