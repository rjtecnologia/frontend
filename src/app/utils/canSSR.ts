import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export function canSSRAuth() {
  const token = cookies().get('@nextauth_token')?.value

  if (!token) {
    redirect('/')
  }
}

export function canSSRGuest() {
  const token = cookies().get('@nextauth_token')?.value

  if (token) {
    redirect('/dashboard')
  }
}
