const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a Mongo Atlas
mongoose.connect("mongodb+srv://LeoYochiEX:1234@cluster0.anaxouh.mongodb.net/registroUsuarios?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error(err));


// Rutas
app.use("/api/users", usersRouter);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

