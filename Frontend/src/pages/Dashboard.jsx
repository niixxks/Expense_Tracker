import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

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

  const totalExpenses = expenses.reduce(
    (total, expense) =>
      total + Number(expense.amount),
    0
  );

  const totalTransactions = expenses.length;

  const latestExpenses = [...expenses]
    .reverse()
    .slice(0, 5);

  return (
    <>
      <div className="cards">
        <DashboardCard
          title="Total Expenses"
          value={`₹${totalExpenses}`}
        />

        <DashboardCard
          title="Transactions"
          value={totalTransactions}
        />
      </div>

      <div className="recent-expenses">
        <h2>Recent Transactions</h2>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            {latestExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>₹{expense.amount}</td>
                <td>{expense.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;