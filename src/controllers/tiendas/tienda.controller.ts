import { Request, Response, NextFunction } from 'express';
import { TiendaService } from '../../services/tiendas/tienda.service';

export class TiendasController {
  private tiendaService: TiendaService;

  constructor() {
    this.tiendaService = new TiendaService();
  }

  async listarTiendas(req: Request, res: Response, next: NextFunction) {
    try {
      const tiendas = await this.tiendaService.listarTiendas();
      res.json(tiendas);
    } catch (err) {
      next(err);
    }
  }

  async obtenerTienda(req: Request, res: Response, next: NextFunction) {
    try {
      const tienda = await this.tiendaService.obtenerTienda(req.params.id);
      res.json(tienda);
    } catch (err) {
      next(err);
    }
  }

  async crearTienda(req: Request, res: Response, next: NextFunction) {
    try {
      const tienda = await this.tiendaService.crearTienda(req.body);
      res.status(201).json(tienda);
    } catch (err) {
      next(err);
    }
  }

  async actualizarTienda(req: Request, res: Response, next: NextFunction) {
    try {
      const tienda = await this.tiendaService.actualizarTienda(req.params.id, req.body);
      res.json(tienda);
    } catch (err) {
      next(err);
    }
  }

  async eliminarTienda(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.tiendaService.eliminarTienda(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
