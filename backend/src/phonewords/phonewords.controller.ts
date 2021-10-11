import express, { Router, Request, Response, NextFunction } from 'express'
import { phoneword } from './phonewords.service'

const routes: Router = express.Router()

// Middleware
const verifyNumber = (req: Request, res: Response, next: NextFunction) => {
  const number = req.query.number as string

  if (!number || typeof number === undefined) return res.status(400).json({ message :'Missing number input' })

  return next();
}

routes.get('/phoneword', verifyNumber, (req: Request, res: Response, next: NextFunction) => {
  try {
    const number = req.query.number as string
    res.json(phoneword(number))
  } catch (e) {
    next(e)
  }
})

export default routes
