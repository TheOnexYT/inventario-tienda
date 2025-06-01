"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notas_controller_1 = require("../../controllers/notas/notas.controller");
const notasRouter = (0, express_1.Router)();
const notasController = new notas_controller_1.NotasController();
// /**
//  * @swagger
//  * tags:
//  *   - name: Notas
//  *     description: Operaciones relacionadas con las Notas
//  *
//  * /nota/registrar:
//  *   post:
//  *     summary: Registra una notas
//  *     description: Retorna la ruta.
//  *     tags:
//  *       - Notas
//  *     responses:
//  *       200:
//  *         description: Operación exitosa
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: string
//  * 
//  */
notasRouter.get('/', (req, res) => {
    res.send('Estudiantes Routes');
});
notasRouter.post('/registrar', (req, res, next) => notasController.registrarNota(req, res, next));
exports.default = notasRouter;
