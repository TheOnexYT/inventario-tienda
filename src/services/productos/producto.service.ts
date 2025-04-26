import { Producto } from '../../models/Producto';
import createError from 'http-errors';

export class ProductoService {
  async crearProducto(data: any) {
    try {
      const nuevoProducto = new Producto(data);
      return await nuevoProducto.save();
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }

  async listarProductos() {
    try {
      return await Producto.find().populate('tienda', 'nombre direccion');
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }

  async listarProductosPorTienda(idTienda: string) {
    try {
      return await Producto.find({ tienda: idTienda }).populate('tienda', 'nombre direccion');
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }
  
}
