"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const Producto_1 = require("../../models/Producto");
const http_errors_1 = __importDefault(require("http-errors"));
class ProductoService {
    async crearProducto(data) {
        try {
            const nuevoProducto = new Producto_1.Producto(data);
            return await nuevoProducto.save();
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async listarProductos() {
        try {
            return await Producto_1.Producto.find().populate('tienda', 'nombre direccion');
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async listarProductosPorTienda(idTienda) {
        try {
            return await Producto_1.Producto.find({ tienda: idTienda }).populate('tienda', 'nombre direccion');
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async asociarTienda(productoId, tiendaId) {
        try {
            const producto = await Producto_1.Producto.findByIdAndUpdate(productoId, { tienda: tiendaId }, { new: true });
            if (!producto)
                throw (0, http_errors_1.default)(404, 'Producto no encontrado');
            return producto;
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
}
exports.ProductoService = ProductoService;
