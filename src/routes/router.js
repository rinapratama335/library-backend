const express = require("express");
const router = express.Router();

const { getAllUser, deleteUser } = require("../controllers/user");
const {
  getAllCategories,
  getDetailCategory,
  addCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/category");

router.get("/users", getAllUser);
router.delete("/user/:id", deleteUser);

router.get("/categories", getAllCategories);
router.get("/category/:id", getDetailCategory);
router.post("/category", addCategory);
router.patch("/category/:id", editCategory);
router.delete("/category/:id", deleteCategory);

module.exports = router;
