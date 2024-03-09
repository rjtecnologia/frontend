import { redirect } from 'next/navigation'
import { hasCookie } from 'cookies-next'

export default function CanAuth() {
  try {
    if (hasCookie('@nextauth_token')) {
      console.log(hasCookie('@nextauth_token'))
      redirect('/dashboard')
    }
  } catch (error) {
    console.error(error)
  }
}
