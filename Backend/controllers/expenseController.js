const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../data/expenses.json"
);

const getExpenses = (req, res) => {
  const data = fs.readFileSync(filePath);

  const expenses = JSON.parse(data);

  res.json(expenses);
};

const addExpense = (req, res) => {
  const { title, amount, category, date, notes } =
    req.body;

  const data = fs.readFileSync(filePath);

  const expenses = JSON.parse(data);

  const newExpense = {
    id: Date.now(),
    title,
    amount,
    category,
    date,
    notes,
  };

  expenses.push(newExpense);

  fs.writeFileSync(
    filePath,
    JSON.stringify(expenses, null, 2)
  );

  res.status(201).json(newExpense);
};

module.exports = {
  getExpenses,
  addExpense,
};