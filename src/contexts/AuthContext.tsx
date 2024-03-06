'use client'
import { createContext, ReactNode, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { api } from '@/services/apiClient'

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
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth_token')
  } catch (error) {
    console.log('Erro ao deslogar ' + error)
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

      setCookie(undefined, '@nextauth_token', token, {
        maxAge: 60 * 60 * 24 * 30, // expira em 1 mes
        path: '/',
      })

      setUser({
        id,
        name,
        email,
      })

      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  async function SignUp({ name, email, password }: SignUpProps) {}

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
