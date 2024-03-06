'use client'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../../public/logo.svg'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/button'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { toast } from 'react-toastify'

export default function Cadastro() {
  const { signUp } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    if (name === '' || email === '' || password === '') {
      toast.warning('Preencha todos os campos')
      return
    }

    setLoading(true)

    const data = {
      name,
      email,
      password,
    }

    await signUp(data)

    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src={logoImage} alt="Logo site" priority={true} quality={100} />
      <div className="mt-8 flex w-[90%] flex-col items-center justify-center px-6 py-8 sm:w-[600px]">
        <h1 className="mb-4 text-2xl font-bold text-white">Criar uma conta</h1>
        <form className="flex w-full flex-col" onSubmit={handleSignUp}>
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button type="submit" loading={loading}>
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
