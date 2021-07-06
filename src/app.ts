import express, { NextFunction, Request, Response } from 'express'
import SuperHero from './cache/superhero'
import Heros from './controllers/Hero'
import { Exeption } from './exeptions/Exeption'

const app = express()

app.use(express.json())

app.use(async (req, res, next) => {
  await SuperHero.init()
  next()
})

app.get('/search', Heros.search)

app.get('/hero/:slug', Heros.slug)

app.use((err: Exeption | any, req: Request, res: Response, next: NextFunction) => {
  return res
    .status(err.code || 500)
    .send(err.message || "Server Error")
})

export default app