"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shop_controller_1 = require("../../controllers/shop/shop.controller");
const shopRouter = (0, express_1.Router)();
const shopController = new shop_controller_1.ShopController();
/**
 * @swagger
 * tags:
 *   - name: Shop
 *     description: Operaciones relacionadas con la tienda
 *
 * /api/shop/getShop:
 *   get:
 *     summary: Devuelve una tienda
 *     description: Retorna la información de la tienda.
 *     tags:
 *       - Shop
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
shopRouter.get('/getShop', (req, res, next) => shopController.getShop(req, res, next));
/* shopRouter.get('/', (req, res) => {
    res.render('shop', { name: 'Shop', description: "my shop in Html" });
}); */
exports.default = shopRouter;
