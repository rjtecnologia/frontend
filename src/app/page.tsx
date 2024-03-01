'use client'
import { FormEvent, useContext, useState } from 'react'
import Image from 'next/image'
import logoImage from '../../public/logo.svg'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/button'
import { AuthContext } from '@/contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    const data = {
      email,
      password,
    }

    await signIn(data)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image src={logoImage} alt="Logo site" priority={true} quality={100} />
      <div className="mt-8 w-[90%] sm:w-[600px] flex flex-col py-8 px-6 justify-center items-center">
        <form onSubmit={handleLogin} className="w-full flex flex-col">
          <Input
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" loading={false}>
            Acessar
          </Button>
        </form>
        <Link
          className="text-white mt-4 cursor-pointer text-sm"
          href="/cadastro"
        >
          Não possui uma conta ? Cadastre-se
        </Link>
      </div>
    </div>
  )
}
