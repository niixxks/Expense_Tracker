import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div>
        <h2>Dashboard</h2>
      </div>

      <div className="profile">
        <FaUserCircle size={30} />
        <span>Nitesh</span>
      </div>
    </div>
  );
}

export default Header;