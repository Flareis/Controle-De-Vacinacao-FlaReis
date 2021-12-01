const {Sequelize} = require ("sequelize");

const database = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

database.authenticate()
.then(() => console.log('O seu banco de dados foi conectado.'))
.catch(() => console.error('O banco de dados não pôde ser conectado.', error))

module.exports = { database }