"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const uniqid_1 = __importDefault(require("uniqid"));
class UserService {
    async getUsuario() {
        try {
            const uid = (0, uniqid_1.default)();
            let usuario = {
                uid: uid,
                nombre: "Jhon Doe",
                email: "JhonDoe@mail.com "
            };
            return usuario;
        }
        catch (e) {
            throw (0, http_errors_1.default)(500, e.message);
        }
    }
}
exports.UserService = UserService;
