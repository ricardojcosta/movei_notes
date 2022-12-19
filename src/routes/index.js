const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./movies_notes.routes");
const tagsRouter = require("./movies_tags.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;