import Card from "@/components/card"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import Link from "next/link"

interface ProductProps {
  searchParams: {
    title?: string
  }
}

const Products = async ({ searchParams }: ProductProps) => {
  const products = searchParams.title
    ? await db.product.findMany({
        where: {
          name: {
            contains: searchParams.title,
            mode: "insensitive",
          },
        },
      })
    : await db.product.findMany()

  const filteredProducts = (category: string) => {
    return products.filter((product) => product.category === category)
  }

  return (
    <div className="min-h-[75%]">
      <section className="p-8">
        {searchParams.title ? (
          <div>
            {products.length === 0 ? (
              <header>
                <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
                  Nenhum resultado encontrado
                </span>
              </header>
            ) : (
              <>
                <header>
                  <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
                    Resultados para &quot;
                    {searchParams?.title}
                    &quot;
                  </span>
                </header>
                <div className="flex flex-wrap gap-4 sm:justify-center">
                  {products.length > 0 &&
                    products.map((product) => (
                      <Card key={product.id} product={product} />
                    ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div>
              <header>
                <span className="border-l-[13px] border-solid border-red-500 pl-2 text-2xl font-semibold text-[#DB4444]">
                  Celulares
                </span>
              </header>
              <div className="lg:grid-ro mt-4 flex items-center gap-6 overflow-x-auto lg:grid-cols-2 lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden">
                {filteredProducts("smartphones")
                  .slice(0, 8)
                  .map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      isDiscount={false}
                    />
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
                {filteredProducts("computers")
                  .slice(0, 8)
                  .map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      isDiscount={false}
                    />
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
                {filteredProducts("watches")
                  .slice(0, 8)
                  .map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      isDiscount={false}
                    />
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
                    <Card
                      key={product.id}
                      product={product}
                      isDiscount={false}
                    />
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
                {filteredProducts("headphones")
                  .slice(0, 8)
                  .map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      isDiscount={false}
                    />
                  ))}
                <Button className="m-auto" asChild>
                  <Link href={"/products/headphones"}>Ver mais</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default Products
