import createError from 'http-errors';
import uniqid from 'uniqid';

export class EstudiantesService {

    async obtenerEstudiantes() {
        try {
            let estudiantes = [
                {
                    id: uniqid(),
                    nombre: "Edgar",
                    email: "edgarmail.com"
                },
                {
                    id: uniqid(),
                    nombre: "Carlos",
                    email: "carlos@mail.com"
                },
                {
                    id: uniqid(),
                    nombre: "Juan",
                    email: "Juan@mail.com"
                }
            ];
            return estudiantes;

        } catch (e: any) {
            throw createError(500, e.message);
        }
    }


    async crearEstudiante() {
        try {
            return "/estudiante/crear"

        } catch (e: any) {
            throw createError(500, e.message);
        }
    }

    async actualizarEstudiante() {
        try {
            return "/estudiante/actualizar"

        } catch (e: any) {
            throw createError(500, e.message);
        }
    }
}
