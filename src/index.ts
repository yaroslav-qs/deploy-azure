import 'dotenv/config'
import 'dotenv-defaults/config'

const main = async () => {
  await require('./app')
  await require('./server')
}

main()
