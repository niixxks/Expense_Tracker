import { useEffect, useState } from "react";
import axios from "axios";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/expenses"
      );

      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this expense?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/expenses/${id}`
    );

    fetchExpenses();
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    fetchExpenses();
  }, []);

  const filteredExpenses = expenses.filter(
    (expense) => {
      const matchSearch =
        expense.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchCategory =
        category === "" ||
        expense.category === category;

      return (
        matchSearch &&
        matchCategory
      );
    }
  );

  return (
    <div className="page-container">
      <h1>Expense List</h1>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search Expense..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Health">Health</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
  {filteredExpenses.length === 0 ? (
    <tr>
      <td colSpan="6">
        No Expenses Found
      </td>
    </tr>
  ) : (
    filteredExpenses.map((expense) => (
      <tr key={expense.id}>
        <td>{expense.title}</td>
        <td>₹{expense.amount}</td>
        <td>{expense.category}</td>
        <td>{expense.date}</td>
        <td>{expense.notes}</td>

        <td>
          <button
            className="delete-btn"
            onClick={() =>
              handleDelete(expense.id)
            }
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
      </table>
    </div>
  );
}

export default Expenses;