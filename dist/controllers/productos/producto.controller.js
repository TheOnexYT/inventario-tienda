"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoController = void 0;
const producto_service_1 = require("../../services/productos/producto.service");
class ProductoController {
    constructor() {
        this.productoService = new producto_service_1.ProductoService();
    }
    async crearProducto(req, res, next) {
        try {
            const producto = await this.productoService.crearProducto(req.body);
            res.status(201).json(producto);
        }
        catch (err) {
            next(err);
        }
    }
    async listarProductos(req, res, next) {
        try {
            const productos = await this.productoService.listarProductos();
            res.json(productos);
        }
        catch (err) {
            next(err);
        }
    }
    async listarProductosPorTienda(req, res, next) {
        try {
            const productos = await this.productoService.listarProductosPorTienda(req.params.id);
            res.json(productos);
        }
        catch (err) {
            next(err);
        }
    }
    async asociarTienda(req, res, next) {
        try {
            const producto = await this.productoService.asociarTienda(req.params.id, req.body.tiendaId);
            res.json(producto);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.ProductoController = ProductoController;
