import { canSSRAuth } from '../utils/canSSR'

export default function Dashboard() {
  canSSRAuth()

  return (
    <div>
      <h1>Bem vindo ao Painel</h1>
    </div>
  )
}
