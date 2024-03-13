import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type CookieTokenProps = {
  value: string
}

export function Auth() {
  const token = cookies().get('@nextauth_token')?.value

  if (token) {
    return redirect('/dashboard')
  } else {
    return redirect('/')
  }
}
