const express = require("express");

const {
  getExpenses,
  addExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.get("/expenses", getExpenses);

router.post("/expenses", addExpense);

module.exports = router;