"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heros_1 = __importDefault(require("../services/heros"));
class HeroController {
    async search(req, res, next) {
        const { q } = req.query;
        const data = await heros_1.default.search(q);
        return res.status(200).json(data);
    }
    async slug(req, res, next) {
        const { slug } = req.params;
        const data = await heros_1.default.slug(slug);
        return res.status(200).json(data);
    }
}
exports.default = new HeroController();
