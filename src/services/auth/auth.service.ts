import { Usuario } from '../../models/Usuario';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';

export class AuthService {
   async registrar(data: any) {
    const { nombre, email, password } = data;

    // Validaciones básicas
    if (!nombre || !email || !password) {
      throw createError(400, 'Todos los campos (nombre, email, password) son obligatorios');
    }

    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      throw createError(409, 'El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });
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


  async login(data: any) {
  const { email, password } = data;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) throw createError(401, 'Credenciales inválidas');

  const passwordValido = await bcrypt.compare(password, usuario.password);
  if (!passwordValido) throw createError(401, 'Credenciales inválidas');

  const token = jwt.sign(
    { id: usuario._id, email: usuario.email },
    process.env.JWT_SECRET!,
    { expiresIn: '1d' }
  );

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


  async asociarTiendas(usuarioId: string, tiendas: string[]) {
  try {
    const usuario = await Usuario.findByIdAndUpdate(
      usuarioId,
      { tiendas },
      { new: true }
    ).populate('tiendas');

    if (!usuario) throw createError(404, 'Usuario no encontrado');
    return usuario;
  } catch (error: any) {
    throw createError(500, error.message);
  }
}

async obtenerUsuario(id: string) {
  try {
    const usuario = await Usuario.findById(id).populate('tiendas');
    if (!usuario) throw createError(404, 'Usuario no encontrado');
    return usuario;
  } catch (error: any) {
    throw createError(500, error.message);
  }
}


}
