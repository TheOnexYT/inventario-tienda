import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'user'], default: 'user' },
  tiendas: [{ type: Schema.Types.ObjectId, ref: 'Tienda' }]
}, {
  timestamps: true
});

export const Usuario = model('Usuario', usuarioSchema);
