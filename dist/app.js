"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const superhero_1 = __importDefault(require("./cache/superhero"));
const Hero_1 = __importDefault(require("./controllers/Hero"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(async (req, res, next) => {
    await superhero_1.default.init();
    next();
});
app.get('/search', Hero_1.default.search);
app.get('/hero/:slug', Hero_1.default.slug);
exports.default = app;
