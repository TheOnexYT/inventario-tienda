import { Router } from 'express';
import { TiendasController } from '../../controllers/tiendas/tienda.controller';
import { verificarToken } from '../../middlewares/auth.middleware';

const tiendaRouter = Router();
const tiendaController = new TiendasController();

// Todas protegidas con token
tiendaRouter.use(verificarToken);

/**
 * @swagger
 * /tienda:
 *   get:
 *     summary: Obtener todas las tiendas
 *     tags: [Tienda]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tiendas
 */
tiendaRouter.get('/', (req, res, next) => tiendaController.listarTiendas(req, res, next));

/**
 * @swagger
 * /tienda/{id}:
 *   get:
 *     summary: Obtener una tienda por ID
 *     tags: [Tienda]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tienda
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tienda encontrada
 */
tiendaRouter.get('/:id', (req, res, next) => tiendaController.obtenerTienda(req, res, next));

/**
 * @swagger
 * /tienda:
 *   post:
 *     summary: Crear una nueva tienda
 *     tags: [Tienda]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - direccion
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tienda creada exitosamente
 */
tiendaRouter.post('/', (req, res, next) => tiendaController.crearTienda(req, res, next));

/**
 * @swagger
 * /tienda/{id}:
 *   put:
 *     summary: Actualizar una tienda por ID
 *     tags: [Tienda]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tienda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tienda actualizada exitosamente
 */
tiendaRouter.put('/:id', (req, res, next) => tiendaController.actualizarTienda(req, res, next));

/**
 * @swagger
 * /tienda/{id}:
 *   delete:
 *     summary: Eliminar una tienda por ID
 *     tags: [Tienda]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tienda
 *     responses:
 *       200:
 *         description: Tienda eliminada correctamente
 */
tiendaRouter.delete('/:id', (req, res, next) => tiendaController.eliminarTienda(req, res, next));

export default tiendaRouter;
