"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superhero_1 = __importDefault(require("../cache/superhero"));
const Exeption_1 = require("../exeptions/Exeption");
const escapeRegExp_1 = require("../utils/escapeRegExp");
class HerosService {
    async search(query) {
        if (!query || query.length < 3)
            throw new Exeption_1.Exeption("Search must contain more than 3 characters", 400);
        const heros = superhero_1.default.cache
            .filter(value => {
            return new RegExp(escapeRegExp_1.escapeRegExp(query), 'gi').test(value.herosStringLong);
        });
        if (heros.length === 0)
            throw new Exeption_1.Exeption("No heros found", 204);
        return heros.map(hero => {
            Reflect.deleteProperty(hero, 'herosStringLong');
            return hero;
        });
    }
    async slug(slug) {
        if (!slug)
            throw new Exeption_1.Exeption('Slug not empty', 204);
        const hero = superhero_1.default.cache.find(value => value.slug === slug);
        if (!hero)
            throw new Exeption_1.Exeption('Hero not found', 404);
        Reflect.deleteProperty(hero, 'herosStringLong');
        return hero;
    }
}
exports.default = new HerosService();
