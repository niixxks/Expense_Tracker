import { useEffect, useState } from "react";
import axios from "axios";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

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

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="page-container">
      <h1>Expense List</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Notes</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>₹{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>{expense.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;