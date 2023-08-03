import express from "express";
import bodyParser from "body-parser";

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/saludo', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`)
})