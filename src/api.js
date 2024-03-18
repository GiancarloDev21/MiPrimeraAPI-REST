//Parte principal del proyecto
const express = require('express')
const mongoose = require('mongoose')

const user = require('./user.handler')

const app = express()

const port = 3560

app.use(express.json())


mongoose.connect('mongodb+srv://gianalvarez2109:21092000@clustergiandeveloperpri.jico7en.mongodb.net/api-dbGiancarlo?retryWrites=true&w=majority&appName=ClusterGianDeveloperPrincipal')

//Listar todos los usuarios
app.get('/api/', user.list)

//Crear nuevo usuario en la BD
app.post('/api/', user.create)

//Traer un usuario por ID
app.get('/api/:id', user.get)

//Actualizar un usuario por ID
app.put('/api/:id', user.update)

//Eliminar un usuario por ID
app.delete('/api/:id', user.delete)


//salida de informacion

app.listen(port, ()=>{
    console.log(`****************************************************************`)
    console.log(`*****Mi primera API-REST esta ejecutando en el puerto ${port}***`)
    console.log(`****************************************************************`)
    console.log('Corriendo en : http://localhost:3560/api')
})