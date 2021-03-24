const express = require("express")
const router = new express.Router()
const adminController = require("../controllers/admin")
const auth = require("../middlewares/auth")
const { uploadMultiple } = require("../middlewares/multer")

router.get("/", (_, res) => res.redirect("/admin/login"))
router.get("/login", adminController.viewLogin)
router.post("/login", adminController.actionLogin)
// TODO: enable this later for login
router.get("/dashboard", auth, adminController.viewDashboard)
// router.get("/dashboard", adminController.viewDashboard)

// TODO: enable this later for login
router.get("/tambah-data", auth, adminController.viewAddData)
router.post("/tambah-data", auth, uploadMultiple, adminController.actionAddData)
// router.get("/tambah-data", adminController.viewAddData)
// router.post("/tambah-data", uploadMultiple, adminController.actionAddData)

// TODO: enable this later for login
router.delete("/hapus-data/:id", auth, adminController.actionRemoveData)
// router.delete("/hapus-data/:id", adminController.actionRemoveData)

// TODO: enable this later for login
router.get("/edit-data/:id", auth, adminController.viewEditData)
router.put(
  "/edit-data/:id",
  auth,
  uploadMultiple,
  adminController.actionEditData
)
// router.get("/edit-data/:id", adminController.viewEditData)
// router.put("/edit-data/:id", uploadMultiple, adminController.actionEditData)

module.exports = router
