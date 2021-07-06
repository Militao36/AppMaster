import { NextFunction, Request, Response } from "express";
import heros from "../services/heros";

class HeroController {
    async search(req: Request, res: Response, next: NextFunction) {
        const { q } = req.query
        const data = await heros.search(q as string)
        return res.status(200).json(data)
    }

    async slug(req: Request, res: Response, next: NextFunction) {
        const { slug } = req.params
        const data = await heros.slug(slug)
        return res.status(200).json(data)
    }
}

export default new HeroController()