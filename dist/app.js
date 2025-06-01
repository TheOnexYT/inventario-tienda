"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const SERVER_PORT = 3001;
// Conexión a base de datos
(0, db_1.connectDB)();
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// Swagger setup
const swaggerOptions = {
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
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// Rutas de la aplicación
app.use('/', index_routes_1.default);
// Middleware global de errores
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        error: {
            message: err.message || 'Error interno del servidor',
        },
    });
});
// Iniciar el servidor
(0, db_1.connectDB)().then(() => {
    app.listen(SERVER_PORT, () => {
        console.log("|------- ", Date(), " -------|");
        console.log(`✅ Servidor escuchando en el puerto: ${SERVER_PORT}`);
        console.log(`📘 Documentación Swagger disponible en: http://localhost:${SERVER_PORT}/api-docs`);
    });
}).catch((err) => {
    console.error("❌ No se pudo conectar a MongoDB:", err);
});
