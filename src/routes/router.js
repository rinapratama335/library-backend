const express = require("express");
const router = express.Router();

const { getAllUser, deleteUser } = require("../controllers/user");

router.get("/users", getAllUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
