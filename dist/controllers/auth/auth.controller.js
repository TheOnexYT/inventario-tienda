"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../../services/auth/auth.service");
class AuthController {
    constructor() {
        this.authService = new auth_service_1.AuthService();
        this.registrar = async (req, res, next) => {
            try {
                const resultado = await this.authService.registrar(req.body);
                res.status(201).json(resultado);
            }
            catch (err) {
                next(err);
            }
        };
        this.login = async (req, res, next) => {
            try {
                const resultado = await this.authService.login(req.body);
                res.status(200).json(resultado);
            }
            catch (err) {
                next(err);
            }
        };
    }
    async asociarTiendas(req, res, next) {
        try {
            const usuario = await this.authService.asociarTiendas(req.params.id, req.body.tiendas);
            res.json(usuario);
        }
        catch (err) {
            next(err);
        }
    }
    async obtenerUsuario(req, res, next) {
        try {
            const usuario = await this.authService.obtenerUsuario(req.params.id);
            res.json(usuario);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.AuthController = AuthController;
