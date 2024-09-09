"use client"

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
  LogInIcon,
} from "lucide-react"

import { Avatar, AvatarImage } from "./ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import SignInDialog from "./sign-in-dialog"
import ItemSidebar from "./item-sidebar"
import { signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

const MobileSidebar = () => {
  const { data } = useSession()

  const handleLogoutClik = () => signOut()

  return (
    <SheetContent className="overflow-y-auto bg-gray-900 text-white">
      <SheetHeader>
        <SheetTitle className="text-left font-bold text-white">
          Exclusive
        </SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                className="object-cover"
                src={data.user?.image ?? ""}
              />
            </Avatar>
            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <div>
              <h2 className="text-lg font-bold">Olá, faça seu login!</h2>
              <p className="text-sm">Para finalizar suas compras!</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] bg-black">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <ItemSidebar title="início" link="/" Icon={HomeIcon} />
        <ItemSidebar title="meus favoritos" link="/favorites" Icon={Heart} />
        <ItemSidebar
          title="carrinho de compras"
          link="/cart"
          Icon={ShoppingCart}
        />
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

      {data?.user && (
        <div className="flex flex-col gap-2 border-b border-solid py-5">
          <Button onClick={handleLogoutClik}>Sair</Button>
        </div>
      )}
    </SheetContent>
  )
}

export default MobileSidebar
