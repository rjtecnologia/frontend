import { parseCookies } from 'nookies'

const { '@nextauth_token': token } = parseCookies()

export async function setupAPIClient(
  input: string | URL | Request,
  method: string,
  body?: BodyInit,
) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${input}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body,
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      return Promise.reject(err)
    })

  return data
}
