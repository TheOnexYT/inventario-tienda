"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const Usuario_1 = require("../../models/Usuario");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
class AuthService {
    async registrar(data) {
        const { nombre, email, password } = data;
        // Validaciones básicas
        if (!nombre || !email || !password) {
            throw (0, http_errors_1.default)(400, 'Todos los campos (nombre, email, password) son obligatorios');
        }
        const usuarioExistente = await Usuario_1.Usuario.findOne({ email });
        if (usuarioExistente) {
            throw (0, http_errors_1.default)(409, 'El usuario ya existe');
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const nuevoUsuario = new Usuario_1.Usuario({ nombre, email, password: hashedPassword });
        await nuevoUsuario.save();
        return {
            mensaje: 'Usuario registrado correctamente',
            usuario: {
                _id: nuevoUsuario._id,
                nombre: nuevoUsuario.nombre,
                email: nuevoUsuario.email,
                rol: nuevoUsuario.rol
            }
        };
    }
    async login(data) {
        const { email, password } = data;
        const usuario = await Usuario_1.Usuario.findOne({ email });
        if (!usuario)
            throw (0, http_errors_1.default)(401, 'Credenciales inválidas');
        const passwordValido = await bcryptjs_1.default.compare(password, usuario.password);
        if (!passwordValido)
            throw (0, http_errors_1.default)(401, 'Credenciales inválidas');
        const token = jsonwebtoken_1.default.sign({ id: usuario._id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return {
            token,
            usuario: {
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol
            }
        };
    }
    async asociarTiendas(usuarioId, tiendas) {
        try {
            const usuario = await Usuario_1.Usuario.findByIdAndUpdate(usuarioId, { tiendas }, { new: true }).populate('tiendas');
            if (!usuario)
                throw (0, http_errors_1.default)(404, 'Usuario no encontrado');
            return usuario;
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
    async obtenerUsuario(id) {
        try {
            const usuario = await Usuario_1.Usuario.findById(id).populate('tiendas');
            if (!usuario)
                throw (0, http_errors_1.default)(404, 'Usuario no encontrado');
            return usuario;
        }
        catch (error) {
            throw (0, http_errors_1.default)(500, error.message);
        }
    }
}
exports.AuthService = AuthService;
