// ***** Creación de Servidor con ExpressJS ***** //
const express = require('express');
const app = express();
const cors = require('cors'); // Permite la comunicación entre 2 servidores
const port = process.env.port || 4000; // Puerto de la app

// app.use(cors()); // Habilitando y/o Implementando cors 

const corsOptions = {
    origin: 'https://vast-taiga-45980.herokuapp.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.options('*', cors());
app.set('port', port); // Settings: Configurar Servidor: Puerto
app.use(express.json({ extended: true })); // Habilitar express.json

/*
app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
*/

// Routes: urls que la aplicación puede visitar
const [
    usuarios,
    auth,
    proyectos,
    tareas
] = [
    require('./routes/usuarios'),
    require('./routes/auth'),
    require('./routes/proyectos'),
    require('./routes/tareas')
];

app.use('/api/usuarios', usuarios);
app.use('/api/auth', auth);
app.use('/api/proyectos', proyectos);
app.use('/api/tareas', tareas);

module.exports = app;