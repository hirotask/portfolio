import { createClient } from 'microcms-js-sdk'

function getClient() {
  const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN
  const apiKey = import.meta.env.VITE_MICROCMS_API_KEY

  if (serviceDomain == null) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is missing')
  }
  if (apiKey == null) {
    throw new Error('MICROCMS_API_KEY is missing')
  }

  return createClient({
    serviceDomain: serviceDomain,
    apiKey: apiKey,
  })
}

export default getClient
