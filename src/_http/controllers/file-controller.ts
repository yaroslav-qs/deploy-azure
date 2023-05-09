import { Request, Response } from 'express'

class FileController {
  public upload(req: Request, res: Response,) {
    const { file } = req.body

    res.json(file)
  }
}

export default new FileController()
