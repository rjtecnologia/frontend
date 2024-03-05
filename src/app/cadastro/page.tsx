'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../public/logo.svg'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/button'

export default function Cadastro() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src={logoImage} alt="Logo site" priority={true} quality={100} />
      <div className="mt-8 flex w-[90%] flex-col items-center justify-center px-6 py-8 sm:w-[600px]">
        <h1 className="mb-4 text-2xl font-bold text-white">Criar uma conta</h1>
        <form className="flex w-full flex-col">
          <Input type="text" placeholder="Digite seu nome" />
          <Input type="text" placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button type="submit" loading={false}>
            Cadastrar
          </Button>
        </form>
        <Link className="mt-4 cursor-pointer text-sm text-white" href="/">
          Possui uma conta ? Faça seu login
        </Link>
      </div>
    </div>
  )
}
