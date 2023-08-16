import express from "express";
import bodyParser from "body-parser";
import sequelize from "./app/config/db.js";

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

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log("Modelos sincronizados en la base de datos");

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`El servidor está corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al sincronizar modelos o iniciar el servidor:", error);
  }
};

startServer()
