const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

//ROTAS / RECURSO

//METODOS HTTP
//GET: Buscar/listar uma informação do backend
//POST: Criar uma informação no backend
//PUT: Alterar uma informação no backend
//DELETE: Deletar uma informação no backend

//tipos de parametro 
//Query: parametros nomeados enviados na rota apos o "?" e geralmente servem para filtros e paginação
//Route Params: parametros utilizados para identificar recursos
//Request Body: corpo da requisição, utilizado para criar ou alterar recursos
