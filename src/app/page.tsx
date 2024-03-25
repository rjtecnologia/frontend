import Image from 'next/image'
import logoImage from '../../public/logo.svg'
import FormSignIn from '@/components/Form/SignIn'
import { canSSRGuest } from './utils/canSSR'

export default function Home() {
  canSSRGuest()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src={logoImage} alt="Logo site" priority={true} quality={100} />
      <FormSignIn />
    </div>
  )
}
