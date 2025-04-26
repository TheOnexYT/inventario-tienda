"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaService = void 0;
const Tienda_1 = require("../../models/Tienda");
const http_errors_1 = __importDefault(require("http-errors"));
class TiendaService {
    async listarTiendas() {
        try {
            return await Tienda_1.Tienda.find();
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async obtenerTienda(id) {
        try {
            const tienda = await Tienda_1.Tienda.findById(id);
            if (!tienda)
                throw (0, http_errors_1.default)(404, 'Tienda no encontrada');
            return tienda;
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async crearTienda(data) {
        try {
            const nueva = new Tienda_1.Tienda(data);
            return await nueva.save();
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async actualizarTienda(id, data) {
        try {
            const tienda = await Tienda_1.Tienda.findByIdAndUpdate(id, data, { new: true });
            if (!tienda)
                throw (0, http_errors_1.default)(404, 'Tienda no encontrada');
            return tienda;
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async eliminarTienda(id) {
        try {
            const tienda = await Tienda_1.Tienda.findByIdAndDelete(id);
            if (!tienda)
                throw (0, http_errors_1.default)(404, 'Tienda no encontrada');
            return { message: 'Tienda eliminada' };
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
}
exports.TiendaService = TiendaService;
