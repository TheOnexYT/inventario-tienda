"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const mongoose_1 = require("mongoose");
const productoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    tienda: { type: mongoose_1.Types.ObjectId, ref: 'Tienda', required: true }, // Relación a tienda
}, {
    timestamps: true,
});
exports.Producto = (0, mongoose_1.model)('Producto', productoSchema);
