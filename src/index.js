// ***** Servidor ***** //
require('dotenv').config();
// require('colors');

const app = require('./app');
const port = app.get('port');

require('./db/database'); // Conexión a Base de Datos 

const main = async() => { // Arranca el Servidor 
    await app.listen(port, '0.0.0.0', () => {
        console.log('Server on Port:', port);
    });
};

main();