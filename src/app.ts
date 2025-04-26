import express, { Application, Request, Response } from "express";
import cors from 'cors';
import morgan from "morgan";
import routes from './routes/index.routes';
import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './config/db';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();


const SERVER_PORT: number = 3001;

connectDB();

// middlewares
app.use(express.json()); // la instancia app usa el modulo de express JSON
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // esta instancia usa el modulo de politica de privacidad Cors
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
app.use(morgan('dev')); // esta instacia usa el modulo morgan para el registro de peticiones requeridas a la API

//router
// app.get('/', (req: Request, res: Response) => {
//     res.render('index', { title: 'API', name: "Ed" });
// });

app.use('/', routes);


connectDB().then(() => {
    app.listen(SERVER_PORT, () => {
      console.log("|------- ", Date(), " -------|");
      console.log(`✅ Servidor escuchando en el puerto: ${SERVER_PORT}`);
    });
  }).catch((err) => {
    console.error("❌ No se pudo conectar a MongoDB:", err);
  });
  


