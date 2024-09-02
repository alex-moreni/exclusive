import {
  Camera,
  Headset,
  HomeIcon,
  InfoIcon,
  LaptopMinimal,
  Smartphone,
  Phone,
  Watch,
  Heart,
  ShoppingCart,
  UserRound,
} from "lucide-react"

import { Avatar, AvatarImage } from "./ui/avatar"
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import ItemSidebar from "./item-sidebar"

const MobileSidebar = () => {
  return (
    <SheetContent className="overflow-y-auto bg-gray-900 text-white">
      <SheetHeader>
        <SheetTitle className="text-left font-bold text-white">
          Exclusive
        </SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFz5NfjSNl93oKMOPk-x28GZuyva2UF-ZFQ&s"
            />
          </Avatar>

          <div>
            <p className="font-bold">Fulano</p>
            <p className="text-xs">Silva</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <ItemSidebar title="início" link="/" Icon={HomeIcon} />
        <ItemSidebar title="meus favoritos" link="/favorites" Icon={Heart} />
        <ItemSidebar
          title="carrinho de compras"
          link="/cart"
          Icon={ShoppingCart}
        />
        <ItemSidebar title="minha conta" link="/account" Icon={UserRound} />
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <h2>Produtos</h2>

        <ItemSidebar
          title="celulares"
          link="/products/smartphones"
          Icon={Smartphone}
        />
        <ItemSidebar
          title="computadores"
          link="/products/computers"
          Icon={LaptopMinimal}
        />
        <ItemSidebar title="relógios" link="/products/watches" Icon={Watch} />
        <ItemSidebar title="cameras" link="/products/cameras" Icon={Camera} />
        <ItemSidebar title="fones" link="/products/headphones" Icon={Headset} />
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <ItemSidebar title="sobre nós" link="/about" Icon={InfoIcon} />
        <ItemSidebar title="Contato" link="/contact" Icon={Phone} />
      </div>
    </SheetContent>
  )
}

export default MobileSidebar
