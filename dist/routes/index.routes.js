"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tienda_routes_1 = __importDefault(require("./tiendas/tienda.routes"));
const producto_routes_1 = __importDefault(require("./productos/producto.routes"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Index
 *     description: index routes
 *
 * /test:
 *   get:
 *     summary: Devuelve un saludo
 *     description: Retorna un mensaje de saludo al usuario.
 *     tags:
 *      - Index
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Hi, I'm alive!"
 */
// Test Route
router.get('/test', (req, res) => {
    res.json('Hi, I\'m alive!');
});
// another routes
router.use('/tienda', tienda_routes_1.default);
router.use('/producto', producto_routes_1.default);
exports.default = router;
