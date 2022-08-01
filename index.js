//carregar o modulo express
const express = require('express')

//carregar o module mongoose
const mongoose = require('mongoose')

//conecar com o banco de dados revisao
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:matheus2207@fiaptecnico.ekwgy.mongodb.net/Revisao')
}

//conectar com a collection info
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String,
})

const infos = mongoose.model('infos', modelo)

//executar o module express
const app = express()

//definir o local padrão para os arquivos ejs
app.set('views', './')

//renderizar o arquivo index.ejs na requisição / (root)
app.get('/', async(req, res)=>{
    //conectar com a revisao
    conexao()
    //buscar todos os dados de infos
    const resultado = await infos.find()
    res.render('index.ejs',{resultado})
})

//ligar o servidor na porta 4040
app.listen(4040,()=>{
    console.log('servidor local em http://localhost:4040');
})
