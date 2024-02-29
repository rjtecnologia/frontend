import Image from 'next/image'
import logoImage from '../../public/logo.svg'
import Input from '@/components/ui/Input'

export default function Home() {
  return (
    <div className="">
      <Image src={logoImage} alt="Logo site" priority={true} quality={100} />
      <div className="">
        <form>
          <Input type="text" placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite sua senha" />
        </form>
      </div>
    </div>
  )
}
