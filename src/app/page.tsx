import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Home() {
  const token = cookies().get('@nextauth_token')
  console.log(token)

  if (token) {
    return redirect('/dashboard')
  }
}
