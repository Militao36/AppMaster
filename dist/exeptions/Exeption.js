"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exeption = void 0;
class Exeption extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
exports.Exeption = Exeption;
