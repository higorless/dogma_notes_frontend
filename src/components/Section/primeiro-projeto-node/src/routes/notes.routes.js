const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const notesRoutes = Router();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// function myMiddleware(request, response, next) {
//   console.log("Você passou pelo MiddleWare");

//   next();
// }

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;
