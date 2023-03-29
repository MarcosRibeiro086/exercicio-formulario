//importando o express
const express = require ("express");
const app = express();
//importando o bodyParser
const bodyParser= require("body-parser")
//importando a conexão com o database
const connection = require("./database/database");
//importando o arquivo com a tabela
const pergunta = require ("./database/Pergunta");
//database sequelize

connection
    .authenticate()
    .then(()=>{
        console.log("bem vindo ao banco de dados")
    })
    .catch((msgERRO)=>{
        console.log(msgERRO);
    })

//estou dizendo para o express usar o ejs como view engine(motor de HTML)
app.set('view engine','ejs');
app.use(express.static('public'));
//bodyparser, permitir que os dados sejam traduzidos para dentro do projeto
app.use(bodyParser.urlencoded({extended: false}));
//permite leitura de dados de formulário via jason
app.use(bodyParser.json());
//rotas
app.get("/perguntar",(req,res)=>{
   //metodo render olha dentro da pasta views
    res.render("perguntar");
});
//app.post para receber dados de formulários
app.post("/salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao

    pergunta.create({
        titulo: titulo,
        descricao : descricao
    }).then(()=>{
        res.redirect("/perguntar");
    })

});
app.listen(8080,()=>{console.log("app rodando!");});