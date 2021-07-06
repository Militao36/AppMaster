import express from 'express'
import SuperHero from './cache/superhero'
import Heros from './controllers/Hero'

const app = express()

app.use(express.json())

app.use(async (req, res, next) => {
  await SuperHero.init()
  next()
})

app.get('/search', Heros.search)

app.get('/hero/:slug', Heros.slug)

export default app