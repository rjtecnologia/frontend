import Image from 'next/image'
import logoImage from '../../../public/logo.svg'
import FormSignUp from '@/components/ui/form/signup/page'
import { canSSRGuest } from '../utils/canSSR'

export default function SignUp() {
  canSSRGuest()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src={logoImage} alt="Logo site" priority={true} quality={100} />
      <FormSignUp />
    </div>
  )
}
