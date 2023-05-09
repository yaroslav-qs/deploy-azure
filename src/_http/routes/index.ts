import { Router } from 'express'

import fileRouter from './file-router'

export default Router()
  .use('/files', fileRouter)
