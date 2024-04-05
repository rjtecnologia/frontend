'use client'
import { getCategoryList } from '@/app/product/components/Option'
import Button from '@/components/ui/Button'
import { Input, TextArea } from '@/components/ui/Input'
import { fetchWrapper } from '@/services/api'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { toast } from 'react-toastify'

type InputEventProps = {
  name: string
  price: string
  description: string
  avatarURL: string
  category: string
}

export default function FormProduct({
  children,
}: {
  children: React.ReactNode
}) {
  const [imageAvatar, setImageAvatar] = useState<File>()
  const [eventInput, setEventInput] = useState<InputEventProps>({
    name: '',
    price: '',
    description: '',
    avatarURL: '',
    category: '',
  })

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }

    const image = e.target.files[0]

    if (!image) {
      return
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setImageAvatar(image)
      setEventInput({ ...eventInput, avatarURL: URL.createObjectURL(image) })
    }
  }

  async function handleRegister(e: FormEvent) {
    e.preventDefault()

    try {
      const data = new FormData()

      const emputyInput = Object.values(eventInput).every((v) => v === '')

      if (emputyInput) {
        return toast.warning(
          'Preencha todos os campos e escolha uma imagem para cadastrar',
        )
      }

      const { name, price, description } = eventInput

      const listCategory = await getCategoryList()

      const categoryId = listCategory.filter(
        (item) => item.name === eventInput.name,
      )

      data.append('name', name)
      data.append('price', price)
      data.append('description', description)
      data.append('category_id', categoryId)
      data.append('file', imageAvatar)

      await fetchWrapper('product', 'POST', data)
        .then((response: Response) => {
          console.log(response.json())
          if (response.status !== 200) {
            return toast.error('Erro ao cadastrar status')
          }
        })
        .catch((error) => {
          return toast.error('Error ao cadastrar catch' + error)
        })

      toast.success('Produto cadastrado com sucesso')
    } catch (err) {
      console.log(err)
      toast.error('Erro ao cadastrar form')
    }
  }

  return (
    <div>
      <form className="my-4 flex flex-col space-y-4" onSubmit={handleRegister}>
        <label className="flex h-72 w-full cursor-pointer items-center justify-center rounded-lg border border-solid border-gray-100 bg-dark-900 text-white placeholder-opacity-80">
          <span className="absolute z-50 opacity-70">
            <FiUpload size={30} color="#FFF" />
          </span>
          <input
            className="hidden"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFile}
          />

          {eventInput.avatarURL && (
            <Image
              className="h-full w-full rounded-lg object-cover"
              src={eventInput.avatarURL}
              alt="foto do produto"
              width={250}
              height={250}
              quality={100}
              priority={true}
            />
          )}
        </label>

        <select
          value={eventInput.category}
          onChange={(e) =>
            setEventInput({ ...eventInput, category: e.target.value })
          }
          className="mb-4 h-10 rounded-lg border border-solid border-gray-100 bg-dark-900 px-4 text-white placeholder-opacity-80"
        >
          {children}
        </select>

        <Input
          value={eventInput.name}
          onChange={(e) =>
            setEventInput({ ...eventInput, name: e.target.value })
          }
          placeholder="Digite o nome do produto"
        />

        <Input
          value={eventInput.price}
          onChange={(e) =>
            setEventInput({ ...eventInput, price: e.target.value })
          }
          placeholder="Preço do produto"
        />

        <TextArea
          value={eventInput.description}
          onChange={(e) =>
            setEventInput({ ...eventInput, description: e.target.value })
          }
          className="h-10 min-h-[100px] resize-none rounded-lg border border-solid border-gray-100 bg-dark-900 p-3 text-white placeholder-opacity-80"
          placeholder="Descrição do produto..."
        />

        <Button className="bg-green-900 transition duration-200 ease-in hover:brightness-110">
          <a className="text-lg font-semibold text-dark-700">Cadastrar</a>
        </Button>
      </form>
    </div>
  )
}
