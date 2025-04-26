"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const users_service_1 = require("../../services/users/users.service");
class UserController {
    constructor() {
        // Instanciamos el servicio en el constructor
        this.userService = new users_service_1.UserService();
    }
    async getUsuario(req, res, next) {
        try {
            // Llama al servicio para obtener el usuario
            const usuario = await this.userService.getUsuario();
            // Envía la respuesta exitosa
            res.status(200).json({ usuario });
        }
        catch (error) {
            // Si hay un error, pasa al siguiente middleware de error
            next(error);
        }
    }
}
exports.UserController = UserController;
