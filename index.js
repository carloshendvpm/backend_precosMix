require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./src/routes');
const cors = require('cors');
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res,next) => {
    res.header("Acess-Control-Allow-Origin", "*")
    res.header("Acess-Control-Allow-Methods", "GET, PUT, POST DELETE")
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    app.use(cors())
    next();
});
app.use(routes)


app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT}: https://localhost:${process.env.PORT}"`)
})