import { useState } from "react";
import axios from "axios";

function AddExpense() {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/expenses",
        formData
      );

      alert("Expense Added Successfully");

      console.log(response.data);

      setFormData({
        title: "",
        amount: "",
        category: "",
        date: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add expense");
    }
  };

  return (
    <div className="page-container">
      <h1>Add Expense</h1>

      <form
        className="expense-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">
            Select Category
          </option>

          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Health">Health</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;