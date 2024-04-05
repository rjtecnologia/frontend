import { parseCookies } from 'nookies'

const { '@nextauth_token': token } = parseCookies()

export async function fetchWrapper(
  input: string | URL | Request,
  method: string,
  body?: BodyInit | undefined,
  cache?: RequestCache | undefined,
) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${input}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
    cache,
  })

  const data = result.json()

  return data
}
