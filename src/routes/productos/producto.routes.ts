import { Router } from 'express';
import { ProductoController } from '../../controllers/productos/producto.controller';

const productoRouter = Router();
const productoController = new ProductoController();

productoRouter.post('/', (req, res, next) => productoController.crearProducto(req, res, next));
productoRouter.get('/', (req, res, next) => productoController.listarProductos(req, res, next));
productoRouter.get('/tienda/:id', (req, res, next) => productoController.listarProductosPorTienda(req, res, next));



export default productoRouter;
