"use client"

import Link from "next/link"
import { Input } from "./ui/input"
import {
  Heart,
  LogInIcon,
  MenuIcon,
  ShoppingCart,
  UserRound,
} from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import MobileSidebar from "./mobile-sidebar"
import { signOut, useSession } from "next-auth/react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import SignInDialog from "./sign-in-dialog"
import { Avatar, AvatarImage } from "./ui/avatar"

const Header = () => {
  const { data } = useSession()

  const handleLogoutClik = () => signOut()

  return (
    <div>
      <div>
        <h3 className="bg-black p-2 text-center text-white">
          A loucura dos preços baixos! 50% de desconto em toda a loja. Aproveite
          o frete expresso grátis.
        </h3>
      </div>
      <header className="flex items-center justify-between p-4">
        <Link href="/" className="text-3xl font-bold">
          Exclusive
        </Link>

        <nav className="hidden space-x-4 sm:block">
          <Link href="/" className="hover:font-semibold">
            Início
          </Link>

          <Link href="/contact" className="hover:font-semibold">
            Contato
          </Link>
          <Link href="/about" className="hover:font-semibold">
            Sobre nós
          </Link>
        </nav>

        <Input
          placeholder="O que você está procurando?"
          className="hidden w-[30%] lg:block"
        />

        <div className="hidden items-center lg:flex lg:gap-3">
          <Link href="/favorites">
            {" "}
            <Heart />
          </Link>
          <Link href="/cart">
            <ShoppingCart />
          </Link>
          {data?.user ? (
            <Link href="/account">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src={data.user?.image ?? ""}
                />
              </Avatar>
            </Link>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <span className="cursor-pointer">Entrar</span>
              </DialogTrigger>
              <DialogContent className="w-[90%] bg-black">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          )}
          {data?.user && (
            <span className="cursor-pointer" onClick={handleLogoutClik}>
              Sair
            </span>
          )}
        </div>

        <Sheet>
          <SheetTrigger>
            {" "}
            <MenuIcon className="block lg:hidden" />
          </SheetTrigger>
          <MobileSidebar />
        </Sheet>
      </header>
    </div>
  )
}

export default Header
