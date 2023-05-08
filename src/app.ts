import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/public', express.static(path.join(process.cwd(), 'public')))

app.use(cors())

export default app
