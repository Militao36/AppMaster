"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heros_1 = __importDefault(require("../services/heros"));
class HeroController {
    async search(req, res, next) {
        try {
            const { q } = req.query;
            const data = await heros_1.default.search(q);
            return res.status(200).json(data);
        }
        catch (error) {
            next(error);
        }
    }
    async slug(req, res, next) {
        try {
            const { slug } = req.params;
            const data = await heros_1.default.slug(slug);
            return res.status(200).json(data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new HeroController();
