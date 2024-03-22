import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../public/logo.svg'
import ButtonLogout from './components'

export default function Header() {
  return (
    <header className="h-20">
      <div className="mx-auto my-0 flex h-20 max-w-[1200px] items-center justify-between px-8 py-0">
        <Link href="/dashboard">
          <Image
            className="cursor-pointer"
            src={logoImage}
            alt=""
            width={190}
            priority={true}
            quality={100}
          />
        </Link>
        <nav>
          <div className="flex items-center gap-8 text-white">
            <Link
              className="transition duration-200 ease-in hover:text-red-900"
              href="/category"
            >
              Categoria
            </Link>
            <Link
              className="transition duration-100 ease-in hover:text-red-900"
              href="/product"
            >
              Cardápio
            </Link>
            <ButtonLogout />
          </div>
        </nav>
      </div>
    </header>
  )
}
