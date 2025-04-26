"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendasController = void 0;
const tienda_service_1 = require("../../services/tiendas/tienda.service");
class TiendasController {
    constructor() {
        this.tiendaService = new tienda_service_1.TiendaService();
    }
    async listarTiendas(req, res, next) {
        try {
            const tiendas = await this.tiendaService.listarTiendas();
            res.json(tiendas);
        }
        catch (err) {
            next(err);
        }
    }
    async obtenerTienda(req, res, next) {
        try {
            const tienda = await this.tiendaService.obtenerTienda(req.params.id);
            res.json(tienda);
        }
        catch (err) {
            next(err);
        }
    }
    async crearTienda(req, res, next) {
        try {
            const tienda = await this.tiendaService.crearTienda(req.body);
            res.status(201).json(tienda);
        }
        catch (err) {
            next(err);
        }
    }
    async actualizarTienda(req, res, next) {
        try {
            const tienda = await this.tiendaService.actualizarTienda(req.params.id, req.body);
            res.json(tienda);
        }
        catch (err) {
            next(err);
        }
    }
    async eliminarTienda(req, res, next) {
        try {
            const result = await this.tiendaService.eliminarTienda(req.params.id);
            res.json(result);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.TiendasController = TiendasController;
