function AddExpense() {
  return (
    <div className="page-container">
      <h1>Add Expense</h1>

      <form className="expense-form">
        <input type="text" placeholder="Expense Title" />

        <input type="number" placeholder="Amount" />

        <select>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Health</option>
        </select>

        <input type="date" />

        <textarea placeholder="Notes"></textarea>

        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;