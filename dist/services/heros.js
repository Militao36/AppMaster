"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superhero_1 = __importDefault(require("../cache/superhero"));
const escapeRegExp_1 = require("../utils/escapeRegExp");
class HerosService {
    async search(query) {
        if (!query || query.length < 3)
            throw new Error("400");
        const heros = superhero_1.default.cache
            .filter(value => {
            return new RegExp(escapeRegExp_1.escapeRegExp(query), 'gi').test(value.dataCSV);
        });
        if (heros.length === 0)
            throw new Error("400");
        return heros;
    }
    async slug(slug) {
        if (!slug)
            throw new Error('204');
        const hero = superhero_1.default.cache.find(value => value.slug === slug);
        if (!hero)
            throw new Error('404');
        return hero;
    }
}
exports.default = new HerosService();
