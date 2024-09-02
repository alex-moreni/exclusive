import Link from "next/link"

interface CardCategoryProps {
  Icon: any
  title: string
  link: string
}

const CardCategory = ({ Icon, title, link }: CardCategoryProps) => {
  return (
    <Link
      href={link}
      className="flex h-[145px] min-w-[170px] cursor-pointer flex-col items-center justify-center border border-gray-600 hover:bg-red-500 hover:text-white"
    >
      <Icon size={70} />
      <p className="font-semibold">{title}</p>
    </Link>
  )
}

export default CardCategory
