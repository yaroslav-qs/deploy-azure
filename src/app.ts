import express from 'express'
import cors from 'cors'
import path from 'path'

import routes from './_http/routes'

const FILE_PATH = process.env.FILE_PATH || '/public'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(FILE_PATH, express.static(path.join(process.cwd(), 'public')))

app.use(cors())

app.use(routes)

export default app
