const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const tagsRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// function myMiddleware(request, response, next) {
//   console.log("Você passou pelo MiddleWare");

//   next();
// }

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;
