const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a Mongo Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error(err));

// Rutas
app.use("/api/users", usersRouter);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Servidor corriendo en puerto ${PORT}`));
