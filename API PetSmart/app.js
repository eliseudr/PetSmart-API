/** @format */

const express = require("express");
const morgan = require("morgan");
const port = 3000;

const criarLoginRoutes = require("./api/routes/criar_login");
const loginRoutes = require("./api/routes/login");
const petsRoutes = require("./api/routes/pets");
const usuariosRoutes = require("./api/routes/usuarios");
const agendamentosRoutes = require("./api/routes/agendamentos");
const checkAuth = require("./api/middlewares/check-auth");

const strings = require("./api/helpers/strings");

const app = express();

// app.listen(port);
app.listen(port);

app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
console.log(`${strings.servidorRodando} ${port}`);

// Endpoints
// ----------------------------------------------------------------
app.use("/criar_login", criarLoginRoutes);
app.use("/login", loginRoutes);

app.use("/pets", checkAuth, petsRoutes);
app.use("/usuarios", checkAuth, usuariosRoutes);
app.use("/agendamentos", checkAuth, agendamentosRoutes);
// ----------------------------------------------------------------

// Trata o erro 404 de endpoint não encontrado.
app.use((req, res, next) => {
  const error = Error(strings.errorNotFound);
  error.status = 404;
  next(error);
});

// Todos os outros erros são passados para aqui e designados como erro interno do servidor (500).
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});

module.exports = app;
