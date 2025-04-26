"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotasService = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
class NotasService {
    async registrarNota() {
        try {
            return "/nota/registrar";
        }
        catch (e) {
            throw (0, http_errors_1.default)(500, e.message);
        }
    }
}
exports.NotasService = NotasService;
