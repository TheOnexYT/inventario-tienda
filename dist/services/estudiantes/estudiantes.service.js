"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudiantesService = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const uniqid_1 = __importDefault(require("uniqid"));
class EstudiantesService {
    async obtenerEstudiantes() {
        try {
            let estudiantes = [
                {
                    id: (0, uniqid_1.default)(),
                    nombre: "Edgar",
                    email: "edgarmail.com"
                },
                {
                    id: (0, uniqid_1.default)(),
                    nombre: "Carlos",
                    email: "carlos@mail.com"
                },
                {
                    id: (0, uniqid_1.default)(),
                    nombre: "Juan",
                    email: "Juan@mail.com"
                }
            ];
            return estudiantes;
        }
        catch (e) {
            throw (0, http_errors_1.default)(500, e.message);
        }
    }
    async crearEstudiante() {
        try {
            return "/estudiante/crear";
        }
        catch (e) {
            throw (0, http_errors_1.default)(500, e.message);
        }
    }
    async actualizarEstudiante() {
        try {
            return "/estudiante/actualizar";
        }
        catch (e) {
            throw (0, http_errors_1.default)(500, e.message);
        }
    }
}
exports.EstudiantesService = EstudiantesService;
