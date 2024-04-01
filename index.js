
const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", usuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});