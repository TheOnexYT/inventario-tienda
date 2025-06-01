"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estudiantes_controller_1 = require("../../controllers/estudiantes/estudiantes.controller");
const estudiantesRouter = (0, express_1.Router)();
const estudiantesController = new estudiantes_controller_1.EstudiantesController();
// /**
//  * @swagger
//  * tags:
//  *   - name: Estudiantes
//  *     description: Operaciones relacionadas con los estudiantes
//  *
//  * /estudiante/listar:
//  *   get:
//  *     summary: Devuelve un estudiante
//  *     description: Retorna la información de un usuario.
//  *     tags:
//  *       - Estudiantes
//  *     responses:
//  *       200:
//  *         description: Operación exitosa
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: string
//  * 
//  * /estudiante/crear:
//  *   post:
//  *     summary: Crear un estudiante
//  *     description: Retorna la ruta.
//  *     tags:
//  *       - Estudiantes
//  *     responses:
//  *       200:
//  *         description: Operación exitosa
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: string
//  * 
//  * /estudiante/update:
//  *   put:
//  *     summary: actualiza un estudiante
//  *     description: Retorna la ruta.
//  *     tags:
//  *       - Estudiantes
//  *     responses:
//  *       200:
//  *         description: Operación exitosa
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: string
//  */
estudiantesRouter.get('/', (req, res) => {
    res.send('Estudiantes Routes');
});
estudiantesRouter.post('/crear', (req, res, next) => estudiantesController.crearEstudiante(req, res, next));
estudiantesRouter.get('/listar', (req, res, next) => estudiantesController.obtenerEstudiantes(req, res, next));
estudiantesRouter.put('/update', (req, res, next) => estudiantesController.actualizarEstudiante(req, res, next));
exports.default = estudiantesRouter;
