import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

type AuthProps = {
  children: ReactNode
}

export default async function Auth({ children }: AuthProps) {
  const token = cookies().get('@nextauth_token')?.value

  if (token) {
    console.log('teste')
    return redirect('/dashboard')
  } else {
    return <div>{children}</div>
  }
}
