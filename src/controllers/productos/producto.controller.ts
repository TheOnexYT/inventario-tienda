import { Request, Response, NextFunction } from 'express';
import { ProductoService } from '../../services/productos/producto.service';

export class ProductoController {
  private productoService: ProductoService;

  constructor() {
    this.productoService = new ProductoService();
  }

  async crearProducto(req: Request, res: Response, next: NextFunction) {
    try {
      const producto = await this.productoService.crearProducto(req.body);
      res.status(201).json(producto);
    } catch (err) {
      next(err);
    }
  }

  async listarProductos(req: Request, res: Response, next: NextFunction) {
    try {
      const productos = await this.productoService.listarProductos();
      res.json(productos);
    } catch (err) {
      next(err);
    }
  }

  async listarProductosPorTienda(req: Request, res: Response, next: NextFunction) {
    try {
      const productos = await this.productoService.listarProductosPorTienda(req.params.id);
      res.json(productos);
    } catch (err) {
      next(err);
    }
  }
  
  
}
