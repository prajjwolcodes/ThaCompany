const { loginUser, registerUser, test } = require("../controller/authController")
const { requiresLogin } = require("../middleware/requiresLogin")
const { isAdmin } = require("../middleware/isAdmin")

const router = require("express").Router()

router.post("/login", loginUser)
router.post("/register", registerUser)

router.use(requiresLogin, isAdmin,)
router.get("/test", test)

module.exports = router