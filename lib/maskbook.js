import { AsyncCall, JSONSerialization } from 'async-call-rpc'

const channel = {
  on(listener) {
    const l = (x) => x instanceof CustomEvent && [listener(x.detail), console.log(x.detail)]
    document.addEventListener('mask-out', l)
    return () => document.removeEventListener('mask-out', l)
  },
  send(message) {
    console.log(message)
    document.dispatchEvent(new CustomEvent('mask-in', { detail: message }))
  },
}
const server = AsyncCall({}, { channel, serializer: JSONSerialization() })
/** @returns {Promise<import('./sdk.d').MaskSDK>} */
async function init() {
  await untilStart()
  const version = await server.version()
  if (version !== 1) throw new Error(`Unknown version of Mask SDK ${version}`)
  return {
    version,
    loginWithMask: server.loginWithMask,
  }
}

export default init()
function untilStart() {
  if (document.querySelector('html').getAttribute('data-mask-sdk-ready')) return Promise.resolve()
  return new Promise((r) => document.addEventListener('mask-start', r, { once: true }))
}
