const express = require("express")
const router = express.Router()
const controller = require("../controllers/vaccineController")

router.post("/", controller.createVaccine)

module.exports = router