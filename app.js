const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

/* rutas */

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);

app.use((req, res, next) => {
  res.status(404).send("Página no encontrada");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error del servidor");
});

app.listen(port, () => {
  console.log(`Server runnig in http://localhost:${port}`);
});
