import {
  FaHome,
  FaPlusCircle,
  FaListAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Expense Tracker</h2>

      <ul>

        <li>
          <NavLink to="/">
            <FaHome />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-expense">
            <FaPlusCircle />
            Add Expense
          </NavLink>
        </li>

        <li>
          <NavLink to="/expenses">
            <FaListAlt />
            Expenses
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;