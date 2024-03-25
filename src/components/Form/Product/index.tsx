'use client'
import Button from '@/components/ui/Button'
import { Input, TextArea } from '@/components/ui/Input'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { FiUpload } from 'react-icons/fi'

export default function FormProduct({
  children,
}: {
  children: React.ReactNode
}) {
  const [avatarURL, setAvatarURL] = useState('')
  const [imageAvatar, setImageAvatar] = useState<File>()

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
      setAvatarURL(URL.createObjectURL(image))
    }
  }

  return (
    <div>
      <form className="my-4 flex flex-col space-y-4">
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

          {avatarURL && (
            <Image
              className="h-full w-full rounded-lg object-cover"
              src={avatarURL}
              alt="foto do produto"
              width={250}
              height={250}
              quality={100}
              priority={true}
            />
          )}
        </label>

        {children}

        <Input placeholder="Digite o nome do produto" />

        <Input placeholder="Preço do produto" />

        <TextArea
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
