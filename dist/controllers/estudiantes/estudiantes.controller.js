"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudiantesController = void 0;
const estudiantes_service_1 = require("../../services/estudiantes/estudiantes.service");
class EstudiantesController {
    constructor() {
        // Instanciamos el servicio en el constructor
        this.estudiantesService = new estudiantes_service_1.EstudiantesService();
    }
    async obtenerEstudiantes(req, res, next) {
        try {
            // Llamamos al servicio para obtener el estudiante
            const estudiantes = await this.estudiantesService.obtenerEstudiantes();
            // Envía la respuesta exitosa
            res.status(200).json({ estudiantes });
        }
        catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }
    async crearEstudiante(req, res, next) {
        try {
            // Llamamos al servicio para crear un estudiante
            const estudiante = await this.estudiantesService.crearEstudiante();
            // Envía la respuesta exitosa
            res.status(200).json({ estudiante });
        }
        catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }
    async actualizarEstudiante(req, res, next) {
        try {
            // Llamamos al servicio para actualizar un estudiante
            const estudiante = await this.estudiantesService.actualizarEstudiante();
            // Envía la respuesta exitosa
            res.status(200).json({ estudiante });
        }
        catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }
}
exports.EstudiantesController = EstudiantesController;
