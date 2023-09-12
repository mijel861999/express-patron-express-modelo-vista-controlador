import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middelwares
app.use(bodyParser.urlencoded({ extended: true }));
// Para servir archivos estáticos y de la carpeta public
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/saludo", (req, res) => {
  res.send("Hola mundo!");
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
