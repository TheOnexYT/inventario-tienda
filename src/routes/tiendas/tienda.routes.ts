import { Router } from 'express';
import { TiendasController } from '../../controllers/tiendas/tienda.controller';

const tiendaRouter = Router();
const tiendaController = new TiendasController();

tiendaRouter.get('/', (req, res, next) => tiendaController.listarTiendas(req, res, next));
tiendaRouter.get('/:id', (req, res, next) => tiendaController.obtenerTienda(req, res, next));
tiendaRouter.post('/', (req, res, next) => tiendaController.crearTienda(req, res, next));
tiendaRouter.put('/:id', (req, res, next) => tiendaController.actualizarTienda(req, res, next));
tiendaRouter.delete('/:id', (req, res, next) => tiendaController.eliminarTienda(req, res, next));

export default tiendaRouter;

