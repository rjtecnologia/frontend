import { api } from '@/services/apiClient'

export default function Select() {
  return (
    <div>
      <select className="h-10 w-full rounded-lg border border-solid border-gray-100 bg-dark-900 px-3 text-white placeholder-opacity-80">
        <option>Bebidas</option>
        <option>Pizzas</option>
      </select>
    </div>
  )
}
