import Echo from 'laravel-echo'
import Pusher, { type ChannelAuthorizationCallback } from 'pusher-js'

declare global {
  interface Window {
    Echo: Echo<any>
    Pusher: typeof Pusher
  }
}

export default defineNuxtPlugin(nuxtApp => {
  window.Pusher = Pusher
  const config = useRuntimeConfig()

  const echo = new Echo({
    broadcaster: 'reverb',
    key: config.public.reverb.appKey,
    wsHost: config.public.reverb.host,
    wsPort: config.public.reverb.port,
    wssPort: config.public.reverb.port,
    cluster: 'mt1',
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
  })

  nuxtApp.provide('echo', echo)
})
