// ***** Servidor ***** //
require('dotenv').config();
require('colors');

const app = require('./app');
const port = app.get('port');

const conectarDB = require('./db/database'); // Conexión a Base de Datos 
conectarDB();

const main = async() => { // Arranca el Servidor 
    await app.listen(port, '0.0.0.0', () => {
        console.log('Server on Port:'.cyan, port);
    });
};

main();