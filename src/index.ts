import 'dotenv/config'
import 'dotenv-defaults/config'

const main = async () => {
  await import('./app')
  await import('./server')
}

main()
