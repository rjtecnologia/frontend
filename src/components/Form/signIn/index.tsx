'use client'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { toast } from 'react-toastify'

export default function FormSignIn() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    if (email === '' || password === '') {
      toast.warning('Preencha todos os campos')
      return
    }

    setLoading(true)

    const data = {
      email,
      password,
    }

    await signIn(data)

    setLoading(false)
  }

  return (
    <div className="mt-8 flex w-[90%] flex-col items-center justify-center px-6 py-8 sm:w-[600px]">
      <form onSubmit={handleLogin} className="flex w-full flex-col">
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
        <Button type="submit" disabled={loading}>
          Acessar
        </Button>
      </form>
      <Link className="mt-4 cursor-pointer text-sm text-white" href="/signup">
        Não possui uma conta ? Cadastre-se
      </Link>
    </div>
  )
}
