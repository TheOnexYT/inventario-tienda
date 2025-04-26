"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tienda = void 0;
const mongoose_1 = require("mongoose");
const tiendaSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String },
}, {
    timestamps: true,
});
exports.Tienda = (0, mongoose_1.model)('Tienda', tiendaSchema);
