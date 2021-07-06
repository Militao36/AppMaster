"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../utils/api");
class SuperHero {
    constructor() {
        this.cache = [];
        this.cache = [];
    }
    async init() {
        if (this.cache.length > 0)
            return;
        const response = await api_1.api.get("/all.json");
        for await (const item of response.data) {
            const herosStringLong = Object.values(item)
                .filter(value => typeof (value) !== 'string')
                .map(value => Object.values(value))
                .flat()
                .join(" ");
            this.cache.push({
                ...item,
                herosStringLong
            });
        }
    }
}
exports.default = new SuperHero();
