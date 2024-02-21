import { Router } from 'express'

import fileRouter from './file-router'

export default Router()
  .get('/', (_req, res, _next) => {
    res.json({
      success: true,
    })
  })
  .use('/files', fileRouter)
