import { v4 as uuidv4 } from 'uuid'
import multer from 'multer'
import path from 'path'

const FILE_PATH = process.env.FILE_PATH || '/public'

export default multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), FILE_PATH))
  },
  filename: function (req, file, cb) {
    const filename = uuidv4() + path.extname(file.originalname)
    req.body.file = { ...file, filename, path: path.join(FILE_PATH, filename) }
    cb(null, filename)
  },
})
