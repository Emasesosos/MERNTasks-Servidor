/* ***** Conexión a Base de Datos: MongoDB ***** */
const mongoose = require('mongoose');

const URI = process.env.DB_MONGO_ATLAS;
console.log('URI: ', URI);

const conectarDB = async() => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log('hubo un error')
        console.log(error);
        process.exit(1);
    }
};

// conectarDB();

module.exports = conectarDB;

//const connection = mongoose.connection;
// console.log(connection);

/*
connection.once('open', () => {
    console.log('DB is Connected on: '.cyan, URI.magenta);
});
*/