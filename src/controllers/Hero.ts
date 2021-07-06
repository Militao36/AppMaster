import { NextFunction, Request, Response } from "express";
import heros from "../services/heros";

class HeroController {
    async search(req: Request, res: Response, next: NextFunction) {
        try {
            const { q } = req.query
            const data = await heros.search(q as string)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async slug(req: Request, res: Response, next: NextFunction) {
        try {
            const { slug } = req.params
            const data = await heros.slug(slug)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

export default new HeroController()