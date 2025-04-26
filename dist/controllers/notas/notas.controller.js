"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotasController = void 0;
const notas_service_1 = require("../../services/notas/notas.service");
class NotasController {
    constructor() {
        // Instanciamos el servicio en el constructor
        this.notasService = new notas_service_1.NotasService();
    }
    async registrarNota(req, res, next) {
        try {
            // Llamamos al servicio para registrar una nota
            const estudiante = await this.notasService.registrarNota();
            // Envía la respuesta exitosa
            res.status(200).json({ estudiante });
        }
        catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }
}
exports.NotasController = NotasController;
