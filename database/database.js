//conexão com o banco de dados
const Sequelize =  require ('sequelize');

const connection = new Sequelize('guiaperguntas','root','3134',{
    host : 'localhost',
    dialect : 'mysql'
});
module.exports = connection;