const express = require("express")
const router = new express.Router()
const apiController = require("../controllers/api")

router.get("/majalah", apiController)

module.exports = router
