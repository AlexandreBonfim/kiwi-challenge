import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import phonewordRouter from './phonewords/phonewords.controller'

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`ACCESS LOG: ${req.url}`)
  next()
})

app.get('/health', (req, res) => {
  res.json({ isAlive: true })
})

app.use('/phoneword', phonewordRouter)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🚀 Backend server started at http://localhost:${port}`)
  })
}

export default app
