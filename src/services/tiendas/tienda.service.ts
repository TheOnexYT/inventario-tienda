import { Tienda } from '../../models/Tienda';
import createError from 'http-errors';

export class TiendaService {
  async listarTiendas() {
    try {
      return await Tienda.find();
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }

  async obtenerTienda(id: string) {
    try {
      const tienda = await Tienda.findById(id);
      if (!tienda) throw createError(404, 'Tienda no encontrada');
      return tienda;
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }

  async crearTienda(data: any) {
    try {
      const nueva = new Tienda(data);
      return await nueva.save();
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }

  async actualizarTienda(id: string, data: any) {
    try {
      const tienda = await Tienda.findByIdAndUpdate(id, data, { new: true });
      if (!tienda) throw createError(404, 'Tienda no encontrada');
      return tienda;
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }

  async eliminarTienda(id: string) {
    try {
      const tienda = await Tienda.findByIdAndDelete(id);
      if (!tienda) throw createError(404, 'Tienda no encontrada');
      return { message: 'Tienda eliminada' };
    } catch (error: any) {
      throw createError(500, error.message);
    }
  }
}
