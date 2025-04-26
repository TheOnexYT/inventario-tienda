import { Router } from 'express';
import estudiantesRouter from './estudiantes/estudiantes.routes';
import notasRouter from './notas/notas.routes';
import tiendaRouter from './tiendas/tienda.routes';
import productoRouter from './productos/producto.routes';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Index
 *     description: index routes
 * 
 * /test:
 *   get:
 *     summary: Devuelve un saludo
 *     description: Retorna un mensaje de saludo al usuario.
 *     tags:
 *      - Index
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Hi, I'm alive!"
 */

// Test Route
router.get('/test', (req, res) => {
    res.json('Hi, I\'m alive!');
});

// another routes
router.use('/tienda', tiendaRouter);
router.use('/producto', productoRouter);


export default router;
