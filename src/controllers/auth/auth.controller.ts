import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../../services/auth/auth.service';

export class AuthController {
  private authService = new AuthService();

  registrar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resultado = await this.authService.registrar(req.body);
      res.status(201).json(resultado);
    } catch (err) {
      next(err);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resultado = await this.authService.login(req.body);
      res.status(200).json(resultado);
    } catch (err) {
      next(err);
    }
  };

  async asociarTiendas(req: Request, res: Response, next: NextFunction) {
  try {
    const usuario = await this.authService.asociarTiendas(req.params.id, req.body.tiendas);
    res.json(usuario);
  } catch (err) {
    next(err);
  }
}

async obtenerUsuario(req: Request, res: Response, next: NextFunction) {
  try {
    const usuario = await this.authService.obtenerUsuario(req.params.id);
    res.json(usuario);
  } catch (err) {
    next(err);
  }
}



}
