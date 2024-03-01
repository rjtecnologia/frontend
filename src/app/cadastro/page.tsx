import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../public/logo.svg'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/button'

export default function Cadastro() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image src={logoImage} alt="Logo site" priority={true} quality={100} />
      <div className="mt-8 w-[90%] sm:w-[600px] flex flex-col py-8 px-6 justify-center items-center">
        <h1 className="text-white text-2xl font-bold mb-4">Criar uma conta</h1>
        <form className="w-full flex flex-col">
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="text" placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit" loading={false}>
            Cadastrar
          </Button>
        </form>
        <Link className="text-white mt-4 cursor-pointer text-sm" href="/">
          Possui uma conta ? Faça seu login
        </Link>
      </div>
    </div>
  )
}
