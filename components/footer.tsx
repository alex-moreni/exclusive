import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-black p-7 text-white">
      <div>
        <h1 className="text-2xl">Exclusive</h1>
        <p className="text-gray-400">
          Ganhe 10% de desconto no seu primeiro pedido
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-3">
        <div>
          <h1 className="text-2xl">Suporte</h1>
          <p>Endereço: Av. das Nações Unidas</p>
          <p>Central de atendimento: (16) 9999-9999</p>
          <p>Email: 9sEzy@example.com</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl">Conta</h1>
          <Link href="/account">Minha conta</Link>
          <Link href="/sign-in">Entrar / Registrar</Link>
          <Link href="/cart">Carrinho de compras</Link>
        </div>
        <div className="hidden flex-col md:flex">
          <h1 className="text-2xl">Exclusive</h1>
          <Link href="/sign-in">Sobre nós</Link>
          <Link href="/contact">Contato</Link>
        </div>
      </div>

      <Link
        href="https://github.com/alex-moreni"
        className="mt-4 block text-center text-gray-500"
        target="_blank"
      >
        © 2024 Alex Moreni. Todos os direitos reservados.
      </Link>
    </footer>
  )
}

export default Footer
