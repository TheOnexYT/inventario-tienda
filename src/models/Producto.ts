import { Schema, model, Types } from 'mongoose';

const productoSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  tienda: { type: Types.ObjectId, ref: 'Tienda', required: true }, // Relación a tienda
}, {
  timestamps: true,
});

export const Producto = model('Producto', productoSchema);
