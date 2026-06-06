import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <>
      <div className="cards">

        <DashboardCard
          title="Total Balance"
          value="₹25,000"
        />

        <DashboardCard
          title="Income"
          value="₹40,000"
        />

        <DashboardCard
          title="Expenses"
          value="₹15,000"
        />

        <DashboardCard
          title="Transactions"
          value="24"
        />

      </div>

      <div className="recent-expenses">
        <h2>Recent Expenses</h2>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Food</td>
              <td>₹500</td>
              <td>Food</td>
            </tr>

            <tr>
              <td>Travel</td>
              <td>₹1200</td>
              <td>Travel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;