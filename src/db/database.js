/* ***** Conexión a Base de Datos: MongoDB ***** */
const mongoose = require('mongoose');

const URI = process.env.DB_MONGO_ATLAS;

const conectarDB = async() => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    } catch (error) {
        console.log(error);
        console.log('Hubo un Error al conectar la Base de Datos');
        process.exit(1);
    }
};

conectarDB();

const connection = mongoose.connection;
// console.log(connection);

connection.once('open', () => {
    console.log('DB is Connected');
});