"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../../controllers/users/users.controller");
const usersRouter = (0, express_1.Router)();
const userController = new users_controller_1.UserController();
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con los usuarios
 *
 * /api/users/getUser:
 *   get:
 *     summary: Devuelve un usuario
 *     description: Retorna la información de un usuario.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
usersRouter.get('/', (req, res) => {
    res.send('user routes');
});
usersRouter.get('/getUser', (req, res, next) => userController.getUsuario(req, res, next));
exports.default = usersRouter;
