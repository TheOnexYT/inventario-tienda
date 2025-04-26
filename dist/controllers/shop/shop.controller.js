"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const shop_service_1 = require("../../services/shop/shop.service");
class ShopController {
    constructor() {
        // Instanciamos el servicio en el constructor
        this.shopService = new shop_service_1.ShopService();
    }
    async getShop(req, res, next) {
        try {
            // Llama al servicio para obtener el usuario
            const usuario = await this.shopService.getShop();
            // Envía la respuesta exitosa
            res.status(200).json({ usuario });
        }
        catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }
}
exports.ShopController = ShopController;
