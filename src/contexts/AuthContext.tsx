'use client'
import { createContext, ReactNode, useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/services/apiClient'
import { toast } from 'react-toastify'
import { setCookie, destroyCookie } from 'nookies'

type SignInProps = {
  email: string
  password: string
}

type SignUpProps = {
  name: string
  email: string
  password: string
}

type UserProps = {
  id: string
  name: string
  email: string
}

type AuthContextData = {
  user: UserProps | undefined
  isAuthenticated: boolean
  signIn: (credentials: SignInProps) => Promise<void>
  signOut: () => void
  signUp: (credentials: SignUpProps) => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth_token')
  } catch (err) {
    toast.error('Erro ao deslogar usuário ' + err)
  }
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api(
        'session',
        'POST',
        JSON.stringify({
          email,
          password,
        }),
      )

      const { id, name, token } = response

      if (id === '' || id === undefined) {
        toast.error('Usuário ou senhas incorretos')
        return
      }

      setCookie(undefined, '@nextauth_token', token, {
        maxAge: 60 * 60 * 24 * 30, // expira em 1 mes
        path: '/',
      })

      setUser({
        id,
        name,
        email,
      })

      toast.success('Seja Bem-Vindo - ' + name)

      router.push('/dashboard')
    } catch (err) {
      if (err instanceof Error) {
        toast.error('Error ao na requisição')
      }
      toast.error('Error ' + err)
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      await api(
        'users',
        'POST',
        JSON.stringify({
          name,
          email,
          password,
        }),
      )

      toast.success('Cadastro realizado com sucesso')

      router.push('/')
    } catch (err) {
      toast.success('Erro ao cadastrar usuário ' + err)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}
