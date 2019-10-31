import express from 'express';
import morgan from 'morgan';

import database from './database/database';
import routerProvincias from './routes/provincias.route';

// Inicializa la app
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/provincias', routerProvincias);

database.sync({ force: true }) // "force: true" borra la estructura actual y crea todo de nuevo
.then(() => console.info('Base actualizada'))
.catch(error => console.error('Error al conectar con la DB', error));

export default app;
