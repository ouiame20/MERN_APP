const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//Auth Routes 
router.post("/register", registerUser);    //Register User
router.post("/login", loginUser);          //Login User
router.get("/profile", protect, getUserProfile);    //Get Use Profile



module.exports = router;