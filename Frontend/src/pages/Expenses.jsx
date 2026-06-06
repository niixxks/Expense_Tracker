function Expenses() {
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
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Food</td>
            <td>₹500</td>
            <td>Food</td>
            <td>08-06-2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;