import express, { Application, Request, Response } from "express";
import cors from 'cors';
import morgan from "morgan";
import routes from './routes/index.routes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './config/db';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
const SERVER_PORT: number = 3001;

// Conexión a base de datos
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// Swagger setup
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Inventario',
      version: '1.0.0',
      description: 'Documentación de la API para la gestión de tiendas, productos y usuarios',
    },
    servers: [
      {
        url: `http://localhost:${SERVER_PORT}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/**/*.ts'], // Ruta hacia tus archivos de rutas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas de la aplicación
app.use('/', routes);

// Middleware global de errores
app.use((err: any, req: Request, res: Response, next: Function) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    error: {
      message: err.message || 'Error interno del servidor',
    },
  });
});

// Iniciar el servidor
connectDB().then(() => {
  app.listen(SERVER_PORT, () => {
    console.log("|------- ", Date(), " -------|");
    console.log(`✅ Servidor escuchando en el puerto: ${SERVER_PORT}`);
    console.log(`📘 Documentación Swagger disponible en: http://localhost:${SERVER_PORT}/api-docs`);
  });
}).catch((err) => {
  console.error("❌ No se pudo conectar a MongoDB:", err);
});
