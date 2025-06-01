"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../../controllers/productos/producto.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const productoRouter = (0, express_1.Router)();
const productoController = new producto_controller_1.ProductoController();
// Todas las rutas protegidas
productoRouter.use(auth_middleware_1.verificarToken);
/**
 * @swagger
 * /producto:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Producto]
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
 *               - precio
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               tienda:
 *                 type: string
 *                 description: ID de la tienda (opcional)
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 */
productoRouter.post('/', (req, res, next) => productoController.crearProducto(req, res, next));
/**
 * @swagger
 * /producto:
 *   get:
 *     summary: Listar todos los productos
 *     tags: [Producto]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos
 */
productoRouter.get('/', (req, res, next) => productoController.listarProductos(req, res, next));
/**
 * @swagger
 * /producto/tienda/{id}:
 *   get:
 *     summary: Listar productos por tienda
 *     tags: [Producto]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tienda
 *     responses:
 *       200:
 *         description: Productos de la tienda especificada
 */
productoRouter.get('/tienda/:id', (req, res, next) => productoController.listarProductosPorTienda(req, res, next));
/**
 * @swagger
 * /producto/{id}/tienda:
 *   patch:
 *     summary: Asociar producto a una tienda
 *     tags: [Producto]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tienda:
 *                 type: string
 *                 description: ID de la tienda a asociar
 *     responses:
 *       200:
 *         description: Producto actualizado con la tienda
 */
productoRouter.patch('/:id/tienda', (req, res, next) => productoController.asociarTienda(req, res, next));
exports.default = productoRouter;
