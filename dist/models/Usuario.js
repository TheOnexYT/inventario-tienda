"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'user'], default: 'user' },
    tiendas: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Tienda' }]
}, {
    timestamps: true
});
exports.Usuario = (0, mongoose_1.model)('Usuario', usuarioSchema);
