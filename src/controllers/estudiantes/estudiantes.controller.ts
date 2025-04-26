import { Request, Response, NextFunction } from "express";
import { EstudiantesService } from "../../services/estudiantes/estudiantes.service";


export class EstudiantesController {
    private estudiantesService: EstudiantesService;

    constructor() {
        // Instanciamos el servicio en el constructor
        this.estudiantesService = new EstudiantesService();
    }

    async obtenerEstudiantes(req: Request, res: Response, next: NextFunction) {
        try {
            // Llamamos al servicio para obtener el estudiante
            const estudiantes = await this.estudiantesService.obtenerEstudiantes();

            // Envía la respuesta exitosa
            res.status(200).json({ estudiantes });
        } catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }

    async crearEstudiante(req: Request, res: Response, next: NextFunction) {
        try {
            // Llamamos al servicio para crear un estudiante
            const estudiante = await this.estudiantesService.crearEstudiante();

            // Envía la respuesta exitosa
            res.status(200).json({ estudiante });
        } catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }

    async actualizarEstudiante(req: Request, res: Response, next: NextFunction) {
        try {
            // Llamamos al servicio para actualizar un estudiante
            const estudiante = await this.estudiantesService.actualizarEstudiante();

            // Envía la respuesta exitosa
            res.status(200).json({ estudiante });
        } catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }
}
