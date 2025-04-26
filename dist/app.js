"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const SERVER_PORT = 3001;
(0, db_1.connectDB)();
// middlewares
app.use(express_1.default.json()); // la instancia app usa el modulo de express JSON
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)()); // esta instancia usa el modulo de politica de privacidad Cors
// app.set('view engine', 'ejs'); // Configuramos EJS como el mo tor de plantillas
// app.set('views', path.join(__dirname, 'views'));
//swagger docs
// const swaggerOptions: swaggerJsdoc.Options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'API Basica',
//             version: '1.0.0',
//             description: 'Documentación de la API creada con Express y Swagger',
//         },
//         servers: [
//             {
//                 url: `http://localhost:${SERVER_PORT}`,
//             },
//         ],
//     },
//     apis: ['./src/routes/**/*.ts'],
// };
// const swaggerDocs = swaggerJsdoc(swaggerOptions);
// app.use('/docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// dev 
app.use((0, morgan_1.default)('dev')); // esta instacia usa el modulo morgan para el registro de peticiones requeridas a la API
//router
// app.get('/', (req: Request, res: Response) => {
//     res.render('index', { title: 'API', name: "Ed" });
// });
app.use('/', index_routes_1.default);
(0, db_1.connectDB)().then(() => {
    app.listen(SERVER_PORT, () => {
        console.log("|------- ", Date(), " -------|");
        console.log(`✅ Servidor escuchando en el puerto: ${SERVER_PORT}`);
    });
}).catch((err) => {
    console.error("❌ No se pudo conectar a MongoDB:", err);
});
