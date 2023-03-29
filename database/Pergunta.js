//importando o sequelize, importando a conxeão do banco de dados
const Sequelize =require ("sequelize");
const connection =require ("./database");
//criando variável guardar a tabela
const pergunta=connection.define('pergunta',{
    //definindo os campos da tabela, os tipos, se pode ser nula ou não
    titulo:{
        type:Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});
//passa a tabela para o banco de dados
pergunta.sync({force:false}).then(()=>{});
module.exports = pergunta;