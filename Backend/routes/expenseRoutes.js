const express = require("express");

const {
  getExpenses,
  addExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", getExpenses);

router.post("/expenses", addExpense);

router.delete(
  "/expenses/:id",
  deleteExpense
);

module.exports = router;