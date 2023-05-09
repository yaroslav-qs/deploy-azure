import { Router } from 'express'
import multer from 'multer'

import diskStorage from '../../drivers/multer/storages/disk-storage'

import fileController from '../controllers/file-controller'

export default Router()
  .post(
    '/upload', 
    multer({ storage: diskStorage }).single('file') , 
    fileController.upload,
  )