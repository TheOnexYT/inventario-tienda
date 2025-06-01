import { Router } from 'express';
import { AuthController } from '../../controllers/auth/auth.controller';

const authRouter = Router();
const authController = new AuthController();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *               - password
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       409:
 *         description: El usuario ya existe
 */
authRouter.post('/register', authController.registrar);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT generado exitosamente
 *       401:
 *         description: Credenciales inválidas
 */
authRouter.post('/login', authController.login);

/**
 * @swagger
 * /auth/{id}/tiendas:
 *   patch:
 *     summary: Asociar tiendas a un usuario
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tiendas
 *             properties:
 *               tiendas:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array de IDs de tiendas a asociar
 *     responses:
 *       200:
 *         description: Tiendas asociadas al usuario
 *       404:
 *         description: Usuario no encontrado
 */
authRouter.patch('/:id/tiendas', (req, res, next) => authController.asociarTiendas(req, res, next));

/**
 * @swagger
 * /auth/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
authRouter.get('/:id', (req, res, next) => authController.obtenerUsuario(req, res, next));

export default authRouter;
