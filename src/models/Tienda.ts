import { Schema, model } from 'mongoose';

const tiendaSchema = new Schema({
  nombre: { type: String, required: true },
  direccion: { type: String },
}, {
  timestamps: true,
});

export const Tienda = model('Tienda', tiendaSchema);
