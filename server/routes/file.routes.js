const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/auth.middleware");
const fileController = require("../controllers/file.controller");

router.post("/files", authMiddleware, fileController.createDir);
router.get("/files", authMiddleware, fileController.getFiles);

module.exports = router;
