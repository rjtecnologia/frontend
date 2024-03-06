import { setupAPIClient } from './api'

export async function api(
  input: string | URL | Request,
  method: string,
  body: BodyInit,
  token: string,
) {
  return await setupAPIClient(input, method, body, token)
}
